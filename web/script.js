
function runapp(){
    console.log("yes");
	fetch('createUser', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
          credentials: 'include',
	  body: JSON.stringify({
		firstname: 'John', 
		lastname: 'Doe',
		email: 'johndoe@example.com',
		password: 'admin',
		address: 'Sompa'
	  })
	})
	.then(response => {
	  if (!response.ok) {
		throw new Error('Network response was not ok');
	  }
	  console.log(response.json());
	})
	.then(data => {
	  console.log(data);
	})
	.catch(error => {
	  console.error('There was an error!', error);
	});
};
runapp();