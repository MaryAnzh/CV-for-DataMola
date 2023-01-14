import { Component } from "../../../util/component.js";

export class Burger extends Component {
    lines = [];

    constructor() {
        super('div', 'burger');
        const linesCount = 3;
        for (let i = 0; i < linesCount; i++) {
            const line = new Component('div', 'burger__line');
            this.node.append(line.node);
            this.lines.push(line.node);
        }
    }
}