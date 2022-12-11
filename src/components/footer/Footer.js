import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className='footer'>
      <article>
        <h5>Abstract</h5>
        <p>Branches</p>
      </article>
      <article>
        <h5>Resources</h5>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Release Notes</p>
        <p>Status</p>
      </article>
      <article>
        <h5>Community</h5>
        <p>Twitter</p>
        <p>LinkedIn</p>
        <p>Facebook</p>
        <p>Dribbble</p>
        <p>Podcast</p>
      </article>
      <article>
        <h5>Company</h5>
        <p>About Us</p>
        <p>Careers</p>
        <p>Legal</p>
        <h6>Contact Us</h6>
        <p>info@abstract.com</p>
      </article>
      <article className='footer__text-lg'>
        Logo
        <p>© Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </article>
    </section>
  );
};

export default Footer;
