new Vue({
    el: '#exercise',
    data: {
        name: 'Thiago',
        age: 32
    },
    methods: {
        getTripleAge: function () {
            return this.age * 3;
        }
    }
});