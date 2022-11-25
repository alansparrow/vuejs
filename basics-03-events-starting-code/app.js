const app = Vue.createApp({
  data() {
    return {
      counter: 80,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    resetInput() {
      this.name = ''; 
      this.confirmInput();
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert('Submitted');
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    sub(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
