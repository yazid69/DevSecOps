// document.getElementById('add-task-btn').addEventListener('click', function () {
//     const taskInput = document.getElementById('task-input');
//     if (taskInput.value.trim() !== '') {
//         const tasksUl = document.getElementById('tasks-ul');
//         const li = document.createElement('li');

//         // Introducing a XSS vulnerability
//         li.innerHTML = taskInput.value;

//         li.addEventListener('click', function () {
//             this.classList.toggle('completed');
//         });
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Supprimer';
//         deleteBtn.addEventListener('click', function () {
//             tasksUl.removeChild(li);
//         });
//         li.appendChild(deleteBtn);
//         tasksUl.appendChild(li);
//         taskInput.value = '';
//     }
// });