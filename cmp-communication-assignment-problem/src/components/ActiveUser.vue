<template>
    <li>
        <h2>Username: {{username}} </h2>
        <h3>Age: {{age}} </h3>
        <button @click="deleteUser">Delete</button>
    </li>
</template>

<script>
export default {
    emits: ['delete-user'],
    props: {
        username: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    methods: {
        deleteUser() {
            this.$emit('delete-user', this.username);
        }
    }
}
</script>