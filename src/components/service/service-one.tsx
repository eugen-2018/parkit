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
  {
    id: 1,
    title: "VIDEO CREATION",
    desc: "Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed.",
    icon: s_1,
  },
  {
    id: 2,
    title: "Brand & Corporate Identity",
    desc: "Internal culture, vision, values, and the way it interacts with the outside world. Identity is not the logo or colors; it is the way your brand presents itself and connects with the audience. In a competitive environment, a clear and coherent identity is essential for your business's success!",
    icon: s_2,
  },
  {
    id: 3,
    title: "UI/UX & Product Design",
    desc: "UI (User Interface) and UX (User Experience) are the fundamental pillars of any digital interaction. Whether it's a website, an app, or another digital product, a high-quality UI/UX design ensures an efficient, enjoyable, and action-oriented interaction between users and the brand.",
    icon: s_3,
  },
  {
    id: 4,
    title: "BRAND STRATEGY",
    desc: "Dolor magna eget est lorem ipsum dolor sit amet consectetur. Bibendum est ultricies integer quis auctor elit sed.",
    icon: s_4,
  },
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          {/* Left Section */}
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

          {/* Right Section */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((service) => (
                <div
                  key={service.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  {/* Icon */}
                  <div className="tp-service-icon">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      style={{ height: "auto", maxWidth: "60px" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="tp-service-content ms-3">
                    <h4 className="tp-service-title-sm">
                      <Link href="/service-details">
                        <span className="tp-btn-border tp-title-btn">
                          {service.title}
                        </span>
                      </Link>
                    </h4>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .tp-title-btn {
          display: inline-block;
          padding: 10px 20px;
          border: 2px solid #000;
          border-radius: 50px;
          font-size: 18px;
          text-align: center;
          font-weight: bold;
          color: #000;
          background-color: transparent;
          transition: all 0.3s ease;
        }

        .tp-title-btn:hover {
          background-color: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default ServiceOne;
