const { createApp } = Vue;

createApp ({
    data() {
        return {
            logo:'./img/logoBoolean.png',
            newItemName:'',
            todo_list: [
                {
                    text: 'Comprare il pane',
                    done: false
                },
                {
                    text: 'Fare benzina alla macchina',
                    done: true
                },
                {
                    text: 'Svolgere il progetto di Boolean',
                    done: false
                },
                {
                    text: 'Andare ad allenamento',
                    done: false
                },
                {
                    text: 'Cucinare la cena',
                    done: false
                },
                {
                    text: 'Fare una passeggiata col cane',
                    done: true
                },
            ]
        }
    },
    methods: {
        deleteItem(index){
            let confirmation = confirm('Sei sicuro di voler cancellare questo elemento?')
            if(confirmation){
                // Utilizzo dello splice per rimuovere l'oggetto dall'array
                this.todo_list.splice(index, 1);
            }
        },
        addItem(){
            if (this.newItemName) {
                // Aggiunge un nuovo oggetto all'array
                this.todo_list.push({
                  text: this.newItemName,
                  done: false
                });
                // Resetta il campo di input
                this.newItemName = '';
              }
        }
    },
}).mount('#app');