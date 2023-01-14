import { Component } from "../../../util/component.js";

export class Education extends Component {
    title;
    info;
    hightEducation;
    curse;

    constructor() {
        super('section', 'education');
        this.title = new Component('h2', 'education__title', 'Education');
        this.info = new Component('div', 'education__info');
        this.hightEducation = new Component('div', 'education__info__hight');
        this.curse = new Component('div', 'education__info__curses');
        const hightEducationImgWrap = new Component('div', 'education__info__hight__img-wrap');
        const hightEducationImg = new Component('img', 'education__info__hight__img-wrap__img', '', { alt: 'university', src: '../../../../assets/png/university.png' });
        const hightEducationInfo = new Component('div', 'education__info__hight__info');
        const hightTitle = new Component('h4', 'education__info__hight__info__title ', 'Hight Education');
        const university = new Component('h6', 'education__info__hight__info__university', 'Business of BSU');
        const universityInfo = {
            specialty: 'Web Design and Computer Graphics',
            qualification: 'Developer-web designer',
            graduation: '05/20021',
        };
        hightEducationInfo.node.append(hightTitle.node, university.node);

        for (const key in universityInfo) {
            const title = new Component('h6', `education__info__hight__info__name`, key);
            const info = new Component('p', `education__info__hight__info__value`, universityInfo[key]);
            hightEducationInfo.node.append(title.node, info.node);
        }

        hightEducationImgWrap.node.append(hightEducationImg.node);
        this.hightEducation.node.append(hightEducationImgWrap.node, hightEducationInfo.node);
        this.info.node.append(this.hightEducation.node, this.curse.node);
        this.node.append(this.title.node, this.info.node);
    }

    destroy() {
        super.destroy();
    }
}