import { Component } from "../../../util/component.js";

export class Burger extends Component {
    lines = [];
    navListWrap;
    navList;

    constructor(sectionList) {
        super('div', 'burger');
        const linesCount = 3;
        for (let i = 0; i < linesCount; i++) {
            const line = new Component('div', 'burger__line');
            this.node.append(line.node);
            this.lines.push(line.node);
        }
        this.navListWrap = new Component('div', 'burger__nav-wrap');
        this.navList = new Component('nav', 'burger__nav-wrap__nav');
        sectionList.forEach(name => {
            const li = new Component('li', 'burger__nav-wrap__nav__item', name);
            this.navList.node.append(li.node);
        });

        this.navListWrap.node.append(this.navList.node);
        this.node.append(this.navListWrap.node);
    }
}