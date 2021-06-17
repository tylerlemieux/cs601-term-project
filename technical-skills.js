var app = new Vue({
    el: '#app',
    data() { 
        return { 
            skills: null
        }
    },
    mounted() {
        httpGet("data/technical-skills.json")
            .then(response => (skills = response),  error => (alert(error)));
    }
});

