import { Component } from "../../../util/component.js";

export class Header extends Component {
    nav;
    navList;

    constructor(changeSection, sectionList) {
        super('div', 'header-wrap', '');
        this.nav = new Component('nav', 'header-wrap__nav', '');
        this.navList = [];
        sectionList.forEach(name => {
            const li = new Component('li', 'header-wrap__nav__item', name);
            li.node.onclick = () => changeSection(name);
            this.navList.push(li.node);
            this.nav.node.append(li.node);
        });

        this.node.append(this.nav.node);
    }

    destroy() {
        super.destroy();
        this.navList.forEach(el => el.onclick = null);
    }

}
