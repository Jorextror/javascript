class Persona {
    private nom: string;
    private cognom: string;
    //constructor
    constructor(nom:string, cognom:string){
        this.nom = nom;
        this.cognom=cognom;
    }
    //set i get
    public setName(nom:string):void{
        this.nom=nom;
    }
    public setCognom(cognom:string):void{
        this.cognom=cognom;
    }
    public getName():string{
        return this.nom;
    }
    public getCognom():string{
        return this.cognom;
    }
    
}   

var jordi = new Persona('jordi','oliveda');
jordi.setName("Jordi");
console.log(jordi.getName());