<template>
  <div class="three-canvas" ref="renderTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { TEngine } from "./assets/ts/TEngine";
// import { DefaultLoaderManager } from "./assets/ts/TLoaderManager";

import { basicObjectList } from "./assets/ts/TBasicObject";
import { LightsList } from "./assets/ts/TLights";
import { helperList } from "./assets/ts/THelper";
// import { codeModelList } from "./assets/ts/TCodeModel";
// // import { framePromise } from './assets/ts/TLoadModel'
// import { groupPromise, groupListPromise } from "./assets/ts/TGroup";
// import { pointsPartical } from "./assets/ts/TPoints";
// import { testSprite } from "./assets/ts/TSprite";

export default defineComponent({
  setup() {
    const renderTarget = ref(null);

    onMounted(() => {
      const TE = new TEngine(renderTarget.value!);
      TE.addObject(...basicObjectList);
      TE.addObject(...LightsList);
      TE.addObject(...helperList);
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
