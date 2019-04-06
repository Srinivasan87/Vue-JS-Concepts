var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Sri!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods:{
        sayHello: function(){
            this.message = 'Hello Vasan';
            return this.message;
        }
    }
});
