Vue.createApp({
    data(){
        return{
            nom:'Jordi',
            edad:22,
            random: Math.floor(Math.random() * (9 - 0)) + 0,
            img:'https://tutorialesenpdf.com/wp-content/uploads/2018/05/vuejs-tutorial-pdf.jpg',
            value:'input omplet'
        }
    }
}).mount('#tasca_01')