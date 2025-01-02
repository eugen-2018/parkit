"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation } from "@/utils/title-animation";
import ContactForm from "@/components/form/contact-form";
import ContactLocationTwo from "@/components/contact/contact-location-2";

const ContactTwoMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* hero area start */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Liko Studio</span>
                        <h4 className="tm-hero-title-big tp-char-animation">
                          Get <br /> in touch
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              {/* contact area */}
              <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
                <div className="container container-1840">
                  <div className="cn-contactform-2-bg black-bg">
                    <div className="row">
                      <div className="col-xl-6">
                          <div className="cn-contactform-2-map">
                              <iframe
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.166901703004!2d28.844652875280545!3d47.017328828485155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3c8b58a813%3A0xf5b745949e34d594!2sBusiness%20Center%20FORUM!5e0!3m2!1sen!2s!4v1735292461675!5m2!1sen!2s"
                                  style={{border: 0}}
                                  allowFullScreen
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade">
                              </iframe>
                          </div>
                      </div>
                        <div className="col-xl-6">
                            <div className="cn-contactform-wrap">
                                <h4 className="cn-contactform-2-title">
                                    Send a Message
                                </h4>
                                <ContactForm btnCls="white-bg"/>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* contact area */}

              {/* about area start */}
               <div className="cn-contactform-support-area mb-120">
                  <div className="container">
                     <div className="row justify-content-center">
                        <div className="col-xl-10">
                           <div className="cn-contactform-support-bg d-flex align-items-center justify-content-center" style={{backgroundImage: "url(/assets/img/inner-contact/contact/contact-bg.png)"}}>
                              <div className="cn-contactform-support-text text-center">
                                 <span>Or, you can contact one of our studios
                                    directly below. We aim to respond
                                    within 24 hours.</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* about area end */}

              {/* contact location */}
              <ContactLocationTwo/>
              {/* contact location */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactTwoMain;
