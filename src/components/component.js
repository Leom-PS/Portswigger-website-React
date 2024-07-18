import React from 'react'

import PropTypes from 'prop-types'

import StarRatingWhite from './star-rating-white'
import InputField from './input-field'
import PrimaryButtonDark from './primary-button-dark'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <div className="app-component-container1">
        <div className="app-component-container2">
          <StarRatingWhite
            quote="“Dramatically streamlined our security testing process”"
            rootClassName="star-rating-white-root-class-name30"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“Provides consistent and reliable security scans that our devs trust”"
            rootClassName="star-rating-white-root-class-name31"
          ></StarRatingWhite>
          <StarRatingWhite
            quote=" Transformed our overall security posture with automated testing"
            rootClassName="star-rating-white-root-class-name32"
          ></StarRatingWhite>
        </div>
        <div className="app-component-container3">
          <span className="app-component-text Desktop-Heading4">
            {props.text}
          </span>
          <h2 className="app-component-text1">
            <span className="Desktop-Heading3">{props.text1}</span>
            <span className="Desktop-Heading1">{props.text2}</span>
            <span className="Desktop-Heading1">{props.text3}</span>
          </h2>
        </div>
        <div className="app-component-container4">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="app-component-image"
          />
          <div className="app-component-container5">
            <span className="app-component-text5 Desktop-Heading4Light">
              {props.text4}
            </span>
            <InputField
              placeholder1="Placeholder"
              rootClassName="input-field-root-class-name15"
            ></InputField>
            <InputField
              placeholder="Email"
              rootClassName="input-field-root-class-name16"
            ></InputField>
            <span className="app-component-text6 BodyLargeBold">
              {props.text5}
            </span>
            <select className="app-component-select">
              <option value="Option 1">Option 1</option>
              <option value="Advertising">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
            <PrimaryButtonDark rootClassName="primary-button-dark-root-class-name10"></PrimaryButtonDark>
          </div>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text1: 'The ',
  imageAlt: 'image',
  text4: 'Request a fully-featured free trial',
  text3: 'scales across your enterprise.',
  imageSrc: '/enterprise-db-500h.png',
  text: 'Burp Suite Enterprise Edition',
  text2: 'automated vulnerability scanner that ',
  text5: 'Industry',
}

AppComponent.propTypes = {
  text1: PropTypes.string,
  imageAlt: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  imageSrc: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
}

export default AppComponent
