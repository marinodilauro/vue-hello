const { createApp } = Vue;

createApp({

  data() {
    return {

      message: 'Hello World',
      image: './assets/img/logo3.jpeg',
      imageWidth: 150
    };
  }

}).mount('#app');