document.addEventListener("DOMContentLoaded", function(event) { 
  /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
  var widthWind = document.querySelector('body').offsetWidth;
  const element1 = document.querySelector('body');
  const element2 = document.querySelector('.header');
  const home = document.querySelector('.home');
  if (widthWind <= 920) {
    element1.style.padding = '0 5%';
    element2.style.padding = '20px 5%';
    home.style.height = '313px';
  }
});





let rus = {
    home: 'Главная',
    home_text: 'Мне 22 года, живу в Республике Беларусь (г. Минск). Самостоятельно изучал программирование ещё со школьных лет, и около года назад я начал профессиональное обучение языку Java. Сейчас, помимо Английского языка, начинаю изучать Польский. Надеюсь на сотрудничество с вами!',
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
    portfolio_h3: 'Мои проекты <i class=\'bx bxl-github\'></i>',
    contacts: 'Контакты',
    hello: 'Привет, я Данила Сельванович',
    dev: 'Backend Java Разработчик',
    lorem: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
};
  
  let eng = {
    home: 'Home',
    home_text: 'I am 22 years old, I live in the Republic of Belarus (Minsk). I have been studying programming on my own since school years, and about a year ago I started professional training in the Java language. Now, in addition to English, I\'m starting to learn Polish. I hope to cooperate with you!',
    abilities_btn: 'Abilities',
    abilities: 'Professional abilities',
    abilities_h3: 'A short list of my skills',
    abilities_1: 'Specialized on web applications.' ,
    abilities_2: 'I make web applications using Java, HTML5, CSS3, JavaScript.',
    abilities_3: 'Able to learn new technologies rapidly.' ,
    abilities_4: 'Excellent communication and problem-solving skills.' ,
    skills_btn: 'Skills',
    skills: 'Technical skills',
    skills_h3: 'The technologies I use',
    skills_1: '<b>Programming languages:</b> Java, HTML, CSS, JavaScript.',
    skills_2: '<b>Techonlogies:</b> Spring, Hibernate, XML/XSD, Tomcat, MySQL, Maven.',
    skills_3: '<b>Development Environments and Tools:</b> IntelliJ IDEA, Eclipse, Visual Studio Code.',
    skills_4: '<b>Revision control Systems:</b> Git.',
    skills_5: '<b>OS:</b> Windows.',

    services: 'Services',
    portfolio: 'Portfolio',
    portfolio_h3: 'My projects <i class=\'bx bxl-github\'></i>',
    contacts: 'Contacts',
    hello: 'Hi, i\'m Danila Selvanovich',
    dev: 'Backend Java Developer',
    lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores animi nulla maxime praesentium, aut iure, in neque nobis non odio labore, iste nostrum cumque alias pariatur. Provident et repellendus incidunt!'
};
  
  changeLagnuage();

  
  
  function changeLagnuage(){
    let language = lang.checked ? rus : eng;
    var widthWind = document.querySelector('body').offsetWidth;
    const home = document.querySelector('.home');
    const about = document.querySelector('.about');
    if (widthWind <= 920) {
      home.style.height = lang.checked ? '361px' : '313px';
      about.style.height = lang.checked ? '379px' : '312px';
    }
    document.querySelectorAll('[text]').forEach(el => {
      el.innerHTML = language[el.getAttribute('text')];
    })
  }