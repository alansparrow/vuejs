const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: ''
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
        }
    }
});

app.mount("#assignment");