// The application has been guided by Tyler Potts' video
// https://www.youtube.com/watch?v=MkESyVB4oUw

window.addEventListener('load', () => {
    //get id from html file
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    //var tasks = ["sang", "nhu", "tuan"];
    //localStorage.setItem('tasks', JSON.stringify(tasks));
    var tasks = [];
    if (localStorage.getItem('tasks') != null) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(tasks);
    }

    for (let i = 0; i < tasks.length; i++) {
        //console.log("loading here " + i);
        loadWeb(i);
    }

    function loadWeb(index) {

        //create class task
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        //create class content
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        //create and get input content
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = tasks[index];
        task_input_el.setAttribute('readonly', 'readonly');

        //create class actions
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        //create action buttons
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        //create delete function
        deleteTask(task_delete_el, task_el, task_input_el);

        //create edit function
        editTask(task_edit_el, task_input_el);

        //connect content
        task_el.appendChild(task_content_el);
        task_content_el.appendChild(task_input_el);
        task_el.appendChild(task_actions_el)
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        //connect to html
        //list_el.appendChild(task_el);
        display(task_el);
    }

    function display(task_el) {
        list_el.appendChild(task_el);
    }

    //delete a task from local storage
    function deleteTask(task_delete_el, task_el, task_input_el) {

        task_delete_el.addEventListener('click', () => {
            tasks.forEach((e) => {
                if (task_input_el.value == e) {
                    const index = tasks.indexOf(task_input_el.value);
                    //console.log("day la index: " + index);
                    tasks.splice(index, 1);
                    //console.log("new tasks " + tasks);
                    localStorage.setItem('tasks', JSON.stringify(tasks));
                    return;
                }
            });
            list_el.removeChild(task_el);
            //console.log(task_delete_el);
        })
    };

    //Edit a task from local storage
    function editTask(task_edit_el, task_input_el) {
        let copiedTask = "";

        task_edit_el.addEventListener('click', () => {

            let changingTask = task_input_el.value;
            console.log("copy of task: " + changingTask);

            if (task_edit_el.innerText.toLocaleLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();

            } else {
                //check and save changing task
                tasks.forEach((e) => {
                    if (copiedTask == e) {
                        const index = tasks.indexOf(copiedTask);
                        tasks[index] = changingTask;
                        localStorage.setItem('tasks', JSON.stringify(tasks));
                        return;
                    }
                });

                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
                //console.log("new value: " + task_input_el.value);

            }

            copiedTask = changingTask;

        })
    }

    //Save new task from input to the local storage
    function saveNewTask(newTask) {
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadWeb(tasks.length - 1);
    }

    //Submit function to save new tasks
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = input.value;

        if (!content) {
            alert("Please fill out the task");
            return;
        }

        saveNewTask(content);
        input.value = "";

    });

});