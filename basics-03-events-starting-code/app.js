const app = Vue.createApp({
  data() {
    return {
      counter: 80,
      firstName: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 100) {
        alert('Counter is: ' + this.counter + '. Reset it!');
        this.counter = 0;
      }
    }
    // firstName(value) {
    //   if (value === '') {
    //     this.fullName = this.lastName;
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = this.firstName;
    //   } else {
    //     this.fullName = this.firstName + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullName() {
      console.log("exec fullName()");
      if (this.firstName !== '' || this.lastName !== '') {
        return this.firstName + ' ' + this.lastName;
      }
    }
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
