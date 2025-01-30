"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/logo/Park_IT_400x400_bg_transparent_withSlogan_txtDark.png';
import { footerOneAnimation, footerTwoAnimation } from "@/utils/footer-anim";
import contacts_data from "@/data/contacts-data"
import {useGetMenuData} from "@/data/menu-data";

const footer_links = [
  { link: "/portfolio-details-1", title: "Projects" },
  { link: "/service", title: "What we do" },
  { link: "/about-us", title: "About" },
  { link: "/blog-modern", title: "Blog" },
  { link: "/contact", title: "Contact" },
];
export default function FooterOne() {
  const {menu_data} = useGetMenuData()
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  },[])
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-90">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <a href={item.link}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                  <Link href="/contact">
                    <h4 className="tp-footer-big-title footer-big-text">{"Let's"} Contact!</h4>
                            </Link>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <Link href={`mailto:${contacts_data.map((contact) => {return contact.email_address})}`}>
                              {contacts_data.map((contact) => {return contact.email_address})}
                            </Link>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <a
                              href="https://www.google.com/maps/@54.581385,-101.7562167,7.5z?entry=ttu"
                              target="_blank"
                            >
                              {contacts_data.map((contact) => {return contact.locale_address})}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Stalk us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <a href="#">Facebook</a>
                          </li>
                          <li className="tp_fade_bottom">
                            <a href="#">Instagram</a>
                          </li>
                          <li className="tp_fade_bottom">
                            <a href="#">Behance</a>
                          </li>
                          <li className="tp_fade_bottom">
                            <a href="#">Dribbble</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-6 col-md-4">
                <div className="tp-copyright-logo text-center text-md-start">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-8">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    Copyright © {new Date().getFullYear()} &nbsp;
                    <Link href={`${contacts_data.map((contact) => {return contact.website_link})}`}>
                    {contacts_data.map((contact) => {return contact.company_name})}
                  </Link>
                    . All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer>
  );
}
