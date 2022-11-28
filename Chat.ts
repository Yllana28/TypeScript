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

class Chat{
    nom!: string;
    race!: string;
    age!: number;
    poids!: number;

afficherChat(): void {

    console.log(`
        Mon super chat s'appelle ${this.nom} \r 
        C'st un ${this.race} \r 
        Il a ${this.age} \r
        Et il pèse ${this.poids} kg!

    `)
    
    }
}

const monChat: Chat = new Chat();

monChat.age = 2;
monChat.nom = "Minou";
monChat.poids = 50;
monChat.race = "Calinou";

monChat.afficherChat();

