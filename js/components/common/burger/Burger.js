import { Component } from "../../../util/component.js";

export class Burger extends Component {
    lines = [];

    constructor(showHideBurnerNav) {
        super('div', 'burger');
        this.node.onclick = () => showHideBurnerNav();
        const linesCount = 3;
        for (let i = 0; i < linesCount; i++) {
            const line = new Component('div', 'burger__line');
            this.node.append(line.node);
            this.lines.push(line.node);
        }
    }

    destroy() {
        super.destroy();
    }
}