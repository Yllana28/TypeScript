// Créez un objet "Chat", qui comprendra 4 attribu:

// un nom : de type string
// un race : de type string
// un age : type number
// un poid : de type number

// Créez une fonction qui affichera les information du Chat, et prendra en parametre
// d'une liste de surnoms
// Vous afficherez également cette liste

// let chat = {
//     nom:'Minou',
//     race:'Siamois',
//     age: 1,
//     poid: 5,
// }
// function surnom(...surnoms: string[])

// class Chat{
//     nom!: string;
//     race!: string;
//     age!: number;
//     poids!: number;

// afficherChat(): void {

//     console.log(`
//         Mon super chat s'appelle ${this.nom} \r 
//         C'st un ${this.race} \r 
//         Il a ${this.age} \r
//         Et il pèse ${this.poids} kg!

//     `)
    
//     }
// }

// const monChat: Chat = new Chat();

// monChat.age = 2;
// monChat.nom = "Minou";
// monChat.poids = 50;
// monChat.race = "Calinou";

// monChat.afficherChat();


abstract class Chat{
    protected _nom: string;
    protected _age: number;
    protected _poids: number;

    constructor (nom: string, age: number, poids: number){
        this._nom = nom;
        this._age = age;
        this._poids = poids;

    }
    public get nom(): string {
        return this._nom;
    }

    public get age():number{
        return this._age;
    }

    public get poids(): number{
        return this._poids;
    }

    public afficherChat(){
        console.log(`Voici mon chat, il s'appelle ${this.nom}, il a ${this.age} ans, son poids ${this.poids} kg ! `);
    }
}
    class Europeen extends Chat {
        _surnoms: string[];
        _origine: string = `Europe`;

        constructor (nom: string, age: number, poids: number, ...surnoms: string[]){
            super(nom, age, poids);
            this._surnoms = surnoms;
        }
        get surnoms(): string [] {
            return this._surnoms

        }
        set surnoms(surnoms: string[]) {
            surnoms.forEach(surnoms => {this._surnoms.push(surnoms)})
        }

    }

   const chat: Europeen = new Europeen(`Minou`, 0.5, 5,`TrucQuiPue`);
   chat.afficherChat();
   chat.surnoms = ['Kiki', 'Choco'];
   console.log(chat.surnoms);



