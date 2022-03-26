Vue.createApp({
    data(){
        return{
            nom:"",
            textConfirm:""
        }
    },
    methods: {
        alerts: function(){
            alert('alert')
        },
        keydowns(event) {
            this.nom =event.target.value
        },
        enter(event){
            this.text =event.target.value
            this.textConfirm = this.text
        }
    }
}).mount('#tasca')