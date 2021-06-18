var navigationVue = new Vue({
    el: '#navigation',
    data: {
        htmlcontent : ''
    },
    mounted() {
        httpGet("https://tylerlemieux.github.io/cs601-term-project/navigation-template.html")
            .then((function(response) {
                this.navigationVue.htmlcontent = response;
            }),  error => (alert(error)));
    }
});