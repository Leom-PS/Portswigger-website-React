import React from 'react'

import PropTypes from 'prop-types'

import './list-item-with-icon-dark3.css'

const ListItemWithIconDark3 = (props) => {
  return (
    <div
      className={`list-item-with-icon-dark3-container ${props.rootClassName} `}
    >
      <div className="list-item-with-icon-dark3-frame1">
        <img
          alt="CheckInCircleOutlined1216"
          src="/external/checkincircleoutlined1216-agf.svg"
          className="list-item-with-icon-dark3-check-in-circle-outlined"
        />
        <span className="list-item-with-icon-dark3-text BodyLarge">
          {props.text}
        </span>
      </div>
    </div>
  )
}

ListItemWithIconDark3.defaultProps = {
  text: 'Secure your whole web portfolio',
  rootClassName: '',
}

ListItemWithIconDark3.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ListItemWithIconDark3
