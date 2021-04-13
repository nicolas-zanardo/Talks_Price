/**
 * Init Const
 */
// response
export default class ElementHTML {
    public montantHTResponse: Element | null = document.querySelector(".montant-ht-response");
    public contractFinal: Element | null = document.querySelector('.contract-final');
    public messageInfo = document.querySelector('.message-info');
// Display 1
    public btn1 = document.querySelector('.question-1');
    public input1: HTMLInputElement | null = document.querySelector('.input-1');
    public answer1: Element | null = document.querySelector('.answer-1');
    public block1: Element | null = document.querySelector('.block-1');
// Display 2
    public btn2 = document.querySelector('.question-2');
    public input2: HTMLInputElement | null = document.querySelector('.input-2');
    public answer2: Element | null = document.querySelector('.answer-2');
    public block2: Element | null = document.querySelector('.block-2');
    // Display 3
    public btn3 = document.querySelector('.question-3');
    public input3: HTMLInputElement | null = document.querySelector('.input-3');
    public answer3: Element | null = document.querySelector('.answer-3');
    public block3: Element | null = document.querySelector('.block-3');
}

