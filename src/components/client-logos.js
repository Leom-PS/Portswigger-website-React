import React from 'react'

import PropTypes from 'prop-types'

import './client-logos.css'

const ClientLogos = (props) => {
  return (
    <div className={`client-logos-container ${props.rootClassName} `}>
      <img
        alt={props.component2Alt}
        src={props.component2Src}
        className="client-logos-component2"
      />
    </div>
  )
}

ClientLogos.defaultProps = {
  rootClassName: '',
  component2Alt: 'Component24173',
  component2Src: '/external/component24173-93hn.svg',
}

ClientLogos.propTypes = {
  rootClassName: PropTypes.string,
  component2Alt: PropTypes.string,
  component2Src: PropTypes.string,
}

export default ClientLogos
