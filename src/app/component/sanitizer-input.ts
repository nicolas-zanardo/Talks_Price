export default class SanitizerInput {

    public value(value: string): string {
        let valueTrim: string = value.trim();
        return valueTrim.toLowerCase();
    }
}