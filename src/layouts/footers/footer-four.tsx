import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo/Park_IT_400x400_bg_transparent_withSlogan_txtDark.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';
import contacts_data from "@/data/contacts-data";

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Landing</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                  We speak the language <br/> of your business!
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()}
                    <Link href={`${contacts_data.map((contact) => {return contact.website_link})}`}>
                      {contacts_data.map((contact) => {return contact.company_name})}
                    </Link>
                    <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
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
                    <span>P: <Link href={`tel:${contacts_data.map((contact) => {
                      return contact.phone_number
                    })}`}>
                              {contacts_data.map((contact) => {return contact.phone_number})}
                            </Link></span>
                    <span>E:
                    <Link href={`mailto:${contacts_data.map((contact) => {
                      return contact.email_address
                    })}`}>
                              {contacts_data.map((contact) => {return contact.email_address})}
                            </Link>
                    </span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
