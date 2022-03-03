<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <div class="d-flex flex-column text-center" style="width: 50em;">
      <div class="mb-3">
        <h1>事業内容</h1>
      </div>
      <p class="fs-5">GRP: ゼネラル・ロボティクス・プロデューザー</p>
      <p>No.1・Only 1のロボットカンパニーを常に目指すハピロボは、ロボットのバリューチェーンをトータルにカバーした GRP (ゼネラル・ロボティクス・プロデューザー)として、さまざまなチャレンジに取り組んでいます。</p>
      <figure class="figure">
        <img class="img-fluid" src="@/assets/hapi-robo-grp.png" loading="lazy">
      </figure>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'ContentProducts',
  setup() {
    onMounted(() => {
      if (typeof connect !== 'undefined') {
        // eslint-disable-next-line
        connect.speak("GRP: ゼネラル・ロボティクス・プロデューザー");
      }
    })
  }
}
</script>
