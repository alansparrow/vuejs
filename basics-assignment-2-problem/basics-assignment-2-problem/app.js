const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            name: ''
        };
    },
    methods: {
        showAlert() {
            alert("Hello!");
        },
        updateFirstName(event) {
            this.firstName = event.target.value;
        },
        updateLastName(event) {
            this.lastName = event.target.value;
        },
        resetInput() {
            this.name = '';
        }
    }
});

app.mount("#assignment");