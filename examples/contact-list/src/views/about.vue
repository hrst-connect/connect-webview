<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <div class="d-flex flex-column text-center" style="width: 50em;">
      <div class="mb-3">
        <h1>会社情報</h1>
      </div>
      <p class="fs-5">「人の能力を引き出し成長させる」ことで、人々を幸せにする</p>
      <p>株式会社 hapi-robo st （ハピロボ）は、最先端のテクノロジー、インフラストラクチャー、サービスによって新たなイノベーションを創造し、「人の能力を引き出し成長させる」ことで、人々を幸せにするというビジョンを持っています。</p>
      <p>ハピロボでは、自由に移動できる「モビリティー事業」をはじめ、場所にとらわれず能力を発揮できる「テレプレゼンス事業」や持続可能な未来を創造する「e-Trinity事業」の領域に注力しており、No.1・Only 1のロボットカンパニーとなるべく、これらの領域におけるロボットのバリューチェーンをトータルにカバーしたGRP(ゼネラル・ロボティクス・プロデューザー/プロバイダ)として、さまざまなチャレンジに取り組んでいます。</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'ContentAbout',
  setup() {
    onMounted(() => {
      if (typeof connect !== 'undefined') {
        // eslint-disable-next-line
        connect.speak("ハピロボは、最先端のテクノロジー、インフラストラクチャー、サービスによって新たなイノベーションを創造し、「人の能力を引き出し成長させる」ことで、人々を幸せにするというビジョンを持っています。");
      }
    })
  }
}
</script>
