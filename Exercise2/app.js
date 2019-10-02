new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertClick() {
            alert("Alert method")
        },
        onKeyDown(event) {
            this.value = event.target.value
        }
    }
});