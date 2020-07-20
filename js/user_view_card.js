const current = localStorage.getItem('clicked')
const nameEle = document.querySelector('#name')
const emailEle = document.querySelector('#email')
const phoneEle = document.querySelector('#phone')
const websiteEle = document.querySelector('#website')
const addressEle = document.querySelector('#address')
const companyEle = document.querySelector('#company')
const user_data = JSON.parse(localStorage.getItem('user_data'))

load_DOM = () => {
    let current_user = user_data[current]
    nameEle.textContent = current_user["name"]
    emailEle.textContent = current_user["email"]
    phoneEle.textContent = current_user["phone"]
    websiteEle.textContent = current_user["website"]
    addressEle.textContent = current_user["address"]["city"]
    companyEle.textContent = current_user["company"]["name"]
}

document.querySelector('#like').addEventListener('click', (e) => {
    if (e.target.classList[e.target.classList.length - 1] !== "like-click") {
        e.target.classList.add("like-click")
    } else {
        e.target.classList.remove("like-click")
    }
})

document.querySelector('#delete').addEventListener('click', (e) => {
    if (confirm(`Are you sure delete user ${user_data[current]["name"]}`)) {
        user_data.splice(current, 1)
        localStorage.setItem("user_data", JSON.stringify(user_data))
        location.assign('user_list.html')
    }
})

const name = document.querySelector('#Name')
const email = document.querySelector('#Email')
const phone = document.querySelector('#Mobile')
const website = document.querySelector('#web')
const address = document.querySelector('#City')
const company = document.querySelector('#company-name')

document.querySelector('#submit-modal').addEventListener('click', (e) => {
    if (name.value !== "") {
        user_data[current]["name"] = name.value
    }
    if (email.value !== "") {
        user_data[current]["email"] = email.value
    }
    if (phone.value !== "") {
        user_data[current]["phone"] = phone.value
    }
    if (website.value !== "") {
        user_data[current]["website"] = website.value
    }
    if (address.value !== "") {
        user_data[current]["address"]["city"] = address.value
    }
    if (company.value !== "") {
        user_data[current]["company"]["name"] = company.value
    }

    load_DOM()
    localStorage.setItem("user_data", JSON.stringify(user_data))
    $('#myModal').modal('hide');
})

document.querySelector('#edit').addEventListener('click', (e) => {
    name.value = user_data[current]["name"];
    email.value = user_data[current]["email"];
    phone.value = user_data[current]["phone"];
    website.value = user_data[current]["website"];
    address.value = user_data[current]["address"]["city"];
    company.value = user_data[current]["company"]["name"];
})

document.querySelector('#back-button').addEventListener('click', (e) => {
    location.assign('user_list.html')
})

document.querySelector('#logout').addEventListener('click', (e) => {
    localStorage.removeItem("current_user")
    location.assign('index.html')
})

window.onload = () => {
    if (localStorage.getItem("current_user") == undefined) {
        location.assign('index.html')
    } else {
        load_DOM()
    }
}