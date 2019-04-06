var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    methods:{
        changeTitle: function(event){
            this.message = event.target.value;
        }
    }
});
