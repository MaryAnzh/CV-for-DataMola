export class Footer {
    node;

    constructor(){
        const footer = document.createElement('div');
        footer.classList.add('footer-wrap');
        footer.textContent = '2022, Vashchayeva Maryia';
        this.node = footer;
    }
}