const app = Vue.createApp({
  data() {
    return {
      counter: 80,
      firstName: '',
      lastName: '',
      fullName: ''
    };
  },
  watch: {
    firstName(value) {
      if (value === '') {
        this.fullName = this.lastName;
      } else {
        this.fullName = value + ' ' + this.lastName;
      }
    },
    lastName(value) {
      if (value === '') {
        this.fullName = this.firstName;
      } else {
        this.fullName = this.firstName + ' ' + value;
      }
    }
  },
  computed: {
    // fullName() {
    //   console.log("exec fullName()");
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Rock';
    // }
  }
  ,
  methods: {
    resetInput() {
      this.firstName = '';
      this.lastName = '';
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
