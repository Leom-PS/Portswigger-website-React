import React from 'react'

import PropTypes from 'prop-types'

import './quotation-pro.css'

const QuotationPro = (props) => {
  return (
    <div className={`quotation-pro-container ${props.rootClassName} `}>
      <div className="quotation-pro-frame5519">
        <h1 className="quotation-pro-text Desktop-Heading1">{props.quote}</h1>
        <span className="quotation-pro-text1 HeadingHeading5Light">
          {props.source}
        </span>
      </div>
    </div>
  )
}

QuotationPro.defaultProps = {
  quote:
    '“Is there anything better than Burp Suite Professional by @PortSwigger? I have some tools like it but I have yet to find anything as good”',
  rootClassName: '',
  source: 'Source: @AlicornSkyler - Twitter',
}

QuotationPro.propTypes = {
  quote: PropTypes.string,
  rootClassName: PropTypes.string,
  source: PropTypes.string,
}

export default QuotationPro
