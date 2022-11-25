const app = Vue.createApp({
    data() {
        return {
            val: 0
        }
    },
    watch: {
        val(value) {
            if (value == 37) {
                setTimeout(() => {
                    this.val = 0;
                }, 5000);
            }
        }
    },
    computed: {
        result() {
            console.log(this.val);
            if (this.val < 37) {
                return 'Not there yet!';
            } else if (this.val > 37) {
                return 'Too much!';
            } else {
                return this.val;
            }
        }
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