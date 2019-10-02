new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value != 37 ? 'Not there yet!' : 'Considerate done!'
        }
    }
});