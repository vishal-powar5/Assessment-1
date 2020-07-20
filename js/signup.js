const emailEle = document.querySelector('#email')
const passwordEle = document.querySelector('#password')
const dobEle = document.querySelector('#dob')
const positionEle = document.querySelector('#position')
const submitEle = document.querySelector('#signup-submit')


submitEle.addEventListener('click', (e) => {
    if (emailValidate(emailEle.value) && passwordEle.value.length >= 8 && positionEle.value !== "" && dobEle.value !== "") {
        let email = emailEle.value
        console.log(email)
        console.log(localStorage.getItem(email))
        if (localStorage.getItem(email) == null) {
            let data = JSON.stringify({ "password": passwordEle.value, "dob": dobEle.value, "position": positionEle.value })
            localStorage.setItem(email, data)
            location.assign('index.html')
        } else {
            alert("already signed up")
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
    console.log(data)
    if (data.match(mailformat)) {
        return true
    } else {
        return false
    }
}

window.onload = () => {
    let now = new Date()
    let yyyy = now.getFullYear() - 15
    let mm = now.getMonth() + 1
    let dd = now.getDate()
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    let today = `${yyyy}-${mm}-${dd}`
    document.querySelector('#dob').setAttribute("max", today)
    document.querySelector('#dob').setAttribute("value", today)
}