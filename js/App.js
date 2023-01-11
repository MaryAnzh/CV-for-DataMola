import { Header } from './components/common/header/Header.js';

export class App {
    header;
    main;
    page;
    navMap;

    constructor() {
        this.header = document.querySelector('.header');
        this.main = document.querySelector('.main');

    }

    drawApp() {
        const headerFill = new Header();
        this.header.append(headerFill.header.node);
    }

    drawPage() {

    }
}