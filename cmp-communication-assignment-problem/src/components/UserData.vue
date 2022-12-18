<template>
    <form @submit.prevent="addUser">
        <div>
            <label>Username</label>
            <input type="text" v-model="username" />
        </div>
        <div>
            <label>Age</label>
            <input type="number" v-model="age" />
        </div>
        <div>
            <button>Add new user</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            username: '',
            age: 0
        };
    },
    methods: {
        addUser() {
            this.$emit('add-user', this.username, this.age);
        }
    }
}
</script>
