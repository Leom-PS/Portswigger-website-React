import React from 'react'

import PropTypes from 'prop-types'

import './primary-button-light.css'

const PrimaryButtonLight = (props) => {
  return (
    <div className={`primary-button-light-container ${props.rootClassName} `}>
      <button className="primary-button-light-button button">
        <span className="BodyLargeBold">{props.text}</span>
        <img
          alt="ChevronRightI542"
          src={props.iconright}
          className="primary-button-light-chevron-right"
        />
      </button>
    </div>
  )
}

PrimaryButtonLight.defaultProps = {
  text: 'Buy - $399',
  rootClassName: '',
  iconright: '/external/chevronrighti542-b7be.svg',
}

PrimaryButtonLight.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  iconright: PropTypes.string,
}

export default PrimaryButtonLight
