// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) ;
// 3 - migliorare il layout, visto che è a vostra libera interpretazione.


const todos = [
    {
        text: 'Fare la spesa',
        done: true
    },
    {
        text: 'Studiare',
        done: false
    },
    {
        text: 'Prenotare Biglietti',
        done: true
    },
    {
        text: 'Cucinare',
        done: false
    }
]

const myTodoList = new Vue({

    el: '#app',
    data: {
        todos,
        newToDo: {
            text: '',
            done: false
        }
    },
    
    methods: {

        // MILESTONE 3
        // Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
        
        addItem(){

            const newTask = {
                text: this.newToDo.text,
                done: false
            }

            if(this.newToDo !== ""){

                this.todos.push(newTask);
                this.newTask = "";
                this.newToDo.text = "";
            }

            
        },


        // MILESTONE 1
        // Stampare all’interno di una lista, un item per ogni todo.
        // Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

        taskDone(index) {
            if (this.todos[index].done === true) {
                return 'task-done';
            }
        },

        
        taskToggle(item) {
            if (item.done === true) {
                item.done = false;
            } else {
                item.done = true;
            }
        },

        // MILESTONE 2
        // Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

        deleteItem(index){
            this.todos.splice(index, 1);
        },
        
        
        

    }
});
