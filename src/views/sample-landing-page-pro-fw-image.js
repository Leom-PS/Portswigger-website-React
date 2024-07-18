import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderDark from '../components/header-dark'
import SecondaryButtonDark from '../components/secondary-button-dark'
import PrimaryButtonLight from '../components/primary-button-light'
import ClientLogos from '../components/client-logos'
import IconCalloutSetOf3 from '../components/icon-callout-set-of-3'
import HeaderFullWidthImage from '../components/header-full-width-image'
import AccordionBlue from '../components/accordion-blue'
import AccordionWhite from '../components/accordion-white'
import QuotationPro from '../components/quotation-pro'
import CardHorizontal from '../components/card-horizontal'
import HeadshotSetOf3 from '../components/headshot-set-of-3'
import CardPortrait from '../components/card-portrait'
import PrimaryButtonDark from '../components/primary-button-dark'
import './sample-landing-page-pro-fw-image.css'

const SampleLandingPageProFWImage = (props) => {
  return (
    <div className="sample-landing-page-pro-fw-image-container">
      <Helmet>
        <title>Sample-Landing-page-Pro-FW-image - Portswigger website</title>
        <meta
          property="og:title"
          content="Sample-Landing-page-Pro-FW-image - Portswigger website"
        />
      </Helmet>
      <div className="sample-landing-page-pro-fw-image-container01">
        <HeaderDark rootClassName="header-dark-root-class-name3"></HeaderDark>
        <div className="sample-landing-page-pro-fw-image-container02">
          <h1 className="sample-landing-page-pro-fw-image-text">
            <span className="Desktop-Display1">
              Test like a
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="sample-landing-page-pro-fw-image-text02">
              Pro.
            </span>
          </h1>
          <h1 className="sample-landing-page-pro-fw-image-text03 Desktop-Heading4Light">
            Hands-on security testers need the best tools for the job. Tools you
            have faith in, and enjoy using all day long. The tools that other
            professionals trust.
          </h1>
          <div className="sample-landing-page-pro-fw-image-container03">
            <SecondaryButtonDark rootClassName="secondary-button-dark-root-class-name2"></SecondaryButtonDark>
            <PrimaryButtonLight rootClassName="primary-button-light-root-class-name"></PrimaryButtonLight>
          </div>
        </div>
        <img
          alt="image"
          src="/pro_project_menu-700h.png"
          className="sample-landing-page-pro-fw-image-image"
        />
        <ClientLogos rootClassName="client-logos-root-class-name"></ClientLogos>
      </div>
      <h1 className="sample-landing-page-pro-fw-image-text04 Desktop-Heading1">
        Find out why 97% of users recommend Burp Suite Professional
      </h1>
      <div className="sample-landing-page-pro-fw-image-container04">
        <IconCalloutSetOf3
          heading="Find more vulnerabilities faster"
          linktext="Read more"
          rootClassName="icon-callout-set-of3-root-class-name"
        ></IconCalloutSetOf3>
        <IconCalloutSetOf3
          icon="/professional%20app.svg"
          heading="Test like a pro with the industry's trusted toolkit"
          linktext="Read more"
          rootClassName="icon-callout-set-of3-root-class-name1"
        ></IconCalloutSetOf3>
        <IconCalloutSetOf3
          icon="/rocket.svg"
          heading="Extend your capabilities"
          linktext="Read more"
          rootClassName="icon-callout-set-of3-root-class-name2"
        ></IconCalloutSetOf3>
      </div>
      <HeaderFullWidthImage
        heading="Take a tour of Burp Suite Professional"
        rootClassName="header-full-width-image-root-class-name2"
      ></HeaderFullWidthImage>
      <h1 className="sample-landing-page-pro-fw-image-text05 Desktop-Heading1">
        Find more vulnerabilities, faster
      </h1>
      <div className="sample-landing-page-pro-fw-image-container05">
        <div className="sample-landing-page-pro-fw-image-container06">
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Automate and save time"
            rootClassName="accordion-blue-root-class-name21"
          ></AccordionBlue>
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Scan the modern web"
            rootClassName="accordion-blue-root-class-name22"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Minimise false positives"
            rootClassName="accordion-blue-root-class-name23"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/product-eg-img2-500h.png"
          className="sample-landing-page-pro-fw-image-image1"
        />
      </div>
      <div className="sample-landing-page-pro-fw-image-container07">
        <h1 className="sample-landing-page-pro-fw-image-text06 Desktop-Heading1">
          Test like a pro - with the industry&apos;s trusted toolkit
        </h1>
        <div className="sample-landing-page-pro-fw-image-container08">
          <img
            alt="image"
            src="/product-eg-img-400h.png"
            className="sample-landing-page-pro-fw-image-image2"
          />
          <div className="sample-landing-page-pro-fw-image-container09">
            <AccordionWhite
              rootClassName="accordion-white-root-class-name9"
              accordiontitle="Find vulnerabilities others can't"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name10"
              accordiontitle="Be more productive"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name11"
              accordiontitle="Share your findings more easily"
            ></AccordionWhite>
          </div>
        </div>
      </div>
      <h1 className="sample-landing-page-pro-fw-image-text07 Desktop-Heading1">
        Extend your capabilities
      </h1>
      <div className="sample-landing-page-pro-fw-image-container10">
        <div className="sample-landing-page-pro-fw-image-container11">
          <AccordionBlue
            titletext="Adapt your toolkit to suit your needs"
            rootClassName="accordion-blue-root-class-name24"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Create your own functionality"
            rootClassName="accordion-blue-root-class-name25"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Customize the way you work"
            rootClassName="accordion-blue-root-class-name26"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/capabilities-600w.png"
          className="sample-landing-page-pro-fw-image-image3"
        />
      </div>
      <QuotationPro rootClassName="quotation-pro-root-class-name1"></QuotationPro>
      <CardHorizontal
        heading="Get Burp Suite certified"
        bodycopy="Prove your ability to detect and exploit common web vulnerabilities, with the security testing software used by more than 70,000 security professionals worldwide."
        rootClassName="card-horizontal-root-class-name1"
      ></CardHorizontal>
      <div className="sample-landing-page-pro-fw-image-container12">
        <h1 className="sample-landing-page-pro-fw-image-text08 Desktop-Heading1">
          Join the Burp Suite community
        </h1>
        <div className="sample-landing-page-pro-fw-image-container13">
          <img
            alt="image"
            src="/linkedin.svg"
            className="sample-landing-page-pro-fw-image-image4"
          />
          <img
            alt="image"
            src="/twitter-x.svg"
            className="sample-landing-page-pro-fw-image-image5"
          />
          <img
            alt="image"
            src="/youtube.svg"
            className="sample-landing-page-pro-fw-image-image6"
          />
        </div>
      </div>
      <div className="sample-landing-page-pro-fw-image-container14">
        <HeadshotSetOf3
          heading="Interview with Corey Ball - API security expert"
          linktext="Read more"
          rootClassName="headshot-set-of3-root-class-name3"
        ></HeadshotSetOf3>
        <HeadshotSetOf3
          heading="Web Security Academy Hall of Fame: Johnny Villarreal"
          imageSrc="/johnny-villarreal-200w.png"
          linktext="Read more"
          rootClassName="headshot-set-of3-root-class-name4"
        ></HeadshotSetOf3>
        <HeadshotSetOf3
          heading="Katie Paxton-Fear on her bug bounty baptism and AI"
          imageSrc="/katie-pf-200w.png"
          linktext="Read more"
          rootClassName="headshot-set-of3-root-class-name5"
        ></HeadshotSetOf3>
      </div>
      <div className="sample-landing-page-pro-fw-image-container15">
        <h1 className="sample-landing-page-pro-fw-image-text09 Desktop-Heading1">
          Get the most from Burp Suite Professional
        </h1>
        <div className="sample-landing-page-pro-fw-image-container16">
          <CardPortrait rootClassName="card-portrait-root-class-name"></CardPortrait>
          <CardPortrait
            text="Seven killer features of Burp Suite Professional that help its users to test smarter - not harder."
            heading="Discover powerful features"
            imageSrc="/card-image-example2-300h.png"
            rootClassName="card-portrait-root-class-name2"
          ></CardPortrait>
          <CardPortrait
            text="Burp Suite Professional is always evolving. Discover what you can expect over the next 12 months."
            heading="Product roadmap"
            imageSrc="/card-image-example3-300h.png"
            rootClassName="card-portrait-root-class-name1"
          ></CardPortrait>
        </div>
        <div className="sample-landing-page-pro-fw-image-container17">
          <CardPortrait
            text="Speak to an expert, ask a question in the Burp Suite User Forum, or see full product documentation."
            heading="Need support?"
            rootClassName="card-portrait-root-class-name3"
          ></CardPortrait>
          <CardPortrait
            text="Find out how Burp Scanner's capabilities support you when working with the growing complexity of the modern web."
            heading="Work with Burp Scanner"
            rootClassName="card-portrait-root-class-name4"
          ></CardPortrait>
        </div>
      </div>
      <img
        alt="image"
        src="/professional%20app.svg"
        className="sample-landing-page-pro-fw-image-image7"
      />
      <h1 className="sample-landing-page-pro-fw-image-text10 Desktop-Heading1">
        Ready to request a demo?
      </h1>
      <span className="sample-landing-page-pro-fw-image-text11">
        Experience the leading toolkit for web security testing
      </span>
      <PrimaryButtonDark rootClassName="primary-button-dark-root-class-name11"></PrimaryButtonDark>
    </div>
  )
}

export default SampleLandingPageProFWImage
