let vente: string = "prix de vent";
let coutDeFabrication: string = "";

///////////////////////////////////////

/**
 * Calcule le bénéfice ou la perte d'une transaction en 
 * fonction de son cout et de on prix de vente
 * @param prixVente 
 * @param coutDeFabrication 
 * @returns 
 */


function calculerBenefice(prixVente: number, coutDeFabrication: number): string {
    const benefice: number = prixVente - coutDeFabrication
    if(benefice > 0){
        return `Perte de ${-benefice}€, ALED`
    }else if (benefice > 0){
        return `Gain de ${benefice > 0}€, j'aime l'argent ! <3`
    }else {
        return `Vive le bénévolat`
    }
}
console.log(calculerBenefice(10,20));
console.log(calculerBenefice(20,10));
console.log(calculerBenefice(10,10));