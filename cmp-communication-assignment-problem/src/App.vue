<template>
    <section>
        <header><h1>Users</h1></header>
        <user-data @add-user="addUser"></user-data>
        <ul>
            <active-user
            v-for="user in users"
            :key="user.username"
            :username="user.username"
            :age="user.age"
            @delete-user="deleteUser"
            >
            </active-user>
        </ul>
    </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';
export default {
  components: { UserData, ActiveUser },
    data() {
        return {
            users: []
        };
    },
    methods: {
        addUser(username, age) {
            this.users.push({username: username, age: age});
        },
        deleteUser(username) {
            this.users = this.users.filter((user) => {
                return user.username !== username;
            });
        }
    }
};
</script>
