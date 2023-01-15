import { Component } from "../../../../util/component.js";

export class Slider extends Component {
    view;
    preView;
    preViewSrc;
    currentImgNum = 0;

    leftArrow;
    sliderWindow;
    sprite;
    image;
    rightArrow;

    preViewSet = [];

    constructor(sliderImgSrc) {
        super('div', 'slider');
        this.view = new Component('div', 'slider__slider-view');
        this.preView = new Component('ul', 'slider__slider-pre-view');
        this.preViewSrc = sliderImgSrc;

        this.leftArrow = new Component('div', 'slider__slider-view__left-arrow');
        this.sliderWindow = new Component('div', 'slider__slider-view__window');
        this.rightArrow = new Component('div', 'slider__slider-view__right-arrow');
        this.sprite = new Component('div', 'slider__slider-view__window__sprite');
        this.image = new Component('img', 'slider__slider-view__window__sprite__img', '', { src: sliderImgSrc[0], alt: 'image' });
        this.sprite.node.append(this.image.node);

        sliderImgSrc.forEach((src, index) => {
            const li = new Component('li', 'slider__slider-pre-view__item');
            const imgAtr = {
                src: src,
                alt: 'slider image',
            };
            if (this.currentImgNum === index) {
                li.node.classList.add('active-slider-item');
            }
            const img = new Component('img', 'slider__slider-pre-view__item__img', '', imgAtr);
            li.node.append(img.node);
            this.preView.node.append(li.node);
            this.preViewSet.push(li);
            li.node.onclick = () => this.changeImageOnClick(index);
        });

        this.sliderWindow.node.append(this.sprite.node);
        this.view.node.append(this.leftArrow.node, this.sliderWindow.node, this.rightArrow.node);
        this.node.append(this.view.node, this.preView.node);
    }

    changeImageOnClick = (imgNumber) => {
        this.image.node.setAttribute('src', this.preViewSrc[imgNumber]);
        this.preViewSet[this.currentImgNum].node.classList.remove('active-slider-item');
        this.currentImgNum = imgNumber;
        this.preViewSet[this.currentImgNum].node.classList.add('active-slider-item');
    }

    destroy() {
        this.preViewSet.forEach((el) => el.onClick = null);
        super.destroy();

    }
}