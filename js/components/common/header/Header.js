import { Component } from "../../../util/component.js";

export class Header {
    header;
    nav;
    navList;

    constructor(changeSection, sectionList) {
        this.header = new Component('div', 'header-wrap', '');
        this.nav = new Component('nav', 'header-wrap__nav', '');
        this.header.node.append(this.nav.node);
        this.navList = [];
        sectionList.forEach(name => {
            const li = new Component('li', 'header-wrap__nav__item', name);
            li.node.onclick = () => changeSection(name);
            this.navList.push(li.node);
            this.nav.node.append(li.node);
        });
    }

    destroy() {
        this.header.destroy();
        this.navList.forEach(el => el.onclick = null);
    }

}
