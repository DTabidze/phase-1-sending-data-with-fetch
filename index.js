// Add your code here
function submitData (userName,email) {
    let userNameObj = {};
    userNameObj["name"] = userName;
    userNameObj["email"] = email;
    const URL = "http://localhost:3000/users";
    return fetch (URL, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(userNameObj)
    })
    .then(response => response.json())
    .then(data => {
        const newId = data.id;
        document.body.innerHTML += newId;
      })
    .catch(error => document.body.innerHTML += error.message);
}


