import { Component } from "../../../util/component.js";

export class About extends Component {

    constructor() {
        super('section', 'about', 'About');
    }

    destroy() {
        super.destroy();
    }
}