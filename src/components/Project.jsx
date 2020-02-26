import React from 'react';

const Project = ({
  project: {
    name,
    intensive,
    intensiveTitle,
    projectLink,
    image,
    features,
    repoLink,
  },
}) => (
  <article className="project">
    <a className="project__image-link" href={projectLink}>
      <img src={image} alt={name} />
    </a>
    <div className="project__info">
      <h3 className="project__title">
        Проект
        <span className="project__name"> &laquo;{name}&raquo;</span>,
        выполненный на учебном курсе
        <br />
        <a href={`https://htmlacademy.ru/intensive/${intensive}`}>
          &laquo;{intensiveTitle}&raquo;{' '}
        </a>
        в HTML Academy
      </h3>
      <ul className="project__features">
        {features.map((feature) => (
          <li key={feature} className="project__feature">
            {feature}
          </li>
        ))}
      </ul>
      <a className="project__link" href={projectLink}>
        Ссылка на опубликованный сайт
      </a>
      <a className="project__link" href={repoLink}>
        Ссылка на репозиторий проекта в Github
      </a>
    </div>
  </article>
);

export default Project;
