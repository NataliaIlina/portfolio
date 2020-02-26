import React from 'react';

const About = () => (
  <section className="about" id="about">
    <h2 className="about__title">Обо мне</h2>
    <p className="about__description">
      Привет! Я&nbsp;&mdash; front-end разработчик уровня junior/middle, успешно
      законила программу интенсивов &laquo;Профессия Фронтенд-разработчик&raquo;
      от&nbsp;HTML Academy, а так же интенсивы &laquo;Профессиональный
      JavaScript, уровень 2&raquo; и &laquo;Профессиональный JavaScript, уровень
      3&raquo;. Опыт коммерческой разработки - 2 года.
    </p>
    <p className="about__description">
      В&nbsp;данный момент нахожусь в&nbsp;поиске интересных предложений для
      профессионального роста и&nbsp;развития в&nbsp;данной сфере.
    </p>
    <p className="about__description">
      Живу в&nbsp;г. Владимир, но готова к&nbsp;переезду в&nbsp;другой город.
    </p>
    <p className="about__description">Мои навыки:</p>
    <ul className="about__list">
      <li className="about__item">
        ReactJS&nbsp;&mdash; создание компонентов, использование готовых
        компонентов(Material-UI, Ant-Design), взаимодействие с сервером
        (Graph-QL), роутинг, работа с общим стейтом приложения и реализация
        логики работы приложения (Cerebral). Осваиваю Redux и TypeScript.
      </li>
      <li className="about__item">
        Верстка&nbsp;&mdash; в&nbsp;работе стремлюсь осваивать новые технологии,
        использую методологию БЭМ, CSS препроцессоры LESS/SASS,
        автоматизацию/сборку проекта на&nbsp;Gulp.
      </li>
      <li className="about__item">
        Git&nbsp;&mdash; опыт работы с&nbsp;системой контроля версий git
        с&nbsp;использованием консоли.
      </li>
      <li className="about__item">
        Photoshop, Figma&nbsp;&mdash; навыки работы, необходимые для верстки.
      </li>
      <li className="about__item">
        Английский язык&nbsp;&mdash; A2 - Pre-Intermediate, активно изучаю.
      </li>
      <li className="about__item">Опыт работы в команде из 20 человек.</li>
    </ul>
  </section>
);

export default About;
