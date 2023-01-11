export class Footer {
    node;

    constructor(){
        const footer = document.createElement('div');
        footer.classList.add('footer-wrap');
        footer.textContent = 'Footer work';
        this.node = footer;
    }
}