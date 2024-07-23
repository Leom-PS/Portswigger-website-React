import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButtonLight from './secondary-button-light'
import './card-horizontal-light.css'

const CardHorizontalLight = (props) => {
  return (
    <div className={`card-horizontal-light-container ${props.rootClassName} `}>
      <div className="card-horizontal-light-frame5496">
        <img
          alt={props.imageAlt}
          src={props.imagesrc}
          className="card-horizontal-light-image10"
        />
        <div className="card-horizontal-light-frame5495">
          <div className="card-horizontal-light-tags">
            <span className="card-horizontal-light-text BodySmallBold">
              <span>Scan scheduled</span>
            </span>
          </div>
          <h1 className="card-horizontal-light-text2 Desktop-Heading4">
            {props.heading}
          </h1>
          <span className="card-horizontal-light-text3 HeadingHeading6Light">
            {props.bodycopy}
          </span>
          <SecondaryButtonLight rootClassName="secondary-button-light-root-class-name2"></SecondaryButtonLight>
        </div>
      </div>
    </div>
  )
}

CardHorizontalLight.defaultProps = {
  imageAlt: 'image103425',
  rootClassName: '',
  imagesrc: '/external/image103425-mpks-300h.png',
  heading: 'Burp Suite roadmap update',
  bodycopy:
    'Get the inside scoop on the latest Burp Suite news, tech, and interviews - from right across the PortSwigger team.',
}

CardHorizontalLight.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imagesrc: PropTypes.string,
  heading: PropTypes.string,
  bodycopy: PropTypes.string,
}

export default CardHorizontalLight
