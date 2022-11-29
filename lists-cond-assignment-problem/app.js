const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            isListVisible: true
        }
    },
    computed: {
        buttonText() {
            return this.isListVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask() {
            console.log('enteredTask: ' + this.enteredTask);
            if (this.enteredTask !== '') {
                this.tasks.push(this.enteredTask);
            }
            this.enteredTask = '';
        },
        toggleListVisibility() {
            this.isListVisible = !this.isListVisible;
        }
    }
});

app.mount('#assignment');