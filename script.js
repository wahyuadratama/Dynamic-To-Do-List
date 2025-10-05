const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const toggleModeBtn = document.getElementById('toggleModeBtn');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    // Checkbox to mark completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    // Reminder button
    const reminderBtn = document.createElement('button');
    reminderBtn.textContent = '⏰';
    reminderBtn.className = 'reminder-btn';
    reminderBtn.addEventListener('click', () => {
        const time = prompt('Set reminder in minutes:');
        if(time && !isNaN(time)) {
            setTimeout(() => {
                alert(`Reminder: ${taskText}`);
            }, time * 60000);
        }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => li.remove());

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';
    actionsDiv.appendChild(reminderBtn);
    actionsDiv.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actionsDiv);

    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') addTask(); });

// Dark / Light Mode toggle
toggleModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        toggleModeBtn.textContent = '☀️ Light Mode';
    } else {
        toggleModeBtn.textContent = '🌙 Dark Mode';
    }
});
