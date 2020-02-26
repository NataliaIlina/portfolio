import React from 'react';

const Education = ({ name, className, link }) => (
  <section className={`education__info ${className}`}>
    <a className="education__company" href="https://htmlacademy.ru">
      <span className="visually-hidden">HTML Academy</span>
    </a>
    <p className="education__intensive">
      Интенсивный онлайн‑курс &laquo;{name}
      &raquo;
    </p>
    <a className="education__link" href={link}>
      Посмотреть сертификат
    </a>
  </section>
);

export default Education;
