Vue.createApp({
    data(){
        return{
            nom:"",
            cambio:"visible"
        }
    },
    methods:{
        keydowns(event) {
            this.nom =event.target.value
        },
        cambiar(){
            if (this.cambio == "visible"){
                this.cambio="hidden"
            }else{
                this.cambio="visible"
            }
            //no interviene el usuario asi que no creo que haga falta un elif
        }
    }
}).mount('#assignment')