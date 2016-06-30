var React = require('react'),
    PropTypes = React.PropTypes,
    ReactDOM = require("react-dom");
    require('weui');

var Loading = React.createClass ({
   propTypes: {
    content: PropTypes.string 
  },
  render() {
  	var content = this.props.content || '正在加载中...';
    return (
	<div id="loadingToast" className="weui_loading_toast" >
	    <div className="weui_mask_transparent"></div>
	    <div className="weui_toast">
	        <div className="weui_loading">
	            <div className="weui_loading_leaf weui_loading_leaf_0"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_1"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_2"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_3"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_4"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_5"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_6"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_7"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_8"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_9"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_10"></div>
	            <div className="weui_loading_leaf weui_loading_leaf_11"></div>
	        </div>
	        <p className="weui_toast_content">{content}</p>
	    </div>
	</div>
    );
  }
}) ;

function loading(container){
	this.container = container || document.body ;
}

loading.prototype.show = function(content){
    ReactDOM.render(<Loading content={content}/>,this.container);
};
loading.prototype.destroy = function(){
	ReactDOM.unmountComponentAtNode(this.container) ;
}

module.exports = new loading();