import { Component } from "../../../util/component.js";
import { Slider } from "../../smart/slider/slider.js";

export class Code extends Component {
    title;
    sliderWrap;
    sliderImgSrc = [
        './assets/sliders-img/0.png',
        './assets/sliders-img/1.png',
        './assets/sliders-img/2.png',
        './assets/sliders-img/3.png',
        './assets/sliders-img/4.png',
        './assets/sliders-img/5.png',
    ];

    constructor() {
        super('section', 'code');
        this.title = new Component('h2', 'code__title', 'Slider');
        this.sliderWrap = new Component('div', 'code__slider-wrap');

        const slider = new Slider(this.sliderImgSrc);

        this.sliderWrap.node.append(slider.node);
        this.node.append(this.title.node, this.sliderWrap.node);
    }

    destroy() {
        super.destroy();
    }
}