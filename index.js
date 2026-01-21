let inputValue = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')

const addTask = () => {
    if (inputValue.value === '') {
        alert('Please type something')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputValue.value
        listContainer.appendChild(li)
    }

    inputValue.value = ''
}