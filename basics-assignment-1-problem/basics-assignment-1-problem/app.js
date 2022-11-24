const app = Vue.createApp({
    data() {
        return {
            name: 'Fuzzy Rock',
            age: 31,
            vueImgLink: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F04%2Fcream-golden-retriever-closeup-91607998-2000.jpg'
        };
    },
    methods: {
        getAgeIn5Years() {
            return this.age + 5;
        },
        getFavoriteNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');