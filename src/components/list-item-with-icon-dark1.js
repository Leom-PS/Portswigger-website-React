import React from 'react'

import PropTypes from 'prop-types'

import './list-item-with-icon-dark1.css'

const ListItemWithIconDark1 = (props) => {
  return (
    <div
      className={`list-item-with-icon-dark1-container ${props.rootClassName} `}
    >
      <div className="list-item-with-icon-dark1-frame1">
        <img
          alt="CheckInCircleOutlined1216"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1a02367f-e1ab-4d6d-81a8-d7d01ad8815e/943f32b7-f894-4142-ab16-ea300529f526?org_if_sml=11007&amp;force_format=original"
          className="list-item-with-icon-dark1-check-in-circle-outlined"
        />
        <span className="list-item-with-icon-dark1-text BodyLarge">
          {props.text}
        </span>
      </div>
    </div>
  )
}

ListItemWithIconDark1.defaultProps = {
  text: 'Secure your whole web portfolio',
  rootClassName: '',
}

ListItemWithIconDark1.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ListItemWithIconDark1
