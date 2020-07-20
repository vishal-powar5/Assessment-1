window.onload = () => {
    let user_data = JSON.parse(localStorage.getItem('user_data'))
    user_data.forEach((item, index) => {
        let user = document.createElement('div')
        user.setAttribute("id", `c${index + 1}`)
        user.setAttribute("class", "list-item")

        let icon = document.createElement('i')
        icon.classList.add("fas")
        icon.classList.add("fa-user")
        icon.classList.add("fa-2x")
        user.appendChild(icon)

        let span1 = document.createElement('span')
        span1.setAttribute("id", "client-name")
        span1.textContent = item["name"]
        user.appendChild(span1)

        let span2 = document.createElement('span')
        span2.setAttribute("id", "client-city")
        span2.textContent = `from : ${item["address"]["city"]}`
        user.appendChild(span2)

        user.addEventListener('click', (e) => {
            localStorage.setItem("clicked", index)
            location.assign('user_view_card.html')
        })

        document.querySelector('#list').appendChild(user)
    })
}