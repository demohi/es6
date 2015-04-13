/**
 * es6 - MenuList.js
 * @mdemo
 */

'use strict';

import React from "react";
import MenuListItem from "./MenuListItem";

export default class MenuList extends React.Component {

    constructor(props) {
        super(props);
    }
    createItem(item, key) {
        let props = {
            href: item.href,
            text: item.text,
            key: key,
            selected: item.selected
        };
        return(
            <MenuListItem {...props} />
        )
    }
    render() {
        return(
            <ul className="pure-menu-list">
                {this.props.items.map(this.createItem.bind(this))}
            </ul>
        )
    }
}

MenuList.defaultProps = {
    items: []
};
