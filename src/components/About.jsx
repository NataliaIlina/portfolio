import React from 'react';

const About = () => (
  <section className="about" id="about">
    <h2 className="about__title">Обо мне</h2>
    <p className="about__description">
      Привет! Я&nbsp;&mdash; начинающий front-end разработчик, успешно законила
      программу интенсивов &laquo;Профессия Фронтенд-разработчик&raquo;
      от&nbsp;HTML Academy. В&nbsp;данный момент живу в&nbsp;г. Владимир
      и&nbsp;нахожусь в&nbsp;поиске интересных предложений для профессионального
      роста и&nbsp;развития в&nbsp;данной сфере. Готова к&nbsp;переезду
      в&nbsp;другой город.
    </p>
    <p className="about__description">Мои навыки:</p>
    <ul className="about__list">
      <li className="about__item">
        Верстка&nbsp;&mdash; являюсь сторонником красиво написанного кода как
        с&nbsp;точки зрения оформления, так и&nbsp;с&nbsp;точки зрения
        семантики. В&nbsp;работе стремлюсь осваивать новые технологии, использую
        методологию БЭМ, CSS препроцессоры LESS/SASS, HTML препроцессор Pug
        (Jade), автоматизацию/сборку проекта на&nbsp;Gulp.
      </li>
      <li className="about__item">
        JavaScript&nbsp;&mdash; умею оживлять веб-страницы на&nbsp;ES5,
        стремлюсь искать оптимальные и&nbsp;лаконичные решения.
      </li>
      <li className="about__item">
        Git&nbsp;&mdash; опыт работы с&nbsp;системой контроля версий git
        с&nbsp;использованием консоли.
      </li>
      <li className="about__item">
        Photoshop&nbsp;&mdash; навыки работы, необходимые для верстки.
      </li>
    </ul>
  </section>
);

export default About;
