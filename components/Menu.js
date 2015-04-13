/**
 * es6 - Menu.js
 * @mdemo
 */

'use strict';

import React from "react";
import MenuList from "./MenuList";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pure-menu pure-menu-horizontal">
                <MenuList items={this.props.items}/>
            </div>
        )
    }
}

Menu.defaultProps = {
    items: []
};
