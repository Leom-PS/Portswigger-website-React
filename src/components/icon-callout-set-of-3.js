import React from 'react'

import PropTypes from 'prop-types'

import './icon-callout-set-of-3.css'

const IconCalloutSetOf3 = (props) => {
  return (
    <div className={`icon-callout-set-of-3-container ${props.rootClassName} `}>
      <div className="icon-callout-set-of-3-magnifyingglass">
        <div className="icon-callout-set-of-3-frame4836">
          <div className="icon-callout-set-of-3-group4832">
            <img
              alt="VectorI542"
              src="/external/vectori542-i5z5.svg"
              className="icon-callout-set-of-3-vector"
            />
          </div>
        </div>
        <div className="icon-callout-set-of-3-magnifyingglass1">
          <div className="icon-callout-set-of-3-group4842">
            <img
              alt="magnifyingglass2I542"
              src={props.icon}
              className="icon-callout-set-of-3-magnifyingglass2"
            />
          </div>
        </div>
      </div>
      <h1 className="icon-callout-set-of-3-text Desktop-Heading5">
        {props.heading}
      </h1>
      <div className="icon-callout-set-of-3-container1">
        <h1 className="icon-callout-set-of-3-text1 BodyLargeBold">
          {props.linktext}
        </h1>
        <img
          alt="ChevronDownI542"
          src={props.icon1}
          className="icon-callout-set-of-3-chevron-down"
        />
      </div>
    </div>
  )
}

IconCalloutSetOf3.defaultProps = {
  icon: '/external/magnifyingglass2i542-u2eu.svg',
  linktext: 'This is a quaternary link',
  icon1: '/external/chevrondowni542-vuzo.svg',
  rootClassName: '',
  heading: 'Heading goes here',
}

IconCalloutSetOf3.propTypes = {
  icon: PropTypes.string,
  linktext: PropTypes.string,
  icon1: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
}

export default IconCalloutSetOf3
