import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderDark from '../components/header-dark'
import HeroBannerDark from '../components/hero-banner-dark'
import StarRatingWhite from '../components/star-rating-white'
import IconCalloutSetOf3 from '../components/icon-callout-set-of-3'
import HeaderFullWidthImage from '../components/header-full-width-image'
import AccordionBlue from '../components/accordion-blue'
import AccordionWhite from '../components/accordion-white'
import QuotationPro from '../components/quotation-pro'
import CardHorizontal from '../components/card-horizontal'
import HeadshotSetOf3 from '../components/headshot-set-of-3'
import CardPortrait from '../components/card-portrait'
import PrimaryButtonDark from '../components/primary-button-dark'
import './sample-landing-page-pro.css'

const SampleLandingPagePro = (props) => {
  return (
    <div className="sample-landing-page-pro-container">
      <Helmet>
        <title>Sample-Landing-page-Pro - Portswigger website</title>
        <meta
          property="og:title"
          content="Sample-Landing-page-Pro - Portswigger website"
        />
      </Helmet>
      <div className="sample-landing-page-pro-container01">
        <HeaderDark rootClassName="header-dark-root-class-name"></HeaderDark>
        <HeroBannerDark
          copy="Hands-on security testers need the best tools for the job.\u2028Tools you have faith in, and enjoy using all day long. The tools that other professionals trust."
          heading1="Test like a Pro."
          buttontext="Try"
          rootClassName="hero-banner-dark-root-class-name"
        ></HeroBannerDark>
        <div className="sample-landing-page-pro-container02">
          <StarRatingWhite
            quote="“Burp Suite turns our web security testing into a comprehensive, seamless process”"
            rootClassName="star-rating-white-root-class-name18"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“SaaS model and AI integration mark a thrilling evolution for our security”"
            rootClassName="star-rating-white-root-class-name20"
          ></StarRatingWhite>
          <StarRatingWhite
            quote="“Burp's automated scanning gives us confidence in our app's security posture”"
            rootClassName="star-rating-white-root-class-name19"
          ></StarRatingWhite>
        </div>
      </div>
      <h1 className="sample-landing-page-pro-text Desktop-Heading1">
        Find out why 97% of users recommend Burp Suite Professional
      </h1>
      <div className="sample-landing-page-pro-container03">
        <IconCalloutSetOf3
          heading="Find more vulnerabilities faster"
          linktext="Read more"
          rootClassName="icon-callout-set-of3-root-class-name6"
        ></IconCalloutSetOf3>
        <IconCalloutSetOf3
          icon="/professional%20app.svg"
          heading="Test like a pro - with the industry's trusted toolkit"
          linktext="Read more"
          rootClassName="icon-callout-set-of3-root-class-name7"
        ></IconCalloutSetOf3>
        <IconCalloutSetOf3
          icon="/rocket.svg"
          heading="Extend your capabilities"
          linktext="Read more"
          rootClassName="icon-callout-set-of3-root-class-name8"
        ></IconCalloutSetOf3>
      </div>
      <HeaderFullWidthImage
        heading="Take a tour of Burp Suite Professional"
        rootClassName="header-full-width-image-root-class-name"
      ></HeaderFullWidthImage>
      <h1 className="sample-landing-page-pro-text1 Desktop-Heading1">
        Find more vulnerabilities, faster
      </h1>
      <div className="sample-landing-page-pro-container04">
        <div className="sample-landing-page-pro-container05">
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Automate and save time"
            rootClassName="accordion-blue-root-class-name9"
          ></AccordionBlue>
          <AccordionBlue
            content="Smart automation works in concert with expert-designed manual tools, to save you time. Optimize your workflow, and do more of what you do best."
            titletext="Scan the modern web"
            rootClassName="accordion-blue-root-class-name10"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Minimise false positives"
            rootClassName="accordion-blue-root-class-name11"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/product-eg-img2-500h.png"
          className="sample-landing-page-pro-image"
        />
      </div>
      <div className="sample-landing-page-pro-container06">
        <h1 className="sample-landing-page-pro-text2 Desktop-Heading1">
          Test like a pro - with the industry&apos;s trusted toolkit
        </h1>
        <div className="sample-landing-page-pro-container07">
          <img
            alt="image"
            src="/product-eg-img-400h.png"
            className="sample-landing-page-pro-image1"
          />
          <div className="sample-landing-page-pro-container08">
            <AccordionWhite
              rootClassName="accordion-white-root-class-name3"
              accordiontitle="dsdfsmdbnsdf"
              accordioncontent="sjhsfjsfgsdjhfgs"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name5"
              accordiontitle="Be more productive"
            ></AccordionWhite>
            <AccordionWhite
              rootClassName="accordion-white-root-class-name4"
              accordiontitle="Share your findings more easily"
            ></AccordionWhite>
          </div>
        </div>
      </div>
      <h1 className="sample-landing-page-pro-text3 Desktop-Heading1">
        Extend your capabilities
      </h1>
      <div className="sample-landing-page-pro-container09">
        <div className="sample-landing-page-pro-container10">
          <AccordionBlue
            titletext="Adapt your toolkit to suit your needs"
            rootClassName="accordion-blue-root-class-name12"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Create your own functionality"
            rootClassName="accordion-blue-root-class-name13"
          ></AccordionBlue>
          <AccordionBlue
            titletext="Customize the way you work"
            rootClassName="accordion-blue-root-class-name14"
          ></AccordionBlue>
        </div>
        <img
          alt="image"
          src="/capabilities-600w.png"
          className="sample-landing-page-pro-image2"
        />
      </div>
      <QuotationPro rootClassName="quotation-pro-root-class-name"></QuotationPro>
      <CardHorizontal
        heading="Get Burp Suite certified"
        bodycopy="Prove your ability to detect and exploit common web vulnerabilities, with the security testing software used by more than 70,000 security professionals worldwide."
        rootClassName="card-horizontal-root-class-name"
      ></CardHorizontal>
      <div className="sample-landing-page-pro-container11">
        <h1 className="sample-landing-page-pro-text4 Desktop-Heading1">
          Join the Burp Suite community
        </h1>
        <div className="sample-landing-page-pro-container12">
          <img
            alt="image"
            src="/linkedin.svg"
            className="sample-landing-page-pro-image3"
          />
          <img
            alt="image"
            src="/twitter-x.svg"
            className="sample-landing-page-pro-image4"
          />
          <img
            alt="image"
            src="/youtube.svg"
            className="sample-landing-page-pro-image5"
          />
        </div>
      </div>
      <div className="sample-landing-page-pro-container13">
        <HeadshotSetOf3
          heading="Interview with Corey Ball - API security expert"
          linktext="Read more"
          rootClassName="headshot-set-of3-root-class-name"
        ></HeadshotSetOf3>
        <HeadshotSetOf3
          heading="Web Security Academy Hall of Fame: Johnny Villarreal"
          imageSrc="/johnny-villarreal-200w.png"
          linktext="Read more"
          rootClassName="headshot-set-of3-root-class-name2"
        ></HeadshotSetOf3>
        <HeadshotSetOf3
          heading="Katie Paxton-Fear on her bug bounty baptism and AI"
          imageSrc="/katie-pf-200w.png"
          linktext="Read more"
          rootClassName="headshot-set-of3-root-class-name1"
        ></HeadshotSetOf3>
      </div>
      <div className="sample-landing-page-pro-container14">
        <h1 className="sample-landing-page-pro-text5 Desktop-Heading1">
          Get the most from Burp Suite Professional
        </h1>
        <div className="sample-landing-page-pro-container15">
          <CardPortrait rootClassName="card-portrait-root-class-name5"></CardPortrait>
          <CardPortrait
            text="Seven killer features of Burp Suite Professional that help its users to test smarter - not harder."
            heading="Discover powerful features"
            imageSrc="/card-image-example2-300h.png"
            rootClassName="card-portrait-root-class-name6"
          ></CardPortrait>
          <CardPortrait
            text="Burp Suite Professional is always evolving. Discover what you can expect over the next 12 months."
            heading="Product roadmap"
            imageSrc="/card-image-example3-300h.png"
            rootClassName="card-portrait-root-class-name7"
          ></CardPortrait>
        </div>
        <div className="sample-landing-page-pro-container16">
          <CardPortrait
            text="Speak to an expert, ask a question in the Burp Suite User Forum, or see full product documentation."
            heading="Need support?"
            rootClassName="card-portrait-root-class-name8"
          ></CardPortrait>
          <CardPortrait
            text="Find out how Burp Scanner's capabilities support you when working with the growing complexity of the modern web."
            heading="Work with Burp Scanner"
            rootClassName="card-portrait-root-class-name9"
          ></CardPortrait>
        </div>
      </div>
      <img
        alt="image"
        src="/professional%20app.svg"
        className="sample-landing-page-pro-image6"
      />
      <h1 className="sample-landing-page-pro-text6 Desktop-Heading1">
        Ready to request a demo?
      </h1>
      <span className="sample-landing-page-pro-text7">
        Experience the leading toolkit for web security testing
      </span>
      <PrimaryButtonDark rootClassName="primary-button-dark-root-class-name12"></PrimaryButtonDark>
    </div>
  )
}

export default SampleLandingPagePro
