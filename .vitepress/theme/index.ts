import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import HeroStack from "./HeroStack.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, { "home-hero-image": () => h(HeroStack) }),
};
