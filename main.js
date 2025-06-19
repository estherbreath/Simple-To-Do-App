
      'use strict';
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
      const list = document.getElementById('taskList');
      list.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = task.text;
        span.className = task.done ? 'done' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.done;
        checkbox.onclick = () => toggleDone(index);

        const delButton = document.createElement('button');
        delButton.textContent = 'Delete';
        delButton.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delButton);
        list.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById('taskInput');
      const text = input.value.trim();
      if (text) {
        tasks.push({ text, done: false });
        input.value = '';
        saveTasks();
        renderTasks();
      }
    }

    function toggleDone(index) {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    renderTasks();
  