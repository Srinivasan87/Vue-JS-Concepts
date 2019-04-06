var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Sri!',
        link: 'http://google.com'
    },
    methods:{
        sayHello: function(){
            return this.message;
        }
    }
});
