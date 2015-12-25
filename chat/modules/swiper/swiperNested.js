var React = require('react');
var UI = require('UI');
var swiper = UI.Mixins.Swiper.swiper;
var Content = UI.Content;
var View = UI.View;

module.exports = React.createClass({
	componentDidMount: function() {
		var paramsh = {
			pagination: ".swiper-pagination-h",
			paginationHide: false
		};
		this.props.sliderh = swiper(this.refs.swiperh.getDOMNode(), paramsh);
		
		var paramsv = {
			pagination: ".swiper-pagination-v",
			direction: "vertical",
			paginationHide: false
		};
		this.props.sliderv = swiper(this.refs.swiperv.getDOMNode(), paramsv);
  },
  componentWillUnmount: function() {
		this.props.sliderh.destroy();
		this.props.sliderv.destroy();
	},
	render: function() {
		return (
			<View.Page  title="Swiper Nested">
         <View.PageContent>
             <div className="swiper-container ks-demo-slider" ref="swiperh">
			        <div className="swiper-pagination swiper-pagination-h"></div>
			        <div className="swiper-wrapper">
			          <div className="swiper-slide">Horizontal Slide 1</div>
			          <div className="swiper-slide"> 
			            <div className="swiper-container ks-demo-slider" ref="swiperv">
			              <div className="swiper-pagination swiper-pagination-v"></div>
			              <div className="swiper-wrapper">
			                <div className="swiper-slide">Vertical Slide 1</div>
			                <div className="swiper-slide">Vertical Slide 2</div>
			                <div className="swiper-slide">Vertical Slide 3</div>
			              </div>
			            </div>
			          </div>
			          <div className="swiper-slide">Horizontal Slide 3</div>
			          <div className="swiper-slide">Horizontal Slide 4</div>
			        </div>
			      </div>
          </View.PageContent>
      </View.Page>
		);
	}
});
