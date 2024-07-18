import React from 'react'

import PropTypes from 'prop-types'

import './card-portrait.css'

const CardPortrait = (props) => {
  return (
    <div className={`card-portrait-container ${props.rootClassName} `}>
      <div className="card-portrait-frame5512">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="card-portrait-image"
        />
        <h1 className="Desktop-Heading4">{props.heading}</h1>
        <span className="card-portrait-text1 HeadingHeading6Light">
          {props.text}
        </span>
        <div className="card-portrait-container1">
          <span className="card-portrait-text2 BodyLargeBold">
            {props.link}
          </span>
          <img
            alt="ChevronRightI175"
            src="/external/chevronrighti175-32xa.svg"
            className="card-portrait-chevron-right"
          />
        </div>
      </div>
    </div>
  )
}

CardPortrait.defaultProps = {
  text: 'Learn the basics of Burp Suite Professional - with our series of beginner video tutorials.',
  rootClassName: '',
  imageSrc: '/card-image-example-300h.png',
  imageAlt: 'image',
  link: 'Read more',
  heading: 'Video tutorials',
}

CardPortrait.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  link: PropTypes.string,
  heading: PropTypes.string,
}

export default CardPortrait
