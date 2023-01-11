import { Component } from "../../../util/component.js";

export class About extends Component {
    sky;

    constructor() {
        super('section', 'about');
        this.sky = new Component('div', 'about__sky');
        this.node.append(this.sky.node);
    }

    destroy() {
        super.destroy();
    }
}