import React from 'react';
import {
  Header,
  About,
  Project,
  Education,
  Contact,
  Footer,
} from './components';
import { projects, curses, contacts } from './data';

const App = () => (
  <>
    <Header />
    <main className="main-content">
      <About />
      <section className="portfolio" id="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </section>
      <article className="education">
        <h2 className="education__title">Профильное образование</h2>
        {curses.map(({ name, className, link }) => (
          <Education name={name} className={className} link={link} key={link} />
        ))}
      </article>
      <article className="contacts" id="contacts">
        <h2 className="contacts__title">Контакты:</h2>
        {contacts.map(({ name, className, link }) => (
          <Contact name={name} className={className} link={link} key={link} />
        ))}
      </article>
    </main>
    <Footer />
  </>
);

export default App;
