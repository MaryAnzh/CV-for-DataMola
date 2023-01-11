import { Header } from './components/common/header/Header.js';
import { About } from './components/section/about/About.js';
import { Contacts } from './components/section/contacts/Contacts.js';

export class App {
    header;
    main;
    section;
    sectionMap;
    aboutSection;
    contactsSection;

    constructor() {
        this.header = document.querySelector('.header');
        this.main = document.querySelector('.main');
        this.aboutSection = new About();
        this.contactsSection = new Contacts();
        this.sectionMap = new Map([
            ['about', this.aboutSection],
            ['contacts', this.contactsSection],
        ]);

    }

    drawApp() {
        const headerFill = new Header();
        this.header.append(headerFill.header.node);
    }

    drawSection() {

    }

    changeSectionOnClick = () => {

    }
}