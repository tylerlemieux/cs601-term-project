var app = new Vue({
    el: '#app',
    data: { 
        logoSquareSize: 25,
        experiences: []
    },
    mounted() {
        httpGet("https://tylerlemieux.github.io/cs601-term-project/data/work-experience.json")
            .then((function(response) {
                response.forEach(element => {
                    this.app.skills.push(element);
                });
            }),  error => (alert(error)));
    }
});


