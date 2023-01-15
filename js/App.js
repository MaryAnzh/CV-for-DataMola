import { Header } from './components/common/header/Header.js';
import { About } from './components/section/about/About.js';
import { Contacts } from './components/section/contacts/Contacts.js';
import { Skills } from './components/section/skills/Skills.js';
import { Footer } from './components/common/footer/Footer.js';
import { Projects } from './components/section/projects/Projects.js';
import { Code } from './components/section/code/Code.js';
import { Education } from './components/section/education/Education.js';
import { Languages } from './components/section/languages/Languages.js';

export class App {
    header;
    main;
    sectionWrapper;
    footer;
    contacts;
    isContactsShow;

    sectionMap;
    sectionList;
    currentSectionName;
    currentSectionComponent;

    constructor() {
        this.header = document.querySelector('.header');
        this.main = document.querySelector('.main');
        this.sectionWrapper = document.querySelector('.main__wrapper');
        this.footer = document.querySelector('.footer');
        this.contacts = new Contacts();

        this.sectionMap = new Map([
            ['about', About],
            ['skills', Skills],
            ['education', Education],
            ['slider', Code],
        ]);
        this.sectionList = [];
        this.sectionMap.forEach((el, key) => this.sectionList.push(key));
        this.currentSectionName = this.sectionList[0];
        this.currentSectionComponent = null;
        this.isContactsShow = false;
    }

    drawApp() {
        const headerFill = new Header(this.changeSection, this.sectionList, this.showHideContacts);
        this.header.append(headerFill.node);
        const footerFill = new Footer();
        this.footer.append(footerFill.node);
        this.main.append(this.contacts.node);

        this.drawSection(this.currentSectionName);
    }

    drawSection(sectionName) {
        if (this.currentSectionComponent !== null) {
            this.currentSectionComponent.destroy();
        }
        if (this.isContactsShow) {
            this.showHideContacts();
        }

        const component = this.sectionMap.get(sectionName);
        const section = new component();
        this.currentSectionComponent = section;
        this.currentSectionName = sectionName;

        this.sectionWrapper.append(section.node);
    }

    changeSection = (sectionName) => {
        this.drawSection(sectionName);
    }

    showHideContacts = () => {
        if (!this.isContactsShow) {
            this.contacts.node.style.transform = 'translateX(0%)';
            this.isContactsShow = true;
        } else {
            this.contacts.node.style.transform = 'translateX(110%)';
            this.isContactsShow = false;
        }
    }
}