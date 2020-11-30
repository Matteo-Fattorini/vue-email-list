const app = new Vue({
  el: "#container",
  data: {
    mailList: [],
  },
  methods: {
    getMail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((result) => {
            this.mailList.push(result.data.response);
          })
          .catch((err) => {
            console.log(`Attenzione c'è un errore! ${err}`);
          });
      }
    },
  },
  created() {
    this.getMail();
  },
});
