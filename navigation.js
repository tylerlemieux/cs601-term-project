var navigationVue = new Vue({
    el: '#navigation',
    data: function() {
        return {
            links : []
        }
    },
    mounted() {
        console.log('hit');
        httpGet("https://tylerlemieux.github.io/cs601-term-project/data/navigation.json")
            .then((function(response) {
                response.forEach(element => {
                    this.navigationVue.links.push(element);
                });

            }),  error => (alert(error)));
    },
    methods: {
        isSelected: function (name) {
            // Selected link should be set by the specific screen
            return name === selectedLink;
        }
    }
});