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
            if (this.userInput === 'user1') {
                return  {
                    user1 : true,
                    hidden: !this.paragraphVisibility,
                    visible: this.paragraphVisibility
                }
            } else if (this.userInput === 'user2') {
                return {
                    user2: true,
                    hidden: !this.paragraphVisibility,
                    visible: this.paragraphVisibility
                }
            }
        },
        inlineStyle() {
            console.log('bgColorInput: ' + this.bgColorInput);
            return {
                backgroundColor: this.bgColorInput
            }
        }
    },
    // watch: {
    //     bgColorInput(value) {
    //         console.log('bgColorInput: ' + value);
    //         this.inlineStyle = {
    //             'background-color': value
    //         }
    //     }
    // },
    methods: {
        toggleParagraph() {
            console.log('toggle paragraph');
            this.paragraphVisibility = !this.paragraphVisibility;
        }
    }
});

app.mount('#assignment');
