<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <table class="table table-borderless align-middle" style="width: 60em;">
      <thead class="fs-1">
        <tr>
          <th>Division</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody class="fs-1">
        <tr>
          <td class="text-center">営業部</td>
          <td>
            <button type="button" class="btn btn-danger fs-1 m-2" @click="callCoe('sales-1')">営業1課</button>
            <button type="button" class="btn btn-danger fs-1 m-2" @click="callCoe('sales-2')">営業2課</button>
          </td>
        </tr>
        <tr>
          <td class="text-center">管理部</td>
          <td>
            <button type="button" class="btn btn-danger fs-1 m-2" @click="callCoe('accounting')">経理</button>
            <button type="button" class="btn btn-danger fs-1 m-2" @click="callCoe('general-affairs')">総務・庶務</button>
          </td>
        </tr>
        <tr>
          <td class="text-center">技術部</td>
          <td>
            <button type="button" class="btn btn-danger fs-1 m-2" @click="callCoe('partner-development')">パートナー開発技術</button>
            <button type="button" class="btn btn-danger fs-1 m-2" @click="callCoe('software-development')">ソフトウェア開発</button>
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
    /* eslint-disable */
    const callCoe = (department) => {
      if (typeof connect !== 'undefined') {
        switch (department) {
          case 'sales-1':
            connect.call('vqjRUS8dRqjmxEg4k1uT');
            break;
          case 'sales-2':
            connect.call('dwtoMUO3P0L3SfHNmWmf');
            break;
          case 'accounting':
            connect.call('s1GLvoZNHJrwnqL1P8Q3');
            break;
          case 'general-affairs':
            connect.call('266Jhp0B804IETqnkfmC');
            break;
          case 'partner-development':
            connect.call('4mdEySwPuIWYioqIUCQp');
            break;
          case 'software-development':
            connect.call('ClUrT9yDABPUfqJSlhYW');
            break;
          default:
            break;
        }
      } else {
        console.log(`Calling ${department}`)
      }
    }

    return { callCoe }
  }
}
</script>
