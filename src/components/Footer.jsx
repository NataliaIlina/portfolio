import React from 'react';
import Contact from './Contact';
import { contacts } from '../data';

const Footer = () => (
  <footer className="footer">
    <article className="contacts" id="contacts">
      {contacts.map(({ name, className, link }) => (
        <Contact name={name} className={className} link={link} key={link} />
      ))}
    </article>
    <p className="footer__copyright">
      &copy;{new Date().getFullYear()} Наталья Ильина
    </p>
  </footer>
);

export default Footer;
