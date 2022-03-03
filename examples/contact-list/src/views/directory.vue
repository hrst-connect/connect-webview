<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <table class="table table-borderless align-middle" style="width: 38em;">
      <thead class="fs-2">
        <tr>
          <th>Division</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody class="fs-3">
        <tr>
          <td class="text-center">営業部</td>
          <td>
            <button type="button" class="btn btn-danger fs-5 m-1" @click="callSales">営業</button>
          </td>
        </tr>
        <tr>
          <td class="text-center">管理部</td>
          <td>
            <button type="button" class="btn btn-danger fs-5 m-1" @click="callSales">総務・庶務</button>
            <button type="button" class="btn btn-danger fs-5 m-1" @click="callSales">経理</button>
          </td>
        </tr>
        <tr>
          <td class="text-center">社長室</td>
          <td>
            <button type="button" class="btn btn-danger fs-5 m-1" @click="callSales">秘書</button>
          </td>
        </tr>
        <tr>
          <td class="text-center">技術部</td>
          <td>
            <button type="button" class="btn btn-danger fs-5 m-1" @click="callSales">パートナー開発技術</button>
            <button type="button" class="btn btn-danger fs-5 m-1" @click="callSales">ソフトウェア開発</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="connect-coe" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            Call department
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentDirectory',
  setup() {
    const callSales = () => {
      if (typeof connect !== 'undefined') {
        // eslint-disable-next-line
        connect.addResourcePoolStatusListener('onResourcePoolStatusChange', 'WYgcE672wZB4cr9KuoAD');
      } else {
        console.log('Calling...')
      }
    }

    return { callSales }
  }
}
</script>
