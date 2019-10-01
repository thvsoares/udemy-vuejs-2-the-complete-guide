new Vue({
    el: '#exercise',
    data: {
        name: 'Thiago',
        age: 32
    },
    methods: {
        getRandom: function () {
            return Math.random();
        }
    }
});