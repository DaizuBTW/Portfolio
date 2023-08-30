let rus = {
    home: 'Главная',
    abilities_btn: 'Умения',
    abilities: 'Профессиональные Умения',
    abilities_h3: 'Краткий список моих навыков',
    abilities_1: 'Специализируюсь на веб-приложениях.',
    abilities_2: 'Делаю веб-приложения, использующие Java, HTML5, CSS3, JavaScript.',
    abilities_3: 'Способен быстро осваивать новые технологии.' ,
    abilities_4: 'Отличные коммуникативные навыки и умение решать проблемы.' ,
    skills_btn: 'Навыки',
    skills: 'Технические навыки',
    skills_h3: 'Технологии которые я использую',
    skills_1: '<b>Языки программирования:</b> Java, HTML, CSS, JavaScript.',
    skills_2: '<b>Технолоии:</b> Spring, Hibernate, XML/XSD, Tomcat, MySQL, Maven.',
    skills_3: '<b>Среды разработки и инструменты:</b> IntelliJ IDEA, Eclipse, Visual Studio Code.',
    skills_4: '<b>Системы контроля версий:</b> Git.',
    skills_5: '<b>OS:</b> Windows.',
    services: 'Услуги',
    portfolio: 'Портфолио',
    contact: 'Контакты',
    hello: 'Привет, я Данила Сельванович',
    dev: 'Backend Java Разработчик',
    lorem: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
};
  
  let eng = {
    home: 'Home',
    abilities_btn: 'Abilities',
    abilities: 'Professional abilities',
    abilities_h3: 'A short list of my skills',
    abilities_1: 'Specialized on web applications.' ,
    abilities_2: 'I make web applications using Java, HTML5, CSS3, JavaScript.',
    abilities_3: 'Able to learn new technologies rapidly.' ,
    abilities_4: 'Excellent communication and problem-solving skills.' ,
    skills: 'Technical skills',
    skills_h3: 'The technologies I use',
    skills_1: '<b>Programming languages:</b> Java, HTML, CSS, JavaScript.',
    skills_2: '<b>Techonlogies:</b> Spring, Hibernate, XML/XSD, Tomcat, MySQL, Maven.',
    skills_3: '<b>Development Environments and Tools:</b> IntelliJ IDEA, Eclipse, Visual Studio Code.',
    skills_4: '<b>Revision control Systems:</b> Git.',
    skills_5: '<b>OS:</b> Windows.',

    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    hello: 'Hi, i\'m Danila Selvanovich',
    dev: 'Backend Java Developer',
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores animi nulla maxime praesentium, aut iure, in neque nobis non odio labore, iste nostrum cumque alias pariatur. Provident et repellendus incidunt!'
};
  
  changeLagnuage();
  
  function changeLagnuage(){
    let language = lang.checked ? rus : eng;
    let height = lang.checked ? '60vh' : '35vh';
    document.querySelectorAll('[text]').forEach(el => {
      el.innerHTML = language[el.getAttribute('text')];
    })
    document.getElementsByClassName('block').style.height = height;
    //document.getElementById('block').style.height = height;
  }