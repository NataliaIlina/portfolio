import keksobooking from './img/keksobooking.jpg';
import kekstagram from './img/kekstagram.jpg';
import mishka from './img/mishka.jpg';
import device from './img/device.jpg';
import sixCities from './img/sixCities.jpg';
import pixelHunter from './img/pixel-perfect.jpg';

export const projects = [
  {
    name: 'six-cities',
    features: [
      'React',
      'React-router-dom',
      'Redux',
      'Redux-thunk',
      'TypeScript',
    ],
    intensive: 'react',
    intensiveTitle: 'Профессиональный JavaScript, уровень 3',
    projectLink: 'https://nataliailina.github.io/six-cities',
    image: sixCities,
    repoLink: 'https://github.com/NataliaIlina/six-cities',
  },
  {
    name: 'pixel-hunter',
    features: ['ES6', 'Templates', 'ESLint'],
    intensiveTitle: 'Профессиональный JavaScript, уровень 2',
    projectLink: 'https://nataliailina.github.io/38944-pixel-hunter/',
    image: pixelHunter,
    intensive: 'ecmascript',
    repoLink: 'https://github.com/NataliaIlina/38944-pixel-hunter',
  },
  {
    name: 'keksobooking',
    features: [
      'ES5',
      'Ajax',
      "Drag'n'Drop",
      'Templates',
      'Accessibility',
      'Validation',
      'ESLint',
    ],
    intensive: 'javascript',
    intensiveTitle: 'Профессиональный JavaScript, уровень 1',
    projectLink: 'https://nataliailina.github.io/38944-keksobooking',
    image: keksobooking,
    repoLink: 'https://github.com/nataliailina/38944-keksobooking',
  },
  {
    name: 'kekstagram',
    features: [
      'ES5',
      'Ajax',
      "Drag'n'Drop",
      'Templates',
      'Accessibility',
      'Validation',
      'ESLint',
    ],
    intensive: 'javascript',
    intensiveTitle: 'Профессиональный JavaScript, уровень 1',
    projectLink: 'https://nataliailina.github.io/38944-kekstagram',
    image: kekstagram,
    repoLink: 'https://github.com/nataliailina/38944-kekstagram',
  },
  {
    name: 'mishka',
    protect: true,
    features: [
      'HTML5',
      'CSS3',
      'Adaptive layout',
      'БЭМ',
      'Flex-box',
      'Accessibility',
      'Less',
      'Gulp',
      'WebP',
      'SVG',
      'Retina',
      'StyleLint',
      'Pixel-perfect',
    ],
    intensive: 'adaptive',
    intensiveTitle: 'Профессиональный HTML и CSS, уровень 2',
    projectLink: 'https://nataliailina.github.io/38944-mishka',
    image: mishka,
    repoLink: 'https://github.com/nataliailina/38944-mishka',
  },
  {
    name: 'device',
    protect: true,
    features: [
      'HTML5',
      'CSS3',
      'БЭМ',
      'Flex-box',
      'Accessibility',
      'Less',
      'Gulp',
      'SVG',
      'Pixel-perfect',
    ],
    intensive: 'htmlcss',
    intensiveTitle: 'Профессиональный HTML и CSS, уровень 1',
    projectLink: 'https://nataliailina.github.io/38944-device',
    image: device,
    repoLink: 'https://github.com/nataliailina/38944-device',
  },
];

export const curses = [
  {
    className: 'education__info--html',
    name: 'Профессиональный HTML и CSS, уровень 1',
    link: 'https://assets.htmlacademy.ru/certificates/intensive/43/38944.pdf',
  },
  {
    className: 'education__info--adaptive',
    name: 'Профессиональный HTML и CSS, уровень 2',
    link: 'https://assets.htmlacademy.ru/certificates/intensive/47/38944.pdf',
  },
  {
    className: 'education__info--javascript',
    name: 'Профессиональный JavaScript, уровень 1',
    link: 'https://assets.htmlacademy.ru/certificates/intensive/55/38944.pdf',
  },
  {
    className: 'education__info--ecmascript',
    name: 'Профессиональный JavaScript, уровень 2',
    link: 'https://assets.htmlacademy.ru/certificates/intensive/69/38944.pdf',
  },
  {
    className: 'education__info--react',
    name: 'Профессиональный JavaScript, уровень 3',
    link: 'https://assets.htmlacademy.ru/certificates/intensive/133/38944.pdf',
  },
];

export const contacts = [
  {
    className: 'contacts__link--skype',
    name: 'Skype',
    link: 'skype:ellianta-21?chat',
  },
  {
    className: 'contacts__link--github',
    name: 'github',
    link: 'https://github.com/NataliaIlina',
  },
  {
    className: 'contacts__link--mail',
    name: 'e-mail',
    link: 'mailto:ilina.ns@yandex.ru',
  },
];
