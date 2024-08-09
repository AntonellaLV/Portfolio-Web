import React from "react";
import banner from '../assets/banner.png';

function Banner() {
  return (
    <section className="banner">
      <img src={banner} alt="Banner" className="banner-img" />
    </section>
  );
}

export default Banner;
