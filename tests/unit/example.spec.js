import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

describe("HelloWorld.vue", () => {
  it("renders the correct markup", () => {
    const helloWorld = shallowMount(HelloWorld);

    expect(helloWorld).toMatchSnapshot(); // これだけでスナップショットが作成されます！！！簡単！！
  });

  it("renders props.msg when passed", () => {
    const msg = "Welcome to Vuetify";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
