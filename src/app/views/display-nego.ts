import ElementHTML from "../const/element-HTML";
import Prices from "../services/prices";
import Reload from "../component/reload";

export default class DisplayNego {

    public elt = new ElementHTML();
    public nego = (Math.random() * 60);

    public display(): void {
        this.elt.btn3!.addEventListener('click', () => {
            let value = parseFloat(<string>this.elt.input3?.value);
            if(value < this.nego) {
                let newPrice = Prices.Instance.getAmount() - (Prices.Instance.getAmount() * (value / 100 ));
                Prices.Instance.setAmount(newPrice);
                console.log(Prices.Instance.getAmount())
                this.elt.answer3!.innerHTML = `Vous avez Gagné ce ${Prices.Instance.getItem().libelle}`;
                this.elt.contractFinal!.innerHTML = `Pour un montant HT de ${Prices.Instance.getAmount().toFixed(2)} €, il y a ${Prices.Instance.getTotalTVA().toFixed(2)} € de TVA. Le montant TTC est donc de ${(Prices.Instance.getAmount() + Prices.Instance.getTotalTVA()).toFixed(2)} €. Une remise de ${value}% a été appliqué sur le montant HT.`
                const reload = this.elt.answer3?.appendChild( document.createElement("div"));
                this.elt.input3!.classList.add("ninja");
                this.elt.btn3!.classList.add("ninja");
                reload!.classList.add('reload');
                new Reload().init();
            } else {
                this.elt.answer3!.innerHTML = `Votre demande est trop élevée`;
            }

        })
    }
}