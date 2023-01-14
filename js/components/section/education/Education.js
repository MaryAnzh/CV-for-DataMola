import { Component } from "../../../util/component.js";

export class Education extends Component {
    title;
    info;
    hightEducation;
    curse;
    universityInfo = {
        specialty: 'Web Design and Computer Graphics',
        qualification: 'Developer-web designer',
        graduation: '05/20021',
    };
    curseInfo = [
        {
            title: 'JavaScript/Front-end2021Q3',
            certificate: true,
            date: '03/2022',
            position: 201,
            score: 3920
        },
        {
            title: 'Angular 2022Q1',
            certificate: true,
            date: '06/2022',
            position: 80,
            score: 1031
        },
    ];

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

        hightEducationInfo.node.append(hightTitle.node, university.node);

        for (const key in this.universityInfo) {
            const title = new Component('h6', `education__info__hight__info__name`, key);
            const info = new Component('p', `education__info__hight__info__value`, this.universityInfo[key]);
            hightEducationInfo.node.append(title.node, info.node);
        }

        const curseTitle = new Component('h2', 'education__info__curses__title', 'Curses');
        const curseSubTitle = new Component('h3', 'education__info__curses__sub-title', 'RS School');
        const cursesWrap = new Component('div', 'education__info__curses__wrap');

        this.curse.node.append(curseTitle.node, curseSubTitle.node, cursesWrap.node);

        this.curseInfo.forEach(group => {
            const valueClass = 'education__info__curses__wrap__curse-wrap__value';
            const wrap = new Component('div', 'education__info__curses__wrap__curse-wrap');
            const title = new Component('h4', valueClass, group.title);
            const certificate = new Component('div', valueClass);
            const text = new Component('span', 'education__info__curses__wrap__curse-wrap__value__certificate', 'certificate');
            const icon = new Component('div', 'education__info__curses__wrap__curse-wrap__check-icon');
            certificate.node.append(text.node, icon.node);

            const date = new Component('p', valueClass, group.date);
            const position = new Component('p', valueClass, `position: ${group.position}`);
            const score = new Component('p', valueClass, `score: ${group.score}`);

            wrap.node.append(title.node, certificate.node, date.node, position.node, score.node);
            cursesWrap.node.append(wrap.node);
        });


        hightEducationImgWrap.node.append(hightEducationImg.node);
        this.hightEducation.node.append(hightEducationImgWrap.node, hightEducationInfo.node);
        this.info.node.append(this.hightEducation.node, this.curse.node);
        this.node.append(this.title.node, this.info.node);
    }

    destroy() {
        super.destroy();
    }
}