import React from 'react'

import PropTypes from 'prop-types'

import './list-item-with-icon-dark2.css'

const ListItemWithIconDark2 = (props) => {
  return (
    <div
      className={`list-item-with-icon-dark2-container ${props.rootClassName} `}
    >
      <div className="list-item-with-icon-dark2-frame1">
        <img
          alt="CheckInCircleOutlined1216"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1a02367f-e1ab-4d6d-81a8-d7d01ad8815e/d5c463a6-b0b0-43a9-ada3-90fe69c66beb?org_if_sml=11007&amp;force_format=original"
          className="list-item-with-icon-dark2-check-in-circle-outlined"
        />
        <span className="list-item-with-icon-dark2-text BodyLarge">
          {props.text}
        </span>
      </div>
    </div>
  )
}

ListItemWithIconDark2.defaultProps = {
  text: 'Secure your whole web portfolio',
  rootClassName: '',
}

ListItemWithIconDark2.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ListItemWithIconDark2
