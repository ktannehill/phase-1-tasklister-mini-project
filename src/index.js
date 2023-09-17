// defer in <script> makes this redundant
// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

// 1. create global variables

// target submit through the form & UL
const taskForm = document.querySelector('#create-task-form')
const taskUL = document.querySelector('#tasks')

function addTask(e) {
  // block page refresh
  e.preventDefault()
  // determine what user typed
  const input = e.target['new-task-description'].value
  // debugger - target is THE FORM
  // create li with text
  const newLi = document.createElement('li') // returns a new node
  newLi.textContent = input
  // create delete button
  const btn = document.createElement('button')
  btn.addEventListener('click', () => newLi.remove())
  btn.textContent = "X"
  // determine priority, since one word ID (priority) can use dot notation
  const priority = e.target.priority.value // user input
  // change text color based on priority
  // if(priority === 'high') {
  //   newLi.style.color = 'red'
  // } else if(priority === 'medium') {
  //   newLi.style.color = 'yellow'
  // } else (priority === 'low') {
  //   newLi.style.color = 'green'
  // }
      // shouldn't add CSS in JS, should add class that set color
        // much cleaner & SOC
  newLi.classList.add(priority)
  // append btn to li
  newLi.appendChild(btn)
  // append li as child of ul
  taskUL.appendChild(newLi) // append child expects a node
  // empty form
  e.target.reset()
}

function attachListener() {
  // attach all listeners
  taskForm.addEventListener('submit', addTask)
}

attachListener()

// delete all items
taskUL.innerHTML = ""