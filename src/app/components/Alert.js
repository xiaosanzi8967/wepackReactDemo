var React = require('react'),
	ReactDOM = require("react-dom"),
    PropTypes = React.PropTypes;
	require('weui');
var Alert = React.createClass ({
	propTypes: {
	    content: PropTypes.string,
	    title:PropTypes.string,
	    button:PropTypes.object,
    },
    handleClick() {
     	this.props.button && this.props.button.callback?
     	this.props.button.callback():
    		(function($this){
    			var container =ReactDOM.findDOMNode($this.refs.weuiDialogAlert).parentNode;
    			ReactDOM.unmountComponentAtNode(container) ;
    		})(this);
    	
    },
    render() {
    	var btnName = this.props.button.btnName || "确定" ;
	    return (
		<div className="weui_dialog_alert" ref="weuiDialogAlert">
		    <div className="weui_mask"></div>
		    <div className="weui_dialog">
		        <div className="weui_dialog_hd"><strong className="weui_dialog_title">{this.props.title}</strong></div>
		        <div className="weui_dialog_bd">{this.props.content}</div>
		        <div className="weui_dialog_ft">
		            <a href="javascript:;" onClick={this.handleClick} className="weui_btn_dialog primary">{btnName}</a>
		        </div>
		    </div>
		</div>
	    );
    }
});

function alertDialog(){}
alertDialog.prototype = {
	show:function(options){
		this.title = options.title ;
		this.content = options.content ;
		this.button = options.button ;
		this.container = options.container||document.body;
		ReactDOM.render(<Alert content={this.content} title={this.title} button={this.button}/>,this.container);
	},
	destroy:function(){
		ReactDOM.unmountComponentAtNode(this.container) ;
	}
};
module.exports = new alertDialog();