var React = require('react');

module.exports = React.createClass({
    render: function() {
         return (
             <li className="list-group-title">
                {this.props.children}
             </li>
         );
    }
});
