import React from 'react'

import PropTypes from 'prop-types'

import './headshot-set-of-3.css'

const HeadshotSetOf3 = (props) => {
  return (
    <div className={`headshot-set-of-3-container ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="headshot-set-of-3-image"
      />
      <h1 className="headshot-set-of-3-text Desktop-Heading5">
        {props.heading}
      </h1>
      <div className="headshot-set-of-3-container1">
        <h1 className="headshot-set-of-3-text1 BodyLargeBold">
          {props.linktext}
        </h1>
        <img
          alt="ChevronDownI542"
          src={props.linkicon}
          className="headshot-set-of-3-chevron-down"
        />
      </div>
    </div>
  )
}

HeadshotSetOf3.defaultProps = {
  rootClassName: '',
  linkicon: '/external/chevrondowni542-vuzo.svg',
  imageAlt: 'image',
  heading: 'Heading goes here',
  linktext: 'This is a quaternary link',
  imageSrc: '/corey-ball-200w.png',
}

HeadshotSetOf3.propTypes = {
  rootClassName: PropTypes.string,
  linkicon: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  linktext: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default HeadshotSetOf3
