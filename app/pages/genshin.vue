<template> 
  <div
    class="Character"
    style="
      background-image: url('/hutao.jpg');
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
      background-repeat: no-repeat;
      position: relative;
      height: 100vh;

      display: flex;           
      align-items: center;     
      justify-content: center; 
      text-align: center;">

    <div class="overlay"></div>
    <h1 class="title">Hu Tao</h1>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.title{
  color:#fff;
  font-size:64px;
  font-weight:800;
  margin:0;
  text-shadow:0 4px 18px rgba(0, 0, 0, 0.6);
}
.overlay{
  position: absolute; inset:0;
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.72));
  z-index:0;
}
</style>