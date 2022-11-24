Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');

// const buttonElem = document.querySelector('button');
// const inputElem = document.querySelector('input');
// const listElem = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputElem.value;
//     const listItemElem = document.createElement('li');
//     listItemElem.textContent = enteredValue;
//     listElem.appendChild(listItemElem);
//     inputElem.value = '';
// }

// buttonElem.addEventListener('click', addGoal)

