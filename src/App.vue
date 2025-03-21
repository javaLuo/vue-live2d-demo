<template>
  <canvas ref="liveCanvas" width="500" height="500"/>

  <div class="control">
    <button @click="expression('默认')">默认</button>
    <button @click="expression('开心')">开心</button>
    <button @click="expression('忧伤')">忧伤</button>
    <button @click="expression('愤怒')">愤怒</button>
    <button @click="expression('吐舌')">吐舌</button>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as PIXI from "pixi.js";
// @ts-ignore
import { Live2DModel } from "pixi-live2d-display/cubism4";
(window as any).PIXI = PIXI;

let app: PIXI.Application;
let model: any;

const liveCanvas = ref();

onMounted(async () => {
  app = new PIXI.Application({
    view: liveCanvas.value,
    autoStart: true,
    resizeTo: window,
    backgroundAlpha: 0,
  });

  model = await Live2DModel.from("./gougou_vts/狗狗.model3.json");
  // model = await Live2DModel.from("./jingying1.0/jingying.model3.json");
  app.stage.addChild(model);
  model.scale.set(0.1);
});

onBeforeUnmount(() => {
  model?.destroy();
  app?.destroy();
});

function expression(type: string) {
  model.expression(type);
}

</script>

<style scoped>
  canvas{
    width: 500px;
    height: 500px;
  }
</style>