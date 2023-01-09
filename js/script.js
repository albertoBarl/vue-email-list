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
          .get("https://flynn.boolean.careers/exercises/api/random/mail%27")
          .then((genEmail) => {
            this.email = genEmail.data.response;
            this.emailArray.push(this.email);
          });
      }
    },
  },
}).mount("#app");
