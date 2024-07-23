import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButtonDark from './secondary-button-dark'
import './card-horizontal-dark.css'

const CardHorizontalDark = (props) => {
  return (
    <div className={`card-horizontal-dark-container ${props.rootClassName} `}>
      <div className="card-horizontal-dark-frame5496">
        <img
          alt={props.imageAlt}
          src={props.imagesrc}
          className="card-horizontal-dark-image10"
        />
        <div className="card-horizontal-dark-frame5495">
          <div className="card-horizontal-dark-tags">
            <span className="card-horizontal-dark-text BodySmallBold">
              <span>Scan scheduled</span>
            </span>
          </div>
          <h1 className="card-horizontal-dark-text2 Desktop-Heading4">
            {props.heading}
          </h1>
          <span className="card-horizontal-dark-text3 HeadingHeading6Light">
            {props.bodycopy}
          </span>
          <SecondaryButtonDark rootClassName="secondary-button-dark-root-class-name3"></SecondaryButtonDark>
        </div>
      </div>
    </div>
  )
}

CardHorizontalDark.defaultProps = {
  imageAlt: 'image103425',
  rootClassName: '',
  imagesrc: '/external/image103425-mpks-300h.png',
  bodycopy:
    'Get the inside scoop on the latest Burp Suite news, tech, and interviews - from right across the PortSwigger team.',
  heading: 'Burp Suite roadmap update',
}

CardHorizontalDark.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imagesrc: PropTypes.string,
  bodycopy: PropTypes.string,
  heading: PropTypes.string,
}

export default CardHorizontalDark
