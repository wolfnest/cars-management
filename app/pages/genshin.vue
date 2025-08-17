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
      text-align: center;
      flex-direction: column;  
      gap: 8px;
      ">

  <div class="overlay"></div>
    <h1 class="title">Hu Tao</h1>
    <p class="subtitle">Main Waifu No.1</p>
  <dev class="tags">
    <span class="tag">5 Star</span>
    <span class="tag">Pyro</span>
    <span class="tag">Liyue</span>    
  </dev>  
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
  z-index:1;
}
.overlay{
  position: absolute; inset:0;
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.72));
  z-index:0;
}
.subtitle{
  position: relative; z-index:1;
  font-size:18px;
  font-weight:400;
  margin: 0;
}
.tags{
  position: relative; z-index:1;
  margin-top:6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
.tag{
  display:inline-block; padding:6px 12px;
  margin: 0;
  border-radius:9999px;
  background: rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.18);
  color:#fff; backdrop-filter: blur(2px);
}
</style>