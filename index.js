/**
 * es6 - index.js
 * @mdemo
 */

'use strict';

import React from "react";
import Menu from "./components/Menu";

let items = [
    {
        href: '#',
        text: 'home',
        selected: true
    },
    {
        href: '#about',
        text: 'about',
        selected: false
    }
];
React.render(<Menu items={items} />, document.querySelector('#es6'));
