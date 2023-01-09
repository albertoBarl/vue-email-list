const { createApp } = Vue;

createApp({
  data() {
    return {
      emailArray: [],
    };
  },
  methods: {
    createEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((genEmail) => {
            this.emailArray.push(genEmail.data.response);
          });
      }
    },
  },
}).mount("#app");
