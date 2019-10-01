new Vue({
    el: '#exercise',
    data: {
        name: 'Thiago',
        age: 32,
        randomImage: 'https://picsum.photos/100/100'
    },
    methods: {
        getRandom: function () {
            return Math.random();
        }
    }
});