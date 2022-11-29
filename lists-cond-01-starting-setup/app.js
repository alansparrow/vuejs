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
    },
    removeGoal(idx) {
      console.log('removeGoal: ' + idx);
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
