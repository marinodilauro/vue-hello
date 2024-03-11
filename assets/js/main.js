const { createApp } = Vue;

createApp({

  data() {
    return {

      message: 'Hello Vue',
      image: './assets/img/logo.jpeg',
      imageWidth: 150,
      fontFamily: '"Lexend", sans-serif',
      marginClass: 'm-3',
      columnClass: 'flex-column',
      centerDivClasses: 'd-flex justify-content-center align-items-center'
    };
  }

}).mount('#app');