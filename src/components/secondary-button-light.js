import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button-light.css'

const SecondaryButtonLight = (props) => {
  return (
    <div className={`secondary-button-light-container ${props.rootClassName} `}>
      <button className="secondary-button-light-button button">
        <span className="secondary-button-light-text BodyLargeBold">
          {props.buttontext1}
        </span>
        <img
          alt="ChevronRight1151"
          src={props.chevronRightSrc1}
          className="secondary-button-light-chevron-right"
        />
      </button>
    </div>
  )
}

SecondaryButtonLight.defaultProps = {
  buttontext1: 'Buy - $399',
  chevronRightSrc1: '/external/chevronright1151-t4lc.svg',
  rootClassName: '',
}

SecondaryButtonLight.propTypes = {
  buttontext1: PropTypes.string,
  chevronRightSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButtonLight
