import { Component } from "../../../util/component.js";

export class About {
    section;
    
    constructor() {
        this.section = new Component('section', 'about', 'About');
    }

    destroy() {
        this.section.destroy();
    }
}