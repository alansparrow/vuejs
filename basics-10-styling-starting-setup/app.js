const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        };
    },
    computed: {
        boxAClasses() {
            console.log('boxAClasses');
            return {
                active: this.boxASelected
            }
        }
    },
    methods: {
        selectBox(box) {
            console.log('selected: ' + box);
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling');