const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    methods: {
        selectBox(box) {
            console.log('selected: ' + box);
            if (box === 'A') {
                this.boxASelected = true;
            } else if (box === 'B') {
                this.boxBSelected = true;
            } else {
                this.boxCSelected = true;
            }
        }
    }
});

app.mount('#styling');