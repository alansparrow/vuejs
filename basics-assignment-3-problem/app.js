const app = Vue.createApp({
    data() {
        return {
            result: '',
            val: 0
        }
    },
    watch: {
        val(value) {
            console.log(value);
            if (value < 37) {
                this.result = 'Not there yet!';
            } else if (value > 37) {
                this.result = 'Too much!';
            } else {
                this.result = 37;
            }
        }
    },
    computed: {

    },
    methods: {
        add1() {
            this.val += 1;
        },
        add5() {
            this.val += 5;
        },
    }
});

app.mount('#assignment');