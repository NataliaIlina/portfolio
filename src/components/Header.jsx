import React from 'react';

var links = [
  {
    name: 'Обо мне',
    href: '#about',
  },
  {
    name: 'Портфолио',
    href: '#portfolio',
  },
  {
    name: 'Контакты',
    href: '#contacts',
  },
];

const Header = () => (
  <header className="header">
    <nav className="main-nav">
      <div className="main-nav__inner">
        {links.map(({ name, href }) => (
          <a key={href} className="main-nav__link" href={href}>
            {name}
          </a>
        ))}
      </div>
    </nav>
    <h1 className="header__title">
      Наталья Ильина<span>Junior Front-end Developer</span>
    </h1>
  </header>
);

export default Header;
