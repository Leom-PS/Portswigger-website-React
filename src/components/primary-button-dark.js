import React from 'react'

import PropTypes from 'prop-types'

import './primary-button-dark.css'

const PrimaryButtonDark = (props) => {
  return (
    <div className={`primary-button-dark-container ${props.rootClassName} `}>
      <button className="primary-button-dark-button button">
        <span className="primary-button-dark-text BodyLargeBold">
          {props.buttontext}
        </span>
        <img
          alt="ChevronRightI121"
          src="/external/chevronrighti121-blkr.svg"
          className="primary-button-dark-chevron-right"
        />
      </button>
    </div>
  )
}

PrimaryButtonDark.defaultProps = {
  rootClassName: '',
  buttontext: 'Book a demo',
}

PrimaryButtonDark.propTypes = {
  rootClassName: PropTypes.string,
  buttontext: PropTypes.string,
}

export default PrimaryButtonDark
