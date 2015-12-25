var React = require('react');
var UI = require('UI');
var swiper = UI.Mixins.Swiper.swiper;
var Content = UI.Content;
var View = UI.View;

function getImage(i) {
	return {backgroundImage: 'url(img/app/photo/'+i+'.jpg)'}
}

module.exports = React.createClass({
	componentDidMount: function() {
		this.props.sliderTop = swiper(this.refs.swiperTop.getDOMNode(), {
				nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    spaceBetween: 10
     });
		this.props.sliderThumbs = swiper(this.refs.swiperThumbs.getDOMNode(), {
				slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        touchRatio: 0.2,
			lazyLoading: true
		});
		this.props.sliderTop.params.control = this.props.sliderThumbs;
    this.props.sliderThumbs.params.control = this.props.sliderTop;
  },
  componentWillUnmount: function() {
		this.props.sliderTop.destroy();
		this.props.sliderThumbs.destroy();
	},
	render: function() {
		return (
			<View.Page  title="Two Way Control Gallery">
         <View.PageContent>
            <div className="swiper-container ks-swiper-gallery-top" ref="swiperTop">
			        <div className="swiper-wrapper">
			          <div style={getImage(1)} className="swiper-slide"></div>
			          <div style={getImage(2)} className="swiper-slide"></div>
			          <div style={getImage(3)} className="swiper-slide"></div>
			          <div style={getImage(4)} className="swiper-slide"></div>
			          <div style={getImage(5)} className="swiper-slide"></div>
			          <div style={getImage(6)} className="swiper-slide"></div>
			          <div style={getImage(7)} className="swiper-slide"></div>
			          <div style={getImage(8)} className="swiper-slide"></div>
			          <div style={getImage(9)} className="swiper-slide"></div>
			        </div>
			        <div className="swiper-button-next color-white"></div>
			        <div className="swiper-button-prev color-white"></div>
			      </div>
			      <div className="swiper-container ks-swiper-gallery-thumbs" ref="swiperThumbs">
			        <div className="swiper-wrapper">
			          <div className="swiper-slide">
			            <div style={getImage(1)} className="swiper-slide-pic">1</div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(2)} className="swiper-slide-pic">2</div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(3)} className="swiper-slide-pic"></div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(4)} className="swiper-slide-pic"></div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(5)} className="swiper-slide-pic"></div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(6)} className="swiper-slide-pic"></div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(7)} className="swiper-slide-pic"></div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(8)} className="swiper-slide-pic"></div>
			          </div>
			          <div className="swiper-slide">
			            <div style={getImage(9)} className="swiper-slide-pic"></div>
			          </div>
			        </div>
			      </div>
          </View.PageContent>
      </View.Page>
		);
	}
});
