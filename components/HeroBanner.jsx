import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {

  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.brandLogo)}
          alt="laptops"
          className="hero-banner-logo"
        />
        <img
          src={urlFor(heroBanner.image)}
          alt="laptops"
          className="hero-banner-image"
        />
        <img
          src={urlFor(heroBanner.itemLogo)}
          alt="laptops"
          className="hero-banner-item"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
