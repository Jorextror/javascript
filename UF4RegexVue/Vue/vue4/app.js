Vue.createApp({
    data(){
        return{
            nom:"",
            classe1:false,
            classe2:false,
        }
    },
    methods:{
        keydowns(event) {
            this.nom =event.target.value
        },
        styled(box){
            if (box==='A') this.classe1=true,this.classe2=false
            else if (box==='B') this.classe2=true,this.classe1=false
        }
    }
}).mount('#assignment')