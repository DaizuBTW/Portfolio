document.addEventListener("DOMContentLoaded", function(event) { 
  /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
  var widthWind = document.querySelector('body').offsetWidth;
  const element1 = document.querySelector('body');
  const element2 = document.querySelector('.header');
  const home = document.querySelector('.home');
  const btns = document.querySelector('.btn-box');
  const about = document.querySelector('.about');
  const services = document.querySelector('.services');
  const portfolio = document.querySelector('.portfolio');
  const contacts = document.querySelector('.contacts');
  if (widthWind <= 920) {
    element1.style.padding = '0 5%';
    element2.style.padding = '20px 5%';
    home.style.height = '466px';
    btns.style.width = 'px';
    about.style.height = '369px';
    services.style.height = '432px';
    portfolio.style.hright = '360px';
    btns.style.width = 'px';
    document.documentElement.style.setProperty('--block-margin', '30px 0 0 0');
    document.documentElement.style.setProperty('--home-margin', '70px 0 0 0');
    document.documentElement.style.setProperty('--text-size', '18px');
    document.documentElement.style.setProperty('--h1-size', '28px');
    document.documentElement.style.setProperty('--h3-size', '24px');
    document.documentElement.style.setProperty('--nava-size', '20px');
    document.documentElement.style.setProperty('--logo-size', '22px');
    document.documentElement.style.setProperty('--porta-size', '22px');
  }
});

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
      x.className += " responsive";
  } else {
      x.className = "navbar";
  }
}





let rus = {
    btn_1: 'Нанять меня',
    btn_2: 'Связаться',
    home: 'Главная',
    home_text: 'Мне 22 года, в данный момент нахожусь в Республике Беларусь (г. Минск). Самостоятельно изучал программирование ещё со школьных лет, и около года назад я начал профессиональное обучение языку Java. Сейчас, помимо Английского языка, начинаю изучать Польский. Надеюсь на сотрудничество с вами!',
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
    port_1: ' - Этот сайт написан в целях обучения, он использует Spring и Hibernate.',
    port_2: ' - Интернет магазин товаров для свечеварения, был создан при помощи Tilda.cc. В нем, большая часть работы заключалась в написании CSS кода.',
    contacts: 'Контакты',
    hello: 'Привет, я Данила Сельванович',
    dev: 'Backend Java Разработчик',
    tel: 'тел: +375(29)277-08-41',
};
  
  let eng = {
    btn_1: 'Hire Me',
    btn_2: 'Let\'s Talk',
    home: 'Home',
    home_text: 'I am 22 years old, currently located in the Republic of Belarus (Minsk). I have been studying programming on my own since school years, and about a year ago I started professional training in the Java language. Now, in addition to English, I\'m starting to learn Polish. Hope to cooperate with you!',
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
    port_1: ' - This is a website written for educational purposes, it uses Spring and Hibernate.',
    port_2: ' - The online store of goods for candle making, was created with the help of Tilda.cc . In it, most of the work involved writing CSS code.',
    contacts: 'Contacts',
    hello: 'Hi, i\'m Danila Selvanovich',
    dev: 'Backend Java Developer',
    tel: 'tel: +375(29)277-08-41'
};
  
  changeLagnuage();

  
  
  function changeLagnuage(){
    let language = lang.checked ? rus : eng;
    var widthWind = document.querySelector('body').offsetWidth;
    const home = document.querySelector('.home');
    const about = document.querySelector('.about');
    const services = document.querySelector('.services');
    const portfolio = document.querySelector('.portfolio');
    const contacts = document.querySelector('.contacts');
    if (widthWind <= 920) {
      home.style.height = lang.checked ? '539px' : '466px';
      about.style.height = lang.checked ? '475px' : '369px';
      services.style.height = lang.checked ? '483px' : '432px';
      portfolio.style.height = lang.checked ? '382px' : '360px';
    }
    document.querySelectorAll('[text]').forEach(el => {
      el.innerHTML = language[el.getAttribute('text')];
    })
  }