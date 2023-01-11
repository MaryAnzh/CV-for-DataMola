import { Header } from './components/common/header/Header.js';
import { About } from './components/section/about/About.js';
import { Contacts } from './components/section/contacts/Contacts.js';
import { Footer } from './components/common/footer/Footer.js';

export class App {
    header;
    main;
    footer;

    sectionMap;
    sectionList;
    currentSectionName;
    currentSectionComponent;

    constructor() {
        this.header = document.querySelector('.header');
        this.main = document.querySelector('.main__wrapper');
        this.footer = document.querySelector('.footer');
        
        this.sectionMap = new Map([
            ['about', About],
            ['contacts', Contacts],
        ]);
        this.sectionList = [];
        this.sectionMap.forEach((el, key) => this.sectionList.push(key));
        this.currentSectionName = this.sectionList[0];
        this.currentSectionComponent = null;
    }

    drawApp() {
        const headerFill = new Header(this.changeSection, this.sectionList);
        this.header.append(headerFill.header.node);
        const footerFill = new Footer();
        this.footer.append(footerFill.node);

        this.drawSection(this.currentSectionName);
    }

    drawSection(sectionName) {
        if (this.currentSectionComponent !== null) {
            this.currentSectionComponent.destroy();
        }

        const component = this.sectionMap.get(sectionName);
        const section = new component();
        this.currentSectionComponent = section;
        this.currentSectionName = sectionName;
        
        this.main.append(section.section.node);
    }

    changeSection = (sectionName) => {
        this.drawSection(sectionName);
    }
}