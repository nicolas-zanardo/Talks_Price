import {product} from "../data/product";
import {TVA} from "../data/TVA";

export default class Prices {

    private static _instance: Prices;
    private amount: number = 0;
    private totalTVA: number = 0;
    private TVA : number = TVA[1].tva
    private item = product[Math.round(Math.random() * (product.length - 1))];

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    public setAmount(value:number) {
        this.amount = value;
    }

    public getAmount() {
        return this.amount;
    }

    public getItem() {
        return this.item;
    }


    public getTotalTVA() {
        return this.totalTVA = this.amount * (this.TVA / 100);
    }


}