import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true,
})
  .pause(1000)
  .type('<span style="font-family: Segoe UI Emoji">👋</span>', {
    html: true,
  })
  .type("&nbspHi&nbspthere!&nbspI'm&nbspDepikag21")
  .pause(750)
  .delete(3, { deleteSpeed: 130 })
  .pause(500)
  .type("&nbspGupta")
  .pause(500)
  // .move(-12)
  // .type("https://depika-portfolio.vercel.app/")
  // .move(14)
  // .delete(2)
  .type(".")
  .move("END")
  .pause(1000)
  .go();
