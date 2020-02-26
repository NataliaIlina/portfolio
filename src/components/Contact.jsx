import React from 'react';

const Contact = ({ name, className, link }) => (
  <a className={`contacts__link ${className}`} href={link}>
    <span className="visually-hidden">{name}</span>
  </a>
);

export default Contact;
