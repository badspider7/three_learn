<template>
  <div class="three-canvas" ref="renderTarget"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { TEngine } from "./assets/ts/TEngine";

export default defineComponent({
  setup() {
    const renderTarget = ref(null);

    onMounted(() => {
      const TE = new TEngine(renderTarget.value!);
    });

    return {
      renderTarget,
    };
  },
});
</script>

<style lang="scss">
.three-canvas {
  width: 100%;
  height: 100%;
}
#app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
