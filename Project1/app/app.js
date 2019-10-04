new Vue({
    el: '#app',
    data: {
        playerLife: 100,
        monsterLife: 100,
        playing: false,
        combatLog: []
    },
    methods: {
        roll(max) {
            return Math.floor(Math.random() * 100) % max;
        },
        attack() {
            let damage = this.roll(10);
            this.monsterLife -= damage;
            this.combatLog.push({ player: true, message: `The player did ${damage} damage` });

            damage = this.roll(10);
            this.playerLife -= damage;
            this.combatLog.push({ player: false, message: `The monster did ${damage} damage` });
        },
        specialAttack() {
            let damage = this.roll(30);
            this.monsterLife -= damage;
            this.combatLog.push({ player: true, message: `The player did ${damage} damage with the special attack` });

            damage = this.roll(30);
            this.playerLife -= damage;
            this.combatLog.push({ player: false, message: `The monster did ${damage} damage with the revenge attack` });
        },
        heal() {},
        giveUp() {}
    }
});