const app = Vue.createApp({
  data() {
    return {
      counter: 80,
      name: ''
    };
  },
  methods: {
    getFullName() {
      console.log("exec getFullName()");
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Rock';
    },
    resetInput() {
      this.name = ''; 
      this.confirmInput();
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
