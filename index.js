// Add your code here

function submitData(userName, userEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(resp => resp.json())
    .then(json => {
        let id = json.id;
        let body = document.querySelector('body');
        let p = document.createElement('p');
            // console.log(id);
            // console.log(body);
        p.textContent = id;
            // console.log(p);
        body.appendChild(p);
    })
    .catch(error => {
        //alert("Alert Text");
            console.log("Console Alert")
        let errorMessage = error.message;
        let body = document.querySelector('body');
        let p = document.createElement('p');
            // console.log(id);
            // console.log(body);
        p.textContent = errorMessage;
            // console.log(p);
        body.appendChild(p);
    });
}

submitData('Frank Reynolds', "ongo@gmail.com");