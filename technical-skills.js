var app = new Vue({
    el: '#skills',
    data() { 
        return { 
            test: "test",
            skills: null
        }
    },
    mounted() {
        httpGet("https://tylerlemieux.github.io/cs601-term-project/data/technical-skills.json")
            .then((function(response) {
                this.skills = response;
            }),  error => (alert(error)));
    }
});

