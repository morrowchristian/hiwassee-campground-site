// =========================================
// File: Hero.js
// Purpose: Reusable Hero component for all pages
// Dependencies: React, Hero.css, react-bootstrap (optional for Button)
// Props:
//  - title: main heading
//  - subtitle: descriptive text
//  - buttonText: text for CTA button
//  - buttonLink: href/link for CTA button
//  - imageSrc: URL or local path for hero image
// Notes:
//  - Fully responsive
//  - Supports custom content on any page
// =========================================

import React from "react";
import { Button } from "react-bootstrap";
import "./Hero.css";

export default function Hero({ title, subtitle, buttonText, buttonLink, imageSrc }) {
  return (
    <div className="hero">
      {/* Hero Text Section */}
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && buttonLink && (
          <Button href={buttonLink} variant="success">
            {buttonText}
          </Button>
        )}
      </div>

      {/* Hero Image Section */}
      <div className="hero-image">
        {imageSrc && <img src={imageSrc} alt={title} />}
      </div>
    </div>
  );
}
