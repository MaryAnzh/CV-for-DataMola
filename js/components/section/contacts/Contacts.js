import { Component } from "../../../util/component.js";

export class Contacts extends Component {
    list;
    contactsList;
    phone;
    mail;

    constructor() {
        super('div', 'contacts');
        this.phone = '+375297023851';
        this.mail = 'maryang@mail.ru'
        this.contactsList = {
            phone: this.phone,
            mail: this.mail,
            github: 'maryanzh',
            messengers: {
                skype: this.mail,
                discord: 'maryang#3361',
                Viber: this.phone,
            }
        }
        this.list = new Component('ul', 'contacts__list');
        for (const key in this.contactsList) {
            if (key === 'messengers') {
                const li = new Component('li', 'contacts__list__item', `${key}: `);
                this.list.node.append(li.node);
                const subList = new Component('ul', 'contacts__list__item__sub-list');
                li.node.append(subList.node);
                for (const subKey in this.contactsList.messengers) {
                    const subLi = new Component('li', 'contacts__list__item__sub-list__item', `${subKey}: ${this.contactsList.messengers[subKey]}`);
                    subList.node.append(subLi.node);
                }
            } else {
                const li = new Component('li', 'contacts__list__item', `${key}: ${this.contactsList[key]}`);
                this.list.node.append(li.node);
            }
        }
        this.node.append(this.list.node);
    }

    destroy() {
        super.destroy();
    }

}