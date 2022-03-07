<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <div class="d-flex flex-column">
      <div class="mb-5">
        <div class="fs-1 text-center">本日は、ようこそ、お越しくださいました。</div>
        <div class="fs-1 text-center">下記の“お声をかけてください。”をタップいただきますと</div>
        <div class="fs-1 text-center">社内の連絡先が表示され、ご希望の担当とつながります。</div>
      </div>
      <div class="d-flex justify-content-center mb-5">
        <button type="button" class="btn btn-danger btn-lg fs-1 fw-bold" @click="onClick">お声をかけてください</button>
      </div>
      <div class="d-flex justify-content-center">
        <img class="img-fluid" src="@/assets/hrst_logo_2.png" width="400" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'ContentHome',
  setup() {
    const router = useRouter()

    const onClick = () => {
      router.push({ name: 'directory' })
    }

    return { onClick }
  }
}
</script>
