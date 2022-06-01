//  --- cached element references ---
const todoInput = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-button')
const todoList = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset-button')

// --- Event listener ---

submitBtn.addEventListener('click', function(evt) {
  evt.target.style.backgroundColor = 'pink'
  if(todoInput.value === '') return
const newTodo = document.createElement('li') 
newTodo.textContent = todoInput.value
todoList.appendChild(newTodo)
// Why don't we put document.querySelector in front of ^ (Like Ben did in the lecture)
todoInput.value = ''
})

todoList.addEventListener('click', function(evt) {
  const parentNode = evt.target.parentNode
  parentNode.removeChild(evt.target)
})

resetBtn.addEventListener('click', function(evt) {
  todoList.innerHTML = ''
  todoInput.value = ''
})



