import { Component } from "../../../util/component.js";

export class Code extends Component {
    title;
    sliderWrap;

    constructor() {
        super('section', 'code');
        this.title = new Component('h2', 'code__title', 'Slider');
        this.sliderWrap = new Component('div', 'code__slider-wrap');
        
        this.node.append(this.title.node, this.sliderWrap.node);
    }

    destroy() {
        super.destroy();
    }
}