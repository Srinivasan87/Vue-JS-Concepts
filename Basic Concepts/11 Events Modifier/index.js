var app = new Vue({ 
    el: '#app',
    data: {
        counter: 0,
        x:0,
        y:0
    },
    methods:{
        increase: function(step,event){
            this.counter += step;
        },
        updatecoordinats:function(){
            this.x=event.clientX;
            this.y=event.clientY;
        },
    }
});
