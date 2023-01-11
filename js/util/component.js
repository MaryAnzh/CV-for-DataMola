export class Component {
    node;

    constructor(tagName, className, textContent, atr) {
        const element = document.createElement(tagName);
        if (Array.isArray(className)) {
            className.forEach(className => element.classList.add(className));
        }
        if (typeof className === 'string') {
            element.className = className;
        }
        if (textContent !== '') {
            element.textContent = textContent;
        }
        if (atr) {
            for (let key in atr) {
                element.setAttribute(key, atr[key]);
            }
        }
        this.node = element;
    }

    destroy() {
        this.node.remove();
    }
}