Vue.createApp({
    data(){
        return{
            counter:0,
        }
    },
    methods:{
        add(n){
            this.counter+=n;
            setTimeout(function() { this.counter=0; }, 5000)
        }
    }
}).mount('#assignment')