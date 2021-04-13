import ElementHTML from "../const/element-HTML";
import Prices from "../services/prices";

export default class DisplayAmount {

    public elt = new ElementHTML();

    constructor(
    ) {
        this.elt.messageInfo!.innerHTML = `
            <div style="font-size: 1.2rem; display: flex; flex-direction: column; justify-content: center">
            <div style="text-align: center">A combien vous estimez le prix pour ces objets :</div> 
            <br> 
            <p style="font-size: 1.5rem">${Prices.Instance.getItem().libelle}</p></div>`
    }

    public display(): void {
        this.elt.btn1!.addEventListener('click', (e) => {
            Prices.Instance.setAmount(parseInt(<string>this.elt.input1?.value));
            if(isNaN(Prices.Instance.getAmount())) {
                return this.elt.answer1!.innerHTML = "Veuillez rentrer un chiffre valide";
            }
            if(!isNaN(Prices.Instance.getAmount()) && Prices.Instance.getAmount() > Prices.Instance.getItem().prixMini) {
                this.elt.answer1!.innerHTML = String(Prices.Instance.getAmount()) + " HT €";
                this.elt.montantHTResponse!.innerHTML = String(Prices.Instance.getAmount()) + " HT €";
                setTimeout(()=> {
                    this.elt.block1?.classList.add('ninja');
                    this.elt.block2?.classList.remove('ninja')
                },500)
            } else {
                this.elt.answer1!.innerHTML = `<div style="display: flex; flex-direction: column; justify-content: center; text-align: center"><div >Vous en voulez ${String(Prices.Instance.getAmount())} HT €</div><div>c'est pas assez faites un effort</div></div> `  ;
            }
        })
    }
}