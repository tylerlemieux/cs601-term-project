var navigationVue = new Vue({
    el: '#navigation',
    data: {
        htmlcontent : ''
    },
    mounted() {
        httpGet("navigation-template.html")
            .then((function(response) {
                this.navigationVue.htmlcontent = response;
            }),  error => (alert(error)));
    }
});