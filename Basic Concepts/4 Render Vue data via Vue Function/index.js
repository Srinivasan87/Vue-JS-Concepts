var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Sri!'
    },
    methods:{
        sayHello: function(){
            return this.message;
        }
    }
});
