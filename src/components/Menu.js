import React from 'react';
import settings from './Settings';
import './Menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">{settings.appName}: <span className="Version">{settings.appVersion}</span></div>
        )
    };
}

export default Menu;