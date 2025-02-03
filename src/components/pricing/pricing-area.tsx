"use client";

import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";
import { Libre_Bodoni } from "next/font/google";
import { useLocale, useTranslations } from "next-intl";

const librebodoni = Libre_Bodoni({
  subsets: ["latin"],
  display: "swap",
});

const pricing_data = [
  {
    id: 1,
    title: "standart",
    price: 26,
    titlefeatures: ["includedservices"],
    features: [
      "paneldevelopment",
      "individual",
      "pagecreation",
      "catalogintegration",
      "forumintegration",
      "contactintegration",
      "designdevelopment",
      "creationversion",
      "twolanguages",
      "emailcreation",
      "contentclient",
      "addition20products",
      "chatintegration",
      "GoogleAnalytics",
      "GoogleTagManager",
      "SEOsetup",
      "searchengines",
      "trainingstaff",
      "supportmodifications",
    ],
  },
  {
    id: 2,
    title: "medium",
    price: 46,
    titlefeatures: ["includedservices"],
    features: [
      "paneldevelopment",
      "individual",
      "pagecreation",
      "catalogintegration",
      "forumintegration",
      "contactintegration",
      "designdevelopment",
      "creationversion",
      "twolanguages",
      "emailcreation",
      "contentclient",
      "addition20products",
      "chatintegration",
      "GoogleAnalytics",
      "GoogleTagManager",
      "SEOsetup",
      "searchengines",
      "trainingstaff",
      "supportmodifications",
    ],
  },
  {
    id: 3,
    title: "pro",
    price: 96,
    titlefeatures: ["includedservices"],
    features: [
      "paneldevelopment",
      "catalogintegration",
      "banktransfer",
      "delivery",
      "voucher",
      "comparareproduse",
      "formularcontact",
      "designindividualizat",
      "creationversion",
      "twolanguages",
      "emailcreation",
      "contentclient",
      "addition20products",
      "chatintegration",
      "GoogleAnalytics",
      "GoogleTagManager",
      "SEOsetup",
      "searchengines",
      "30dayssupport",
      "trainingstaff",
    ],
  },
  {
    id: 4,
    title: "cms",
    features: [
      "wordpress",
      "wix",
      "squarespace",
      "shopify",
      "webflow",
      "joomla",
      "drupal",
      "magento",
      "weebly",
      "zyro",
      "bigcommerce",
      "siteground",
      "hubspot",
      "elementor",
      "ghost",
    ],
  },
  {
    id: 5,
    title: "crearechatboti",
    features: [
      "python",
      "js",
      "java",
      "node",
      "php",
      "ruby",
      "c#",
      "type",
      "rasa",
      "dialogflow",
      "lua",
      "go",
      "tensorflow",
      "lisp",
      "prolog",
    ],
  },
  {
    id: 6,
    title: "crearewebsite",
    features: [
      "html",
      "css",
      "js",
      "php",
      "python",
      "ruby",
      "type",
      "node",
      "java",
      "go",
      "c#",
      "swift",
      "kotlin",
      "dart",
      "SQL",
    ],
  },
];

export default function PricingArea({ theme = "light" }: { theme?: string }) {
  const t = useTranslations("pricing");

  return (
    <div className="tp-price-area">
      <div className="container">
        <div className="row">
          {pricing_data.map((item) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-md-6 mb-30 "
              style={{
                height: item.id === 2 ? 650 : "auto",
                flex: item.id === 2 ? "0 0 650" : "auto",
              }}
            >
              <div className={`tp-price-item`}>
                <div className="tp-price-head">
                  <h5
                    className={`${librebodoni.className}`}
                    style={{
                      color: theme === "dark" ? "white" : "black",
                      fontSize: item.id >= 4 && item.id <= 6 ? "20px" : "36px",
                      textAlign:
                        item.id >= 4 && item.id <= 6 ? "left" : "center",
                      whiteSpace:
                        item.id >= 4 && item.id <= 6 ? "nowrap" : "normal",
                    }}
                  >
                    {t(item.title)}
                  </h5>
                </div>
                {![4, 5, 6].includes(item.id) && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Link className={`tp-btn-black-md-price`} href="/contact">
                      Choose
                    </Link>
                  </div>
                )}
                {item.titlefeatures && (
                  <div
                    className="tp-price-features-title"
                    style={{ color: theme === "dark" ? "white" : "black" }}
                  >
                    <strong>
                      {item.titlefeatures
                        .map((feature) => t(feature))
                        .join(", ")}
                    </strong>
                  </div>
                )}
                <div className="tp-price-body">
                  <div className="tp-price-list">
                    <ul>
                      {item.features.map((l, i) => (
                        <li key={i}>
                          <i className="fa-sharp fa-light fa-check"></i>
                          {t(l)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {![4, 5, 6].includes(item.id) && (
                  <span
                    className="tp-price-monthly"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    €<i>{item.price}</i>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}