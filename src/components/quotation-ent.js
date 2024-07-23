import React from 'react'

import PropTypes from 'prop-types'

import './quotation-ent.css'

const QuotationEnt = (props) => {
  return (
    <div className={`quotation-ent-container ${props.rootClassName} `}>
      <div className="quotation-ent-frame5519">
        <h1 className="quotation-ent-text Desktop-Heading1">{props.quote}</h1>
        <span className="quotation-ent-text1 HeadingHeading5Light">
          {props.source}
        </span>
      </div>
    </div>
  )
}

QuotationEnt.defaultProps = {
  quote:
    '“Is there anything better than Burp Suite Professional by @PortSwigger? I have some tools like it but I have yet to find anything as good”',
  source: 'Source: @AlicornSkyler - Twitter',
  rootClassName: '',
}

QuotationEnt.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default QuotationEnt
