<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="isInputInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter non-empty value</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      isInputInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.isInputInvalid = true;
      } else {
        this.isInputInvalid = false;
      }
    },
    confirmError() {
      this.isInputInvalid = false;
    },
  },
};
</script>
