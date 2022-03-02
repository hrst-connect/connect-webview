<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <div class="d-flex flex-column">
      <div class="d-flex justify-content-center mb-3">
        <div class="d-flex flex-column bd-highlight mb-3">
          <div class="fs-4 text-center">本日は、ようこそ、お越しくださいました。</div>
          <div class="fs-4 text-center">下記の“お声をかけてください。”をタップいただきますと</div>
          <div class="fs-4 text-center">社内の連絡先が表示され、ご希望の担当とつながります。</div>
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-danger btn-lg" @click="onMenu">お声をかけてください</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentHome',
}
</script>
