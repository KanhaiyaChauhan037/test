let data = JSON.parse(localStorage.getItem("user")) || []


function login() {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    // event.preventDefault()
    let flag = false

    for (let i = 0; i < data.length; i++) {
        // console.log(data[i])

        if (data[i].email == email && data[i].password == password) {
            flag = true

        }
    }
    if (flag) {
        alert("loginn successfull")
        location.href = "checkout.html"
    }
    else {
        alert("user email or password is wrong")
    }
}