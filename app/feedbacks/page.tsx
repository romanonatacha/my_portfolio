'use client';
import BaseLayout from '../components/layouts/BaseLayout';
import feedbacks from '../data/feedbacks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Feedbacks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <BaseLayout title='feedbacks'>
      <div className='feedbacks'>
        <div className='boxed'>
          <div className='default light bottom16'>WHAT CLIENTS SAY ABOUT ME</div>
          <Slider {...settings}>
            {feedbacks &&
              feedbacks.map((item, i) => (
                <div className='feedbacks__slide' key={`feedback-${i}`}>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <p className='top16'>{item.text}</p>
                  <span>{item.date}</span>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </BaseLayout>
  );
}
