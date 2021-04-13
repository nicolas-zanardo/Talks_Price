export default class Reload {


    public init() {
        let selectElt = document.querySelector('.reload');
        let count = 10;
        setInterval(()=> {
            selectElt!.innerHTML = `Dans ${count}s la page va se recharger`
            count -= 1;
            if (count === 0 ) {
                document.location.reload();
            }
        }, 1000)
    }
}