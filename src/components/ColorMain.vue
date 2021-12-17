<template>
  asd
  <h2>{{ hexValue }}</h2>
  <button id="find" @click="getColorPalette">get color palette</button><br />
  {{ colorData }}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { colorPalette } from "../controller/API/colorPalettes";

@Options({
  components: {
  },
  data() {
    return {
      hexValue: "FFFFFF",
      colorSchemes: new colorPalette(),
      colorData: "",
    };
  },
  methods: {
    async getColorPalette() {
      const response = await this.colorSchemes.GET_schemes(this.hexValue);
      this.colorData = JSON.stringify(response.data.colors, null, 2);
    },
  },
})
export default class ColorMain extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
