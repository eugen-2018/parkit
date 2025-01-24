import React from "react";
import Image from "next/image";
import Link from "next/link";

// service images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";
import s_4 from "@/assets/img/home-01/service/service-icon-4.png";

// service data
const service_data = [
  { id: 1, title: "VIDEO CREATION" },
  { id: 2, title: "ART DIRECTION" },
  { id: 3, title: "MOTION DESIGN" },
  { id: 4, title: "BRAND STRATEGY" },
];

const ServiceTitles = () => {
  const buttonStyles = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    margin: '10px',
  };

  const borderStyles = {
    display: 'inline-block',
    position: 'relative',
    textDecoration: 'none',
  };

  const wrapStyles = {
    display: 'block',
    position: 'relative',
    overflow: 'hidden',
  };

  const textStyles = {
    display: 'block',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#000',
    transition: 'transform 0.3s ease',
  };

  const hoverText1 = {
    transform: 'translateY(0)',
  };

  const hoverText2 = {
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translateY(100%)',
  };

  return (
    <div>
      {service_data.map(service => (
        <div key={service.id} style={buttonStyles}>
          <a style={borderStyles} href={`/service/${service.id}`}>
            <span style={wrapStyles}>
              <span style={{...textStyles, ...hoverText1}}>{service.title}</span>
              <span style={{...textStyles, ...hoverText2}}>{service.title}</span>
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceTitles;


const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <span className="tp-section-subtitle subtitle-position tp_fade_bottom">
                I Think a lot
              </span>
              <h4 className="tp-section-title tp_fade_bottom">
                Thoughtful
                <br />
                <span>Process</span>
              </h4>
            </div>
            <div className="tp-service-left-btn tp-btn-bounce">
              <Link className="tp-btn-border" href="/service">
                <span className="tp-btn-border-wrap">
                  <span className="text-1">See All Services</span>
                  <span className="text-2">See All Services</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s, i) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <Image src={s.icon} alt="icon" style={{ height: "auto" }} />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      <Link href="/service-details">{s.title}</Link>
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;
