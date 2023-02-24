class ToDo {

    constructor() {
        this.totalTasks = document.querySelectorAll(".task").length;
    }

    addTask(taskText) {
        //to clone template
        let template = document.querySelector(".task").cloneNode(true);
        //to remove class hide
        template.classList.remove("hide");
        //to manipulate the text
        let templateText = template.querySelector(".taskTitle");
        templateText.textContent = taskText;

        let list = document.querySelector("#tasksContainer");

        //to insert in list
        list.appendChild(template);

        //to add events to tasks
        this.addEvents();

        this.checkTasks('add');
    }

    removeTask(task) {
        //to find dad element
        let parentEl = task.parentElement;

        //to remove of the list
        parentEl.remove();

        this.checkTasks('remove');
    }

    completeTask(task) {
        // to add class 'done'
        task.classList.add('done');
    }

    addEvents() {

        let removeBtns = document.querySelectorAll(".fa-trash");
        let lastRemoveBtn = removeBtns[removeBtns.length - 1];

        let doneBtns = document.querySelectorAll(".fa-check");
        let lastDoneBtn = doneBtns[doneBtns.length - 1];

        //to add event to remover task
        lastRemoveBtn.addEventListener("click", function() {
            todo.removeTask(this);
        });

        //to add event to complete task
        lastDoneBtn.addEventListener("click", function() {
            todo.completeTask(this);
        });
    }

    checkTasks(command) {
        let msg = document.querySelector("#emptyTask");
        //to add and to remove task
        if(command === 'add') {
            this.totalTasks += 1;
        }else if(command === 'remove') {
            this.totalTasks -= 1;
        }

        //to check if it has more than one task and adds or removes class
        if(this.totalTasks == 1) {
            msg.classList.remove("hide");
        } else {
            msg.classList.add("hide");
        }
    }

};

let todo = new ToDo();

//Events
let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", function(e) {
    e.preventDefault();

    let taskText = document.querySelector("#task");

    if(taskText.value != "") {
        todo.addTask(taskText.value);
    }

});


