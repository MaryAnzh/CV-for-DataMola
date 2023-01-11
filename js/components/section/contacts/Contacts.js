import { Component } from "../../../util/component.js";

export class Contacts {
    section;
    
    constructor() {
        this.section = new Component('section', 'contacts', 'Contacts');
    }

    destroy() {
        this.section.destroy();
    }
}