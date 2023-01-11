"use strict";
import { Header } from "./js/components/header/Header.js";

const header = document.querySelector('.header');
const main = document.querySelector('.main')
const footer = document.querySelector('.footer');
const headerFilling = new Header();

const draw = () => {
    header.append(headerFilling.header.node);
}
draw();
