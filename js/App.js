import { Header } from './components/common/header/Header.js';
import { About } from './components/section/about/About.js';
import { Contacts } from './components/section/contacts/Contacts.js';

export class App {
    header;
    main;
    sectionList;
    sectionMap;
    currentSectionName;
    currentLoadSection;

    constructor() {
        this.header = document.querySelector('.header');
        this.main = document.querySelector('.main');
        this.isSectionOnLoad = false;
        this.sectionList = [];
        this.sectionMap = new Map([
            ['about', About],
            ['contacts', Contacts],
        ]);
        this.sectionMap.forEach((el, key) => this.sectionList.push(key));
        this.currentSectionName = this.sectionList[0];
        this.currentLoadSection = null;
    }

    drawApp() {
        const headerFill = new Header(this.changeSection, this.sectionList);
        this.header.append(headerFill.header.node);
        this.drawSection(this.currentSectionName);
    }

    drawSection(sectionName) {
        if (this.currentLoadSection !== null) {
            this.currentLoadSection.destroy();
        }

        const component = this.sectionMap.get(sectionName);
        const section = new component();
        this.currentLoadSection = section;
        this.currentSectionName = sectionName;
        
        this.main.innerHTML = '';
        this.main.append(section.section.node);
    }

    changeSection = (sectionName) => {
        this.drawSection(sectionName);
    }
}