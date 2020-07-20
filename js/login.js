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