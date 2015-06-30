﻿var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classnames = require('classnames');
var UI =require('UI');
var ModalPanel = UI.Modal.ModalPanel;
var views = require('./modules');
var userMgr = require('./modules/chat/userMgr/userMgr');
var welcome = require('./modules/home/welcome');

var App = React.createClass({
	mixins: [UI.Mixins.App(views)],
  componentWillMount: function () {
      this.userMgr = userMgr;
      this.userHeadCss = $.createStyleSheet();
      for (var i=0; i<33; i++) {
      	$.insertStyleSheet(this.userHeadCss, '.user_head_' + i, 'background-image:url(img/head/'+i+'.jpg)');
      }
      welcome.showWelcome();
  },
  showModal: function(modalType, modalChildren) {
      this.setState({modalVisible:true, modalChildren:modalChildren, modalType:modalType});
  },
  hideModal: function() {
      this.setState({modalVisible:false});
  },
  showPanel: function(panelType, panelChildren) {
    	this.setState({panelVisible:true, panelChildren:panelChildren, panelType:panelType});
  },
  hidePanel: function() {
      this.setState({panelVisible:false});
  },
  getInitialState: function() {
		return {
			currentView: 'login'
		};
	},
	render: function() {
		return (
        <ReactCSSTransitionGroup transitionName={this.state.viewTransition.name} transitionEnter={this.state.viewTransition.in} transitionLeave={this.state.viewTransition.out} component="div">                  
        		<ModalPanel visible={this.state.modalVisible} type={this.state.modalType}>{this.state.modalChildren}</ModalPanel>
        		<UI.View.Panel visible={this.state.panelVisible} type={this.state.panelType}>{this.state.panelChildren}</UI.View.Panel>
            {this.getCurrentView()}
        </ReactCSSTransitionGroup>
		);
	}
});

function startApp() {
	React.render(<App />, document.getElementById('app'));
}

function onDeviceReady() {
	StatusBar.styleDefault();
	startApp();
}

if (typeof cordova === 'undefined') {
	startApp();
} else {
	document.addEventListener('deviceready', onDeviceReady, false);
}
