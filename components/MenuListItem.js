/**
 * es6 - MenuListItem.js
 * @mdemo
 */

'use strict';

import React from "react/addons";

let classSet = React.addons.classSet;

export default class MenuListItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let classes = classSet({
            'pure-menu-item': true,
            'pure-menu-selected': this.props.selected
        });
        return (
            <li className={classes}>
                <a href={this.props.href} className="pure-menu-link">{this.props.text}</a>
            </li>
        )
    }
}

MenuListItem.defaultProps = {
    href: '#',
    text: '',
    selected: false
};
