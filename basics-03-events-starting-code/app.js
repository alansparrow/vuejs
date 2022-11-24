const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + lastName;
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
