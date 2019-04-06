var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Sri!',
        link: 'http://google.com'
    },
    methods:{
        sayHello: function(){
            this.message = 'Hello Vasan';
            return this.message;
        }
    }
});
