var React = require('react');
var cn = require('classnames');

var Messagebar = function (container, maxRows) {
    var m = this;
    m.container = container;
    m.textarea = m.container.find('textarea');
    m.buttons = m.container.find('a');
    m.pageContainer = m.container.parents('.page').eq(0);
    m.pageContent = m.pageContainer.find('.page-content');
    m.buttonsHeight = parseInt(m.buttons.css('height'));
    var maxHeight = parseInt(m.textarea.css('line-height'))*(maxRows+1);

    // Initial Sizes
    m.pageContentPadding = parseInt(m.pageContent.css('padding-bottom'));
    m.initialBarHeight = m.container[0].offsetHeight;
    m.initialAreaHeight = m.textarea[0].offsetHeight;
    
    // Resize textarea
    m.sizeTextarea = function () {
        // Reset
        m.textarea.css({'height': ''});
        
        var height = m.textarea[0].offsetHeight;
        var diff = height - m.textarea[0].clientHeight;
        var scrollHeight = m.textarea[0].scrollHeight;

        // Update
        if (scrollHeight + diff > height) {
            var newAreaHeight = scrollHeight + diff;
            var newBarHeight = m.initialBarHeight + (newAreaHeight - m.initialAreaHeight);
            var maxBarHeight = maxHeight || m.container.parents('.view')[0].offsetHeight - 88;
            if (newBarHeight > maxBarHeight) {
                newBarHeight = parseInt(maxBarHeight, 10);
                newAreaHeight = newBarHeight - m.initialBarHeight + m.initialAreaHeight;
            }
            m.textarea.css('height', newAreaHeight + 'px');
            m.container.css('height', newBarHeight + 'px');
            m.buttons.css('bottom', ((newBarHeight-m.buttonsHeight)/2) + 'px');
            if (m.pageContent.length > 0) {
                m.pageContent.css('padding-bottom', newBarHeight + 'px');
                if (m.pageContent.find('.messages-new-first').length === 0) {
                    m.pageContent.scrollTop(m.pageContent[0].scrollHeight - m.pageContent[0].offsetHeight);
                }
            }
        }
        else {
            if (m.pageContent.length > 0) {
                m.container.css({'height': '', 'bottom': ''});
                m.pageContent.css({'padding-bottom': ''});
                m.buttons.css('bottom', '');
            }
        }
    };
    
    // Clear
    m.clear = function () {
        m.textarea.val('').trigger('change');
    };
    m.value = function (value) {
        if (typeof value === 'undefined') return m.textarea.val();
        else m.textarea.val(value).trigger('change');  
    };
    
    // Handle textarea
    m.textareaTimeout = undefined;
    m.handleTextarea = function (e) {
        clearTimeout(m.textareaTimeout);
        m.textareaTimeout = setTimeout(function () {
            m.sizeTextarea();
        }, 0);
    };

    //Events
    function preventSubmit(e) {
        e.preventDefault();
    }

    m.attachEvents = function (destroy) {
        var method = destroy ? 'off' : 'on';
        m.container[method]('submit', preventSubmit);
        m.textarea[method]('change keydown keypress keyup paste cut', m.handleTextarea);
    };
    m.detachEvents = function () {
        m.attachEvents(true);
    };
    
    // Init Destroy
    m.init = function () {
        m.attachEvents();
    };
    m.destroy = function () {
        m.detachEvents();
        m = null;
    };
    m.init();
    
    return m;
};

module.exports = React.createClass({
		getDefaultProps: function() {
			return {
				maxRows: 5
			}
		},
		componentDidMount: function() {
				this.props.messagebar = new Messagebar($(this.refs.messagebar.getDOMNode()), this.props.maxRows);
		},
		componentWillUnmount: function() {
			this.props.messagebar.destroy();
		},
    render: function() {
         return (
         	<div className="toolbar messagebar" ref="messagebar">
			      <div className="toolbar-inner">
			      	<a href="#" className="link icon-only"><i className="icon icon-camera"></i></a>
			        <textarea placeholder="Message"></textarea>
			        <a href="#" className="link send-message">Send</a>
			      </div>
					</div>
         );
    }
});
