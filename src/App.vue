<template>
  <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
  header {
    z-index: 1900;
  }

  router-view {
    margin-top: 60px; 
    padding-bottom: 20px;
  }

  .separator {
  border-top: 1px solid #000000; /* Đường gạch ngang */
}
</style>
