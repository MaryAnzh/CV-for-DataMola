import { Component } from "../../../util/component.js";

export class Slider extends Component {
    view;
    preView;

    leftArrow;
    sliderWindow;
    sprite;
    rightArrow;

    constructor(sliderImgSrc) {
        super('div', 'slider');
        this.view = new Component('div', 'slider__slider-view');
        this.preView = new Component('ul', 'slider__slider-pre-view');

        this.leftArrow = new Component('div', 'slider__slider-view__left-arrow');
        this.sliderWindow = new Component('div', 'slider__slider-view__window');
        this.rightArrow = new Component('div', 'slider__slider-view__right-arrow');
        this.sprite = new Component('div', 'slider__slider-view__window__sprite');

        sliderImgSrc.forEach((src) => {
            const li = new Component('li', 'slider__slider-pre-view__item');
            const imgAtr = {
                src: src,
                alt: 'slider image',
            };
            const img = new Component('img', 'slider__slider-pre-view__item__img', '', imgAtr);
            li.node.append(img.node);
            this.preView.node.append(li.node);
        });

        this.sliderWindow.node.append(this.sprite.node);
        this.view.node.append(this.leftArrow.node, this.sliderWindow.node, this.rightArrow.node);
        this.node.append(this.view.node, this.preView.node);
    }
}