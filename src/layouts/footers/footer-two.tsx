import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/Park_IT_400x400_bg_transparent_withSlogan_txtDark.png";
import logo_2 from "@/assets/img/logo/Park_IT_400x400_bg_transparent_withSlogan_txtDark.png";
import { RightArrow } from "@/components/svg";
import contacts_data from "@/data/contacts-data";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false,topCls='footer-top' }: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${
          whiteFooter ? "tp-footer-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo_2} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                <div className="tp-footer-2-widget-text">
                  <p>
                    Drop us a line sed id semper <br /> risus in hend rerit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li> <a href="#">Blog</a></li>
                    <li><a href="#">Landing</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a
                        href="https://www.google.com/maps/@54.581385,-101.7562167,7.5z?entry=ttu"
                        target="_blank"
                    >
                              {contacts_data.map((contact) => {
                                return contact.locale_address
                              })}
                            </a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href={`tel:${contacts_data.map((contact) => {
                      return contact.phone_number
                    })}`}>
                              P: {contacts_data.map((contact) => {return contact.phone_number})}
                            </Link>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <Link href={`mailto:${contacts_data.map((contact) => {return contact.email_address})}`}>
                              E: {contacts_data.map((contact) => {return contact.email_address})}
                            </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Subscribe to our newsletter
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        <RightArrow clr={whiteFooter?"currentcolor":'#F3F3F4'}/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${
          whiteFooter ? "tp-copyright-white" : "black-bg"
        }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved — {new Date().getFullYear()} © &nbsp;
                  <Link href={`${contacts_data.map((contact) => {return contact.website_link})}`}>
                    {contacts_data.map((contact) => {return contact.company_name})}
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" href="#">Linkedin</a>
                <a className="mb-10" href="#">Twitter</a>
                <a className="mb-10" href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
