import { Component } from "../../../util/component.js";

export class About extends Component {
    titleWrap;
    title;
    subTitle;
    buttonWrap;

    constructor() {
        super('section', 'about');
        this.titleWrap = new Component('div', 'about__title-wrap');
        this.title = new Component('h2', 'about__title-wrap__title', 'Maryia Vashchayeva CV');
        this.subTitle = new Component('h3', 'about__title-wrap__sub-title', 'Test task for JS From Zero to Hero');
        this.buttonWrap = new Component('div', 'about__title-wrap__buttons');
        this.leftButton = new Component('a', 'about__title-wrap__buttons__left-button', 'GitHab', { href: 'https://github.com/MaryAnzh', target: '_blank' });
        this.rightButton = new Component('a', 'about__title-wrap__buttons__right-button', 'linkedin', { href: 'https://www.linkedin.com/in/maryia-vashchayeva-511313240/', target: '_blank' });


        this.titleWrap.node.append(this.title.node, this.subTitle.node, this.buttonWrap.node);
        this.buttonWrap.node.append(this.leftButton.node, this.rightButton.node);
        this.node.append(this.titleWrap.node);
    }

    destroy() {
        super.destroy();
    }
}