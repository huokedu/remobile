var React = require('react');
var UI = require('UI');
var swiper = UI.Mixins.Swiper.swiper;
var Content = UI.Content;
var View = UI.View;


function getImage(i) {
	return {backgroundImage: 'url(img/'+i+'.jpg)'}
}

module.exports = React.createClass({
	componentDidMount: function() {
		var params = {
			pagination: ".swiper-pagination",
			parallax: true,
			nextButton: ".swiper-button-next",
			prevButton: ".swiper-button-prev",
			speed: 600
		};
		this.props.slider = swiper(this.refs.swiper.getDOMNode(), params);			
  },
  componentWillUnmount: function() {
		this.props.slider.destroy();
	},
	render: function() {
		return (
			<View.Page  title="Swiper Parallax">
         <View.PageContent>
             <div className="swiper-container ks-parallax-slider" ref="swiper">
			        <div data-swiper-parallax="-23%" style={getImage(1)} className="swiper-parallax-bg"></div>
			        <div className="swiper-pagination color-white"></div>
			        <div className="swiper-button-next color-white"></div>
			        <div className="swiper-button-prev color-white"></div>
			        <div className="swiper-wrapper">
			          <div className="swiper-slide">
			            <div data-swiper-parallax="-100" className="swiper-slide-title">Slide 1</div>
			            <div data-swiper-parallax="-200" className="swiper-slide-subtitle">Subtitle</div>
			            <div data-swiper-parallax="-300" className="swiper-slide-text">
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
			            </div>
			          </div>
			          <div className="swiper-slide">
			            <div data-swiper-parallax="-100" className="swiper-slide-title">Slide 2</div>
			            <div data-swiper-parallax="-200" className="swiper-slide-subtitle">Subtitle</div>
			            <div data-swiper-parallax="-300" className="swiper-slide-text">
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
			            </div>
			          </div>
			          <div className="swiper-slide">
			            <div data-swiper-parallax="-100" className="swiper-slide-title">Slide 3</div>
			            <div data-swiper-parallax="-200" className="swiper-slide-subtitle">Subtitle</div>
			            <div data-swiper-parallax="-300" className="swiper-slide-text">
			              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
			            </div>
			          </div>
			        </div>
			       </div>
          </View.PageContent>
      </View.Page>
		);
	}
});
