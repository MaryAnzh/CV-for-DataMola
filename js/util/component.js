export class Component {
    node;

    constructor(tagName, className, textContent, atr) {
        this.node = document.createElement(tagName);
        if (Array.isArray(className)) {
            className.forEach(className => this.node.classList.add(className));
        }
        if (typeof className === 'string') {
            this.className = className;
        }
        if (textContent !== '') {
            this.node.textContent = textContent;
        }
        if (atr) {
            for (let key in atr) {
                this.node.setAttribute(key, atr[key]);
            }
        }
    }

    destroy() {
        this.node.remove();
    }
}