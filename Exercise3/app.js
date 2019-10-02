new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result() {
            return this.value != 37 ? 'Not there yet!' : 'Considerate done!'
        }
    },
    watch: {
        result() {
            const vm = this;
            setTimeout(() => vm.value = 0, 5000)
        }
    }
});