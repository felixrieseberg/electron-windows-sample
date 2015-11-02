/** @jsx React.DOM */

var React = require('react');
var ReactWinJS = require('react-winjs');

var SettingsPage = React.createClass({
    handleToggle: function (eventObject) {
        var toggleCommand = eventObject.currentTarget.winControl;
        this.setState({ toggleSelected: toggleCommand.checked });
    },

    getInitialState: function () {
        return {
            toggleSelected: false
        };
    },

    render: function () {
       return (
            <div className="win-type-body" style={{marginLeft: "10px"}}>
                <h2 className="win-h2">Settings</h2>
                
                <ReactWinJS.ToggleSwitch
                    checked={this.state.toggleSelected}
                    onChange={this.handleToggle}
                    labelOn="Switch is On"
                    labelOff="Switch is Off" />
                
                <button className="win-button" style={{marginTop: "10px"}}>Reboot</button>
            </div>)
    }
});

module.exports = SettingsPage;
