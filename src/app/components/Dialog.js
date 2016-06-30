var React = require('react'),
	ReactDOM = require("react-dom"),
    PropTypes = React.PropTypes;
	require('weui');


function dialog(){}
dialog.prototype = {
	show:function(options){
		console.log(options);
		this.title = options.title ;
		this.content = options.content ;
		this.buttons = options.buttons ;
		//ReactDOM.render(<Dialog content={this.content} title={this.title} buttons={this.buttons}/>,options.container);
	},
	destroy:function(){
		//ReactDOM.unmountComponentAtNode(this.container) ;
	}
};
module.exports = new dialog();