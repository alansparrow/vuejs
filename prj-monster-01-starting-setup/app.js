function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
        mayUseHealPlayer() {
            return this.currentRound % 4 !== 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
        },
        isGameOver() {
            if (this.playerHealth <= 0 || this.monsterHealth <= 0) {
                console.log('Player health: ' + this.playerHealth
                    + ', Monster health: ' + this.monsterHealth + '. Game is over!');
                return true;
            } else {
                return false;
            }
        },
        attackMonster() {
            if (this.isGameOver() === true) {
                return;
            }
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            if (this.monsterHealth > 0) {
                this.attackPlayer();
            } else {
                this.monsterHealth = 0;
                console.log('Monster is death!');
            }
        },
        attackPlayer() {
            if (this.isGameOver() === true) {
                return;
            }
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            if (this.playerHealth < 0) {
                this.playerHealth = 0;
            }
        },
        specialAttackMonster() {
            if (this.isGameOver() === true) {
                return;
            }
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            if (this.monsterHealth > 0) {
                this.attackPlayer();
            } else {
                this.monsterHealth = 0;
                console.log('Monster is death!');
            }
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            this.playerHealth += healValue;
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
        }
    },

});

app.mount('#game');