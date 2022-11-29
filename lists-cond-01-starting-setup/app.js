const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },
  methods: {
    addGoal() {
      console.log('enteredGoalValue: ' + this.enteredGoalValue);
      if (this.enteredGoalValue !== '') {
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = '';
      }
    }
  }
});

app.mount('#user-goals');
