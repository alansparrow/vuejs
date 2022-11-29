function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        }
    },
    methods: {
        attackMonster() {
            if (this.playerHealth > 0) {
                if (this.monsterHealth > 0) {
                    const attackValue = getRandomValue(5, 12);
                    this.monsterHealth -= attackValue;
                    if (this.monsterHealth > 0) {
                        this.attackPlayer();
                    } else {
                        this.monsterHealth = 0;
                        console.log('Monster is death!');
                    }
                }
                
            } else {
                console.log('Player is death!');
            }
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        specialAttackMonster() {
            if (this.playerHealth > 0) {
                if (this.monsterHealth > 0) {
                    const attackValue = getRandomValue(10, 25);
                    this.monsterHealth -= attackValue;
                    if (this.monsterHealth > 0) {
                        this.attackPlayer();
                    } else {
                        this.monsterHealth = 0;
                        console.log('Monster is death!');
                    }
                }
                
            } else {
                console.log('Player is death!');
            }
        }
    }
});

app.mount('#game');