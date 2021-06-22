var selectedLink = "Technical Skills";

var app = new Vue({
    el: '#app',
    data: function() {
        return { 
            skills: []
        }
    },
    mounted() {
        httpGet("https://tylerlemieux.github.io/cs601-term-project/data/technical-skills.json")
            .then((function(response) {
                response.forEach(element => {
                    this.app.skills.push(element);
                });
            }),  error => (alert(error)));
    }
});

