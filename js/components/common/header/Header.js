import { Component } from "../../../util/component.js";
import { logo } from "../../../../assets/svg/logo.js";

export class Header extends Component {
    logoWrap;
    logo;
    logoTitle;
    nav;
    navList;
    contacts;
    changeSection;

    constructor(changeSection, sectionList) {
        super('div', 'header-wrap', '');
        this.changeSection = changeSection;
        this.logoWrap = new Component('div', 'header-wrap__logo-wrap');
        this.logo = new Component('div', 'header-wrap__logo-wrap__logo');
        this.logo.node.innerHTML = logo;
        this.logo.node.onclick = (e) => this.onclick(e, 'about');
        this.logoTitle = new Component('h1', 'header-wrap__logo-wrap__title', 'Vashchayeva Maryia');

        this.nav = new Component('nav', 'header-wrap__nav', '');
        this.navList = [];
        sectionList.forEach((name, i) => {
            const li = new Component('li', 'header-wrap__nav__item', name);
            li.node.onclick = (e) => this.navToSectionOnclick(e, name);
            this.navList.push(li.node);
            if (i === 0) {
                li.node.classList.add('active-nav-item');
            }
            
            this.nav.node.append(li.node);
        });
        this.contacts = new Component('li', 'contacts-nav-item', 'Contacts');
        this.nav.node.append(this.contacts.node);
        
        this.logoWrap.node.append(this.logo.node, this.logoTitle.node);
        this.node.append(this.logoWrap.node, this.nav.node);
    }

    navToSectionOnclick = (e, name) => {
        let li = e.target;
        if (li.tagName !== 'LI') {
            li = this.navList[0];
        }

        this.navList.forEach(el => el.classList.remove('active-nav-item'));
        li.classList.add('active-nav-item');
        this.changeSection(name);
    }

    destroy() {
        super.destroy();
        this.navList.forEach(el => el.onclick = null);
        this.contacts.node.onclick = null;
    }

}
