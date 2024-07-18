import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButtonLight from './secondary-button-light'
import './card-horizontal.css'

const CardHorizontal = (props) => {
  return (
    <div className={`card-horizontal-container ${props.rootClassName} `}>
      <div className="card-horizontal-frame5496">
        <img
          alt={props.imageAlt}
          src={props.imagesrc}
          className="card-horizontal-image10"
        />
        <div className="card-horizontal-frame5495">
          <div className="card-horizontal-tags">
            <span className="card-horizontal-text BodySmallBold">
              <span className="">Scan scheduled</span>
            </span>
          </div>
          <h1 className="card-horizontal-text2 Desktop-Heading4">
            {props.heading}
          </h1>
          <span className="card-horizontal-text3 HeadingHeading6Light">
            {props.bodycopy}
          </span>
          <SecondaryButtonLight
            rootClassName="secondary-button-light-root-class-name2"
            className=""
          ></SecondaryButtonLight>
        </div>
      </div>
    </div>
  )
}

CardHorizontal.defaultProps = {
  imageAlt: 'image103425',
  rootClassName: '',
  imagesrc: '/external/image103425-mpks-300h.png',
  heading: 'Burp Suite roadmap update',
  bodycopy:
    'Get the inside scoop on the latest Burp Suite news, tech, and interviews - from right across the PortSwigger team.',
}

CardHorizontal.propTypes = {
  imageAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  imagesrc: PropTypes.string,
  heading: PropTypes.string,
  bodycopy: PropTypes.string,
}

export default CardHorizontal
