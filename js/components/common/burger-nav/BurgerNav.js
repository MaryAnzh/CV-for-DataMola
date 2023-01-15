import { Component } from "../../../util/component.js";

export class BurgerNav extends Component {
    navList;

    constructor(sectionList, navToSectionOnclick) {
        super('div', 'burger-nav');
        this.navList = new Component('nav', 'burger-nav__nav');
        this.node.append(this.navList.node);

        sectionList.forEach(name => {
            const li = new Component('li', 'burger-nav__nav__item', name);
            li.node.onclick = (e) => navToSectionOnclick(e, name);
            this.navList.node.append(li.node);
        });
    }

    showBurgerNav = async () => {
        this.node.style.display = 'flex';
        this.navList.node.animate(
            { transform: ['translateX(-110%)', 'translateX(0%)'] },
            {
                duration: 300,
                easing: 'linear',
                fill: 'forwards',
            }
        );
    }

    hideBurgerNav = async () => {
        const animate = this.navList.node.animate(
            { transform: ['translateX(0%)', 'translateX(-110%)'] },
            {
                duration: 300,
                easing: 'linear',
                fill: 'forwards',
            }
        );
        await animate.finished;
        this.node.style.display = 'none';
    }
}