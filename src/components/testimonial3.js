import React from 'react'

import PropTypes from 'prop-types'

import './testimonial3.css'

const Testimonial3 = (props) => {
  return (
    <div
      className={`thq-section-padding testimonial3-testimonial13 ${props.rootClassName} `}
    >
      <div className="testimonial3-max-width thq-section-max-width">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="testimonial3-thumbnail thq-img-ratio-1-1"
        />
        <div className="testimonial3-content">
          <div className="testimonial3-stars"></div>
          <p className="thq-body-large testimonial3-text">{props.review1}</p>
          <div className="testimonial3-avatar">
            <div className="testimonial3-avatar-content">
              <span className="testimonial3-text1 thq-body-small">
                {props.author1Name}
              </span>
              <span className="thq-body-small testimonial3-text2">
                {props.author1Position}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial3.defaultProps = {
  author1Position: 'Position, Company name',
  company1LogoAlt: 'Company Logo',
  image1Alt: 'Company Alt',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  rootClassName: '',
  author1Name: 'Author Name',
  review1:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."',
  image1Src:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=700',
}

Testimonial3.propTypes = {
  author1Position: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  image1Alt: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  author1Name: PropTypes.string,
  review1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Testimonial3
