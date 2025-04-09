const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    let editingTask = null;

    // Add/Edit Task Event Listener
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        if (editingTask) {
         
          editingTask.querySelector('span').textContent = taskText;
          resetInput();
        } else {
          // Add new task
          addTask(taskText);
          taskInput.value = '';
        }
      }
    });

   
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const taskText = taskInput.value.trim();
        if (taskText) {
          if (editingTask) {
            editingTask.querySelector('span').textContent = taskText;
            resetInput();
          } else {
            addTask(taskText);
            taskInput.value = '';
          }
        }
      }
    });

 
    function addTask(text) {
      const li = document.createElement('li');
      li.className = 'task-item';

      const taskSpan = document.createElement('span');
      taskSpan.textContent = text;

      const toggleBtn = document.createElement('button');
      toggleBtn.textContent = 'Complete';
      toggleBtn.className = 'btn btn-success btn-sm';
      toggleBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.className = 'btn btn-warning btn-sm';
      editBtn.addEventListener('click', () => {
        taskInput.value = taskSpan.textContent;
        addTaskBtn.textContent = 'Edit Task';
        editingTask = li;
        taskInput.focus();
      });

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'btn btn-danger btn-sm';
      deleteBtn.addEventListener('click', () => {
        if (editingTask === li) resetInput();
        li.remove();
      });

      li.appendChild(taskSpan);
      li.appendChild(toggleBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }

   
    function resetInput() {
      taskInput.value = '';
      addTaskBtn.textContent = 'Add Task';
      editingTask = null;
    }