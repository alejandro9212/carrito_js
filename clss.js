class persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    get getnombre(){
        return this.nombre.toUpperCase();
    }
    set setNombre(nombre){
        this.nombre=nombre;

    }
    saludar(){
        return `${this.nombre} dice Hola`; 
    }
   cambiar(){
        let nom=this.nombre
        let arr=nom.split("");
        return arr; 

       }
     
    
    // static deCirBuenas(nombre){
    //     return `${nombre} dice buenas tardes `;

    // }
   
}
class Estudiante extends persona{
   constructor(nombre,edad,notas=[]){
       super(nombre,edad);
       this.notas=notas;       
    }
    set setNotas(nota){
        return this.notas.push(nota);
    }
    get getNotas(){
        return this.notas;
    }

    saludar(){
        return `${this.nombre} desde estudiante`; 
    }

}
 const Jhotob=new Estudiante("santi",25);
  Jhotob.setNotas=10;
  Jhotob.setNotas=7;
  Jhotob.setNotas=9;

  console.log(Jhotob.getNotas);

// console.log(persona.deCirBuenas("santy"));
const sujeto= new persona("jhon");
sujeto.setNombre="pedrito";
console.log(sujeto.getnombre);
console.log(sujeto.saludar());
console.log(sujeto.cambiar());



