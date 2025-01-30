'use client'; 
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "@/utils/title-animation";
import { useTranslations } from "next-intl";

import { Playfair } from 'next/font/google'

//👇 Configure our font object
const playFair = Playfair({
  subsets: ['latin'],
  display: 'swap',
  
})

const HeroBannerOne = () => {
  const t = useTranslations("hero"); // Assuming translations are under the "hero" namespace

  useGSAP(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        fadeAnimation();
      }, 100);
    }
  }, {});

  return (
    <div className="tp-hero-area tp-hero-ptb main-slider">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">
              <div className="tp-hero-shape-1">
                <Image
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                  width={790}
                  height={700}
                  style={{ height: "auto" }}
                />
              </div>
              <div className="tp-hero-title-box text-center p-relative">
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className={`p-relative ${playFair.className}`}>
                    {t("kraft")} {/* Translated "Creative" */}
                    <span className="tp-hero-subtitle d-none d-lg-block ">
                      {t("hello")} <br /> {t("people")}
                    </span>
                    <span className="tp-hero-shape-2 d-none d-md-block">
                      <Image
                        src="/assets/img/home-01/hero/hero-shape-1-1.png"
                        alt="shape"
                        width={40}
                        height={40}
                      />
                    </span>
                  </span>
                  <br />
                  {t("bring")} {/* Translated "Digital" */}
                  <span className="tp-hero-title-img">
                    <Image
                      className="tp-zoom-img"
                      src="/assets/img/home-01/hero/hero-1-1.png"
                      alt="hero-img"
                      width={270}
                      height={160}
                      style={{ height: "auto" }}
                    />
                  </span>
                  {t("vision")} {/* Translated "Company" */}
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp_fade_bottom">
              <p>
                <span></span>
                {t("description")} {/* Translated description */}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;
