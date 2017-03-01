import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import filter from '../util/filter'
import '../css/slider.scss'
import Swiper from 'swiper'
window.Swiper = Swiper

const SimpleSlider = React.createClass({
  componentDidMount () {
    new window.Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: 4000,
      autoplayDisableOnInteraction: false,
      observer: true,
      lazyLoading: true,
      resistanceRatio: 0
    })
  },
  render: function () {
    let {slider} = this.props
    return (
      <div className="slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/*<div  className="swiper-slide" style="{ backgroundImage: 'url(' + replace(item.image) + ')' }">*/}
            {slider.map(item=>
              <div key={item.id} className="swiper-slide" style={{backgroundImage: 'url(' + filter.replaceUrl(item.image) + ')' }} >
                <Link to={`/detail/${item.id}`} key={`slider-${item.id}`}>
                  <div className="swiper-mask"></div>
                  <h1 className="slider-title">{item.title}</h1>
                </Link>
              </div>
            )}
        </div>
        {/*<!-- Add Pagination -->*/}
        <div className="swiper-pagination"></div>
      </div>
    </div>
    );
  }
});

export default connect((state)=> {
  return {
    slider: state.content_list.top_stories
  };
})(SimpleSlider)