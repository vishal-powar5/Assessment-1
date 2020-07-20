const submitEle = document.querySelector('#login-submit')
const emailEle = document.querySelector('#email')
const passwordEle = document.querySelector('#password')

submitEle.addEventListener('click', (e) => {
    if (emailValidate(emailEle.value) && passwordEle.value.length >= 8) {
        let email = emailEle.value
        let password = passwordEle.value
        let credentials = JSON.parse(localStorage.getItem(email))
        if (credentials["password"] === password) {
            generateData().then((data) => {
                localStorage.setItem("current_user", email)
                location.assign('user_list.html')
            }).catch((e) => {
                alert("Loading Error.!")
            })
        } else {
            alert("Unauthorized Access")
        }
    } else {
        alert("Something went wrong.!")
    }
})

emailEle.addEventListener('change', (e) => {
    if (!emailValidate(e.target.value) && e.target.value !== "") {
        document.querySelector('#email-message').textContent = "Invalid Email"
    } else {
        document.querySelector('#email-message').textContent = ""
    }
})
passwordEle.addEventListener('change', (e) => {
    if (!(e.target.value.length >= 8) && e.target.value !== "") {
        document.querySelector('#password-message').textContent = "password must contain 8 or more characters."
    } else {
        document.querySelector('#password-message').textContent = ""
    }
})

const emailValidate = function (data) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.match(mailformat)) {
        return true
    } else {
        return false
    }
}

const generateData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {})
    let user_data = await response.json()
    localStorage.setItem("user_data", JSON.stringify(user_data))
}