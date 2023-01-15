import { Component } from "../../../util/component.js";
import { logo } from "../../../../assets/svg/logo.js";
import { Burger } from "../burger/Burger.js";
import { BurgerNav } from "../burger-nav/BurgerNav.js";

export class Header extends Component {
    logoWrap;
    logo;
    logoTitle;
    nav;
    navList;
    contacts;
    changeSection;
    showHideContacts;
    isShowContacts;
    burger;
    burgerNav;

    constructor(changeSection, sectionList, showHideContacts) {
        super('div', 'header-wrap', '');
        this.changeSection = changeSection;
        this.logoWrap = new Component('div', 'header-wrap__logo-wrap');
        this.logo = new Component('div', 'header-wrap__logo-wrap__logo');
        this.logo.node.innerHTML = logo;
        this.logo.node.onclick = (e) => this.navToSectionOnclick(e, 'about');
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
        this.showHideContacts = showHideContacts;
        this.contacts = new Component('li', 'contacts-nav-item', 'Contacts');
        this.contacts.node.onclick = () => this.showHideContactsOnClick();
        this.nav.node.append(this.contacts.node);
        this.burger = new Burger();
        this.burgerNav = new BurgerNav(sectionList);

        this.logoWrap.node.append(logo.node, this.logoTitle.node);
        this.node.append(this.burgerNav.node, this.logoWrap.node, this.nav.node, this.burger.node);

        this.isShowContacts = false;
    }

    navToSectionOnclick = (e, name) => {
        let li = e.target;
        if (li.tagName !== 'LI') {
            li = this.navList[0];
        }

        this.navList.forEach(el => el.classList.remove('active-nav-item'));
        li.classList.add('active-nav-item');
        this.changeSection(name);
        if (this.isShowContacts) {
            this.hideContactsItemView();
        }
    }

    showHideContactsOnClick = () => {
        this.showHideContacts();
        if (this.isShowContacts) {
            this.hideContactsItemView();
        } else {
            this.showContactsItemView();
        }
    }

    showContactsItemView() {
        this.contacts.node.textContent = 'Close';
        this.isShowContacts = true;

    }

    hideContactsItemView() {
        this.isShowContacts = false;
        this.contacts.node.textContent = 'Contacts';
    }

    destroy() {
        super.destroy();
        this.navList.forEach(el => el.onclick = null);
        this.contacts.node.onclick = null;
    }

}
