<template>
  <div style="background-image: url('hutao.jpg');
         background-size: cover;
         background-position: center center;
         background-attachment: fixed;
         position: relative;height:100vh;">
    <div style="padding-top: 200px" class="mx-auto" >
    <v-img class="mx-auto" height="175" width="500" src="google.png"></v-img>
    <v-text-field class="mx-auto pt-6" rounded style="width: 600px;" label="" variant="solo-filled"></v-text-field>
    <v-row justify="center" class="mt-1">
    <v-btn  class="mr-4 btn" rounded="lg" >
  <p class="textcolor">ค้นหาด้วย Google</p>
    </v-btn>
    <v-btn rounded="lg" class="btn" >
  <p class="textcolor">ดีใจจังค้นหาแล้วเจอเลย</p>
</v-btn></v-row>
<v-row class="mt-7" justify="center"><p>แสดง Google ใน</p>
<p style="color:#6ac4ff ;">: English</p></v-row>

</div>
  </div>
</template>

<script lang="ts" setup></script>
<style>
.textcolor{
color:white;    
}
.btn{
color:#2a2a2a;
}
</style>
