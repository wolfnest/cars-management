<template>
  <div>
    <img src="/google.png" />
    <div style="background-color: green; width: 500px; height: 300px">
      pupy
      <v-btn> CLICK PUPY </v-btn>
    </div>
    <div style="background-color: red; width: 500px; height: 300px">
      <h1>top</h1>
      <v-btn class="pt-0 mt-5"> CLICK TOP </v-btn>
      <div class="pa-3 mt-5" style="background-color: grey">TEST PADDING</div>
    </div>
    <div class="fei" style="width: 500px; height: 300px">
      <p>fronk</p>
      <v-text-field></v-text-field>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style>
.fei {
  background-color: darkcyan;
}
</style>
