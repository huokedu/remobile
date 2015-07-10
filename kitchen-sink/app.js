﻿var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classnames = require('classnames');
var UI =require('UI');
var ModalPanel = UI.Modal.ModalPanel;
var views = require('./modules');
var welcome = require('./modules/home/welcome');
var utils = require('./modules/utils');
var chat = require('./modules/chat');
var resource = require('./modules/resource/resource');

var App = React.createClass({
    mixins: [UI.Mixins.App(views)],
    componentWillMount: function () {
        this.resource = resource;
        this.us = utils.userSetting;
        this.error = utils.error;
        this.constants = utils.constants;
        this.date = utils.date;
        this.color = utils.color;
        this.callMgr = chat.callMgr;
        this.groupMgr = chat.groupMgr;
        this.messageMgr = chat.messageMgr;
        this.router = chat.router;
        this.socketMgr = chat.socketMgr;
        this.notifyMgr = chat.notifyMgr;
        this.loginMgr = chat.loginMgr;
        this.userMgr = chat.userMgr;
        this.userHeadCss = $.createStyleSheet();
        for (var i=0; i<33; i++) {
            $.insertStyleSheet(this.userHeadCss, '.user_head_' + i, 'background-image:url(img/head/'+i+'.jpg)');
        }
        //welcome.showWelcome();
        app.socketMgr.start("http://localhost:8000");
    },
    playSound: function(src) {
    },
    showError: function(error) {
        this.toast(error);
    },
    showChatError: function(error) {
        this.toast(this.error[error]);
    },
    showModal: function(modalType, modalChildren) {
        this.setState({modalVisible:true, modalChildren:modalChildren, modalType:modalType});
    },
    hideModal: function() {
        this.setState({modalVisible:false});
    },
    emit: function() {
        console.log(arguments[0], JSON.stringify(arguments[1]));
        if (!this.loginMgr.online) {
            console.log('you are offline');
            return;
        }
        this.socket.emit.apply(this.socket, arguments);
    },
    showWait: function(text) {
        var Modal = UI.Modal;
        var preLoaderModal = (
            <Modal.ModalNoButttons>
                <Modal.ModalInner>
                    {text&&<Modal.ModalTitle>{text}</Modal.ModalTitle>}
                    <Modal.ModalText>
                        <Modal.BlackPreloader />
                    </Modal.ModalText>
                </Modal.ModalInner>
            </Modal.ModalNoButttons>
        );
       this.showModal('modal', preLoaderModal);
    },
    hideWait: function() {
        this.hideModal();
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
function adjustWebDisplayRagion() {
    var el = $('#iphone_device');
    el.addClass('iphone_device');
    var width = $(window).width();
    var height = $(window).height();
    var ew, eh, eleft, etop;
    if (width/height > 5/9) {
        eh = height;
        ew = eh*5/9;
    } else {
        ew = width;
        eh = ew*9/5;
    }
    eleft = width/2 - ew/2;
    etop = height/2 - eh/2;
    el.css({'left':eleft+"px", 'top':etop+"px", 'width':ew+"px", 'height':eh+"px"});

    var screen = $('#iphone_screen');
    screen.addClass('iphone_screen');
    screen.css({top:100/720*eh+'px', left:32/480*ew+'px', right:32/480*ew+'px', bottom:100/720*eh+'px'});
}
function onDeviceReady() {
    adjustWebDisplayRagion();
    React.render(<App />, document.getElementById('iphone_screen'));
}

document.addEventListener('deviceready', onDeviceReady, false);

