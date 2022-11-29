const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            isListVisible: true,
            toggleButtonText: 'Hide'
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
            this.toggleButtonText = this.isListVisible ? 'Hide' : 'Show';
        }
    }
});

app.mount('#assignment');