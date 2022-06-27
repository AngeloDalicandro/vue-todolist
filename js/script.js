


var app = new Vue({
    el: '#root',
    data: {

        newTodo: {
            task: null,
            done: null
        },

        newTask: "",

        todos: [
            {
                task: 'Leggi per 30 minuti',
                done: true
            },
            {
                task: 'Chiama la nonna',
                done: false
            },
            {
                task: 'Porta fuori il cane',
                done: false
            }
        ]
    },

    methods: {
        addTodo() {
            this.newTodo = {
                task: this.newTask,
                done: false
            }

            this.todos.push(this.newTodo);

            this.newTask = "";
        },

        taskDone(a) {
            this.todos[a].done = true;
        },

        removeTask(a) {
            this.todos.splice(a, 1);
        }
    }
})