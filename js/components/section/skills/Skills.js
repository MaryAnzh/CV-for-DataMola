import { Component } from "../../../util/component.js";
import { skills } from "../../../data/skills.data.js";

export class Skills extends Component {
    title;
    skillsWrap;

    constructor() {
        super('section', 'skills');
        this.title = new Component('h2', 'skills__title', 'Skills');
        this.skillsWrap = new Component('div', 'skills__cards-wrap');

        skills.forEach((group) => {
            const cardWrap = new Component('div', 'skills__cards-wrap__card');
            const icon = new Component('div', 'skills__cards-wrap__card__icon');
            icon.node.innerHTML = group.icon;
            const title = new Component('h4', 'skills__cards-wrap__card__title', group.title);
            const names = group.set.join(', ');
            const skillsName = new Component('div', 'skills__cards-wrap__card__names', names);
            const iconsWrap = new Component('div', 'skills__cards-wrap__card__icons');

            group.set.forEach(name => {
                const icon = new Component('div', 'skills__cards-wrap__card__icons__icon');
                const iconLink = name === 'Adobe Illustrator' ? 'Ai' : name;
                icon.node.style.backgroundImage = `url(./assets/png/web-skills/${iconLink.toLowerCase()}.png)`;
                iconsWrap.node.append(icon.node);
            });

            cardWrap.node.append(icon.node, title.node, skillsName.node, iconsWrap.node);
            this.skillsWrap.node.append(cardWrap.node);
        });

        this.node.append(this.title.node, this.skillsWrap.node);
    }
}