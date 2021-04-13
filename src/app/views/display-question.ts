import ElementHTML from "../const/element-HTML";
import Prices from "../services/prices";
import SanitizerInput from "../component/sanitizer-input";
import Reload from "../component/reload";

export default class DisplayQuestion {

    public elt = new ElementHTML();

    public display(): void {
        this.elt.btn2!.addEventListener('click', () => {
            let value = <string>this.elt.input2?.value;
            let sanitizeValue = new SanitizerInput().value(value)
            if (sanitizeValue == "yes" || sanitizeValue == "oui") {
                this.elt.answer2!.innerHTML = "Vous êtes jouer";
                setTimeout(() => {
                    this.elt.block2?.classList.add('ninja');
                    this.elt.block3?.classList.remove('ninja')
                }, 500)
            } else {
                this.elt.answer2!.innerHTML = "Superbe, choix 👍";
                this.elt.contractFinal!.innerHTML = `Pour un montant HT de ${Prices.Instance.getAmount().toFixed(2)} €, il y a ${Prices.Instance.getTotalTVA().toFixed(2)} € de TVA. Le montant TTC est donc de ${(Prices.Instance.getAmount() + Prices.Instance.getTotalTVA()).toFixed(2)} €. Aucune remise n'a été appliqué.`
                this.elt.messageInfo!.innerHTML = `Pour vous remercier nous vous offrons cette magnifique licorne 🦄`;
                this.elt.input2!.classList.add("ninja");
                this.elt.btn2!.classList.add("ninja");
                const reload = this.elt.answer2?.appendChild( document.createElement("div"));
                reload!.classList.add('reload');
                new Reload().init();
            }
        })
    }
}