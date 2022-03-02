<template>
  <div class="d-flex justify-content-center align-items-center">
    <table class="table table-borderless text-center" style="width: 50vw;">
      <thead class="fs-1">
        <tr>
          <th>Division</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody class="fs-3">
        <tr>
          <td>営業部</td>
          <td>
            <button type="button" class="btn btn-danger fs-3">営業</button>
          </td>
        </tr>
        <tr>
          <td>管理部</td>
          <td>
            <button type="button" class="btn btn-danger fs-3 me-2">総務・庶務</button>
            <button type="button" class="btn btn-danger fs-3 me-2">経理</button>
          </td>
        </tr>
        <tr>
          <td>社長室</td>
          <td>
            <button type="button" class="btn btn-danger fs-3 me-2">秘書</button>
          </td>
        </tr>
        <tr>
          <td>技術部</td>
          <td>
            <button type="button" class="btn btn-danger fs-3 me-2">パートナー開発技術</button>
            <button type="button" class="btn btn-danger fs-3 me-2">ソフトウェア開発</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ContentDirectory',
}
</script>


営業部
管理部
社長室
技術部

営業
総務・庶務
経理
秘書
パートナー開発技術
ソフトウェア開発