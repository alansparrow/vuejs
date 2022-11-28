const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            paragraphVisibility: true,
            bgColorInput: '#ccc'
        };
    },
    computed: {
        styleClasses() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                hidden: !this.paragraphVisibility,
                visible: this.paragraphVisibility
            }
        },
        inlineStyle() {
            console.log('bgColorInput: ' + this.bgColorInput);
            return {
                backgroundColor: this.bgColorInput
            }
        }
    },
    methods: {
        toggleParagraph() {
            console.log('toggle paragraph');
            this.paragraphVisibility = !this.paragraphVisibility;
        }
    }
});

app.mount('#assignment');
