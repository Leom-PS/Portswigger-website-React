import React from 'react'

import { Helmet } from 'react-helmet'

import StarRatingWhite from '../components/star-rating-white'
import ListItemWithIconDark3 from '../components/list-item-with-icon-dark3'
import InputField from '../components/input-field'
import PrimaryButtonDark from '../components/primary-button-dark'
import QuotationEnt from '../components/quotation-ent'
import './api-scanning-demo-lp.css'

const APIScanningDemoLP = (props) => {
  return (
    <div className="api-scanning-demo-lp-container">
      <Helmet>
        <title>API-Scanning-demo-LP - Portswigger website</title>
        <meta
          property="og:title"
          content="API-Scanning-demo-LP - Portswigger website"
        />
      </Helmet>
      <div className="api-scanning-demo-lp-container1">
        <StarRatingWhite
          quote="“Dramatically streamlined our security testing process”"
          rootClassName="star-rating-white-root-class-name36"
        ></StarRatingWhite>
        <StarRatingWhite
          quote="“Provides consistent and reliable security scans that our devs trust”"
          rootClassName="star-rating-white-root-class-name37"
        ></StarRatingWhite>
        <StarRatingWhite
          quote=" Transformed our overall security posture with automated testing"
          rootClassName="star-rating-white-root-class-name38"
        ></StarRatingWhite>
      </div>
      <div className="api-scanning-demo-lp-container2">
        <div className="api-scanning-demo-lp-container3">
          <div className="api-scanning-demo-lp-container4">
            <span className="api-scanning-demo-lp-text Desktop-Heading4">
              Burp Suite Enterprise Edition
            </span>
            <h1 className="api-scanning-demo-lp-text1">
              More comprehensive scans. More time saved. No more workarounds.
              Welcome to built-in API scanning. 
            </h1>
          </div>
          <h2 className="api-scanning-demo-lp-text2">
            New native functionality means you can scan your APIs as part of
            your wider web apps scan, or independently. 
          </h2>
          <ListItemWithIconDark3
            text="Test for vulnerabilities without having to host definition files"
            rootClassName="list-item-with-icon-dark3-root-class-name15"
          ></ListItemWithIconDark3>
          <div className="api-scanning-demo-lp-container5">
            <ListItemWithIconDark3
              text="Secure your entire web portfolio"
              rootClassName="list-item-with-icon-dark3-root-class-name16"
            ></ListItemWithIconDark3>
            <ListItemWithIconDark3
              text="Test a wider range of API enpoints"
              rootClassName="list-item-with-icon-dark3-root-class-name17"
            ></ListItemWithIconDark3>
            <ListItemWithIconDark3
              text="Scan APIs that require endpoint authentication"
              rootClassName="list-item-with-icon-dark3-root-class-name18"
            ></ListItemWithIconDark3>
          </div>
          <h3 className="api-scanning-demo-lp-text3">
            Ready to speak to us about API scanning? Fill in the form to book
            your demo. 
          </h3>
        </div>
        <div className="api-scanning-demo-lp-container6">
          <span className="api-scanning-demo-lp-text4 Desktop-Heading4Light">
            Book a demo
          </span>
          <InputField
            placeholder="hggjgjgjgjg"
            rootClassName="input-field-root-class-name17"
          ></InputField>
          <InputField
            placeholder="Email"
            rootClassName="input-field-root-class-name22"
          ></InputField>
          <span className="api-scanning-demo-lp-text5 BodyLargeBold">
            Industry
          </span>
          <select autoComplete="off" className="api-scanning-demo-lp-select">
            <option value="Option 1">Option 1</option>
            <option value="Option 1">Accountancy</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 2">Advertising</option>
            <option value="Option 3">Aviation</option>
            <option value="Option 3">Option 3</option>
          </select>
          <PrimaryButtonDark rootClassName="primary-button-dark-root-class-name13"></PrimaryButtonDark>
        </div>
      </div>
      <QuotationEnt
        quote='"APIs are the biggest gap in our testing at the moment. We’ve done a small amount of scanning, but having a Burp API scan would be amazing"'
        source="A Burp Suite Enterprise Edition customer"
        rootClassName="quotation-ent-root-class-name"
      ></QuotationEnt>
    </div>
  )
}

export default APIScanningDemoLP
