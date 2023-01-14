import { Component } from "../../../util/component.js";
import { aboutMe } from "../../../data/aboutMe.js";

export class About extends Component {
    titleWrap;
    title;
    subTitle;
    buttonWrap;
    infoWrap;
    article;

    constructor() {
        super('section', 'about');
        this.titleWrap = new Component('div', 'about__title-wrap');
        this.title = new Component('h2', 'about__title-wrap__title', 'Maryia Vashchayeva CV');
        this.subTitle = new Component('h3', 'about__title-wrap__sub-title', 'Test task for JS From Zero to Hero');
        this.buttonWrap = new Component('div', 'about__title-wrap__buttons');
        this.leftButton = new Component('a', 'about__title-wrap__buttons__left-button', 'GitHab', { href: 'https://github.com/MaryAnzh', target: '_blank' });
        this.rightButton = new Component('a', 'about__title-wrap__buttons__right-button', 'linkedin', { href: 'https://www.linkedin.com/in/maryia-vashchayeva-511313240/', target: '_blank' });
        this.infoWrap = new Component('div', 'about__info');
        this.article = new Component('article', 'about__info__article');
        aboutMe.forEach(text => {
            const part = new Component('p', 'about__info__article__part', text);
            this.article.node.append(part.node);
        });

        this.titleWrap.node.append(this.title.node, this.subTitle.node, this.buttonWrap.node);
        this.buttonWrap.node.append(this.leftButton.node, this.rightButton.node);
        this.infoWrap.node.append(this.article.node);
        this.node.append(this.titleWrap.node, this.infoWrap.node);
    }

    destroy() {
        super.destroy();
    }
}