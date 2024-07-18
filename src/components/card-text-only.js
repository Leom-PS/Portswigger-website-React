import React from 'react'

import PropTypes from 'prop-types'

import './card-text-only.css'

const CardTextOnly = (props) => {
  return (
    <div className={`card-text-only-container ${props.rootClassName} `}>
      <div className="card-text-only-frame5512">
        <h1 className="Desktop-Heading4">{props.heading}</h1>
        <span className="card-text-only-text1 HeadingHeading6Light">
          {props.text}
        </span>
        <div className="card-text-only-container1">
          <span className="card-text-only-text2 BodyLargeBold">
            {props.link}
          </span>
          <img
            alt="ChevronRightI175"
            src="/external/chevronrighti175-32xa.svg"
            className="card-text-only-chevron-right"
          />
        </div>
      </div>
    </div>
  )
}

CardTextOnly.defaultProps = {
  text: 'Learn the basics of Burp Suite Professional - with our series of beginner video tutorials.',
  link: 'Read more',
  heading: 'Video tutorials',
  rootClassName: '',
}

CardTextOnly.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CardTextOnly
