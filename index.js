let inputValue = document.getElementById('input-box')
let listContainer = document.getElementById('list-container')

const saveData = () => {
    localStorage.setItem('tasks', listContainer.innerHTML)
}

const localData = () => {
    listContainer.innerHTML = localStorage.getItem('tasks') || ''
}

const addTask = () => {
    if (inputValue.value === '') {
        alert('Please type something')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputValue.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }

    inputValue.value = ''

    saveData()
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

localData()