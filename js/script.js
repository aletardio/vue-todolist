const { createApp } = Vue;

createApp ({
    data() {
        return {
            logo:'./img/logoBoolean.png',
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
        
    },


}).mount('#app');