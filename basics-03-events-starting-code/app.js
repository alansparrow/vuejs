const app = Vue.createApp({
  data() {
    return {
      counter: 80,
      name: ''
    };
  },
  computed: {
    fullName() {
      console.log("exec fullName()");
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Rock';
    }
  }
  ,
  methods: {
    resetInput() {
      this.name = ''; 
    },
    submitForm(event) {
      alert('Submitted');
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
