var app = new Vue({ 
    el: '#app',
    data: {
       counter:0,
       secondcounter:0
    },
    computed:{
        output:function(){
            console.log('Computed')
            return this.counter>5 ? 'Greater 5':'Smaller than 5';
        }
    },
    methods:{
        result:function(){
            console.log('Method');
            return this.counter>5?'Greater 5':'Smaller than 5';
        }
    }
});
