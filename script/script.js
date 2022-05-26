// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no


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

const app = new Vue({

    el: '#todo',
    data: {
        todos,
        doneToDos: [],
        newToDo: {
            text: '',
            done: false
        }
    },


    // MILESTONE 1
    // Stampare all’interno di una lista, un item per ogni todo.
    // Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
    
    methods: {

        addItem(){
            if(this.newToDo !== ""){
                this.todos.push(this.newToDo);
                this.newToDo = "";

            }
        },


        // MILESTONE 2
        // Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

        deleteItem(index){
            this.todos.splice(index,1);
        }
    }
});
    


// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) ;
// 3 - migliorare il layout, visto che è a vostra libera interpretazione.