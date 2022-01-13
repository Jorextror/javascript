//---- 1 classe persona ----
class Persona {
    //propietats privades
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
    //methode
    public nomComplet():string{
        return this.nom+" "+this.cognom;
    };
}
var jordi = new Persona('jordi','oliveda');
jordi.setName("Jordi");
console.log(jordi.nomComplet());

//---- 2 array 3 persones ----
var array2persones= [new Persona('Joe',"Doe"),new Persona('Jane','Dane'),new Persona('George','Smith')];
function llistar(persones:Array<Persona>) {
    persones.forEach(element => {
        console.log(element.nomComplet())
    });
}
llistar(array2persones)

//---- 3 herencia ----
class Treballador extends Persona{
    public num: number;
    public sou: number;
    //set i get
    public setNum(num:number):void{
    this.num=num;
    }
    public setSou(sou:number):void{
        this.sou=sou;
        }
    public getNum():number{
        return this.num;
    }
    public getSou():number{
        return this.sou;
    }
    constructor(nom:string,cognom:string, num:number, sou:number){
        super(nom,cognom)
        this.num = num;
        this.sou=sou;
    }
}
//arrays
var t1:Treballador=new Treballador('Joe',"Doe",1,1200);
var t2:Treballador=new Treballador('Jane','Dane',2,500);
var t3:Treballador=new Treballador('George','Smith',3,800);
var array2trebalaldos: Treballador[]= new Array();
array2trebalaldos.push(t1);
array2trebalaldos.push(t2);
array2trebalaldos.push(t3);
//funcio suma tots els sous
function despeses_salarials(treballadors:Treballador[]){
    var total=0;
    treballadors.forEach(element => {
        total=total+ element.sou;
    });
    return total;
}
var salaritotal=despeses_salarials(array2trebalaldos);
console.log(salaritotal);

//---- 4 interface ----
interface pet{
    eat():void;
    sleep():void;
}

class Cat implements pet{
    private mew :boolean;

    constructor(mew :boolean){
        this.mew = mew;
    }
    public eat(){
        console.log("gat menja")
    }
    public sleep(): void {
        console.log("gat dorm")
    }
}
class Dog implements pet{
    private bark  :boolean;

    constructor(bark  :boolean){
        this.bark = bark;
    }
    public eat(){
        console.log("gos menja")
    }
    public sleep(): void {
        console.log("gos dorm")
    }
}
class Bird implements pet{
    private tweet:boolean;

    constructor(tweet :boolean){
        this.tweet = tweet;
    }
    public eat(){
        console.log("pajaro menja")
    }
    public sleep(): void {
        console.log("pajaro dorm")
    }
}
var gat=new Cat(true);
gat.eat();
gat.sleep();
var gos=new Dog(true);
gos.eat();
gos.sleep();
var pajaro=new Bird(true);
pajaro.eat();
pajaro.sleep();