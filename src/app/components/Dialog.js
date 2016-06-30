var React = require('react'),
	ReactDOM = require("react-dom"),
    PropTypes = React.PropTypes;
	require('weui');
var Dialog = React.createClass ({
	propTypes: {
	    content: PropTypes.string,
	    title:PropTypes.string,
	    buttons:PropTypes.array,
	    confirm:PropTypes.func,
	    cancel:PropTypes.func
    },
    handleClick() {
     	this.props.button && this.props.button.callback?
     	this.props.button.callback():
    		(function($this){
    			var container =ReactDOM.findDOMNode($this.refs.weuiDialog).parentNode;
    			ReactDOM.unmountComponentAtNode(container) ;
    		})(this);
    	
    },
    getButtons() {
    	var $this = this ;
    	var buttons = this.props.buttons ?
    		this.props.buttons :
    		[{
    			btnName:'取消',
    			className:'default',
    			callback:$this.props.cancel ? $this.props.cancel :
    			        function(){
	    			        var container =ReactDOM.findDOMNode($this.refs.weuiDialog).parentNode;
	    					ReactDOM.unmountComponentAtNode(container) ;
    			        }
    		},{
    			btnName:'确定',
    			className:'primary',
    			callback:$this.props.confirm ? $this.props.confirm : 
    			   		function(){
    			         	var container =ReactDOM.findDOMNode($this.refs.weuiDialog).parentNode;
    						ReactDOM.unmountComponentAtNode(container) ;
    			         }
    		}] ;
    		return buttons ;
    },
    render() {
    	var buttons = this.getButtons();
    	var btnStr = buttons.map(function(op,index){
    		return <a href="javascript:;" key={index} className={"weui_btn_dialog "+op.className} onClick={op.callback}>{op.btnName}</a>
    	});
	    return (
		<div className="weui_dialog_confirm" ref="weuiDialog">
		    <div className="weui_mask"></div>
		    <div className="weui_dialog">
		        <div className="weui_dialog_hd"><strong className="weui_dialog_title">{this.props.title}</strong></div>
		        <div className="weui_dialog_bd">{this.props.content}</div>
		        <div className="weui_dialog_ft">
		        	{btnStr}
		        </div>
		    </div>
		</div>
	    );
    }
});


function confirmdialog(options){
	this.title = options.title ;
	this.content = options.content ;
	this.buttons = options.buttons ;
	this.confirm = options.confirm ;
	this.cancel = options.cancel ;
	this.container = options.container ;
}
confirmdialog.prototype = {
	show:function(){
		ReactDOM.render(<Dialog content={this.content} title={this.title} buttons={this.buttons} confirm={this.confirm} cancel={this.cancel}/>,this.container);
	},
	destroy:function(){
		ReactDOM.unmountComponentAtNode(this.container) ;
	}
};
module.exports = confirmdialog;