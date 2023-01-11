import { Component } from "../../../util/component.js";

export class Header extends Component {
    nav;
    navList;
    changeSection;

    constructor(changeSection, sectionList) {
        super('div', 'header-wrap', '');
        this.changeSection = changeSection;
        this.nav = new Component('nav', 'header-wrap__nav', '');
        this.navList = [];
        sectionList.forEach((name, i) => {

            const li = new Component('li', 'header-wrap__nav__item', name);
            li.node.onclick = (e) => this.onclick(e, name);
            this.navList.push(li.node);
            if (i === 0) {
                li.node.classList.add('active-nav-item');
            }
            this.nav.node.append(li.node);
        });

        this.node.append(this.nav.node);
    }

    onclick = (e, name) => {
        const li = e.target;
        this.navList.forEach(el => el.classList.remove('active-nav-item'));
        li.classList.add('active-nav-item');
        this.changeSection(name);
    }

    destroy() {
        super.destroy();
        this.navList.forEach(el => el.onclick = null);
    }

}
