import { Component } from "../../../util/component.js";

export class BurgerNav extends Component {
    navList;

    constructor(sectionList) {
        super('div', 'burger-nav');
        this.navList = new Component('nav', 'burger-nav__nav');
        this.node.append(this.navList.node);

        sectionList.forEach(name => {
            const li = new Component('li', 'burger-nav__nav__item', name);
            this.navList.node.append(li.node);
        });
    }
}