<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 font-weight-bold mb-4">Car Management System</h1>
        <v-btn
          color="primary"
          size="large"
          :loading="loading"
          @click="createRandomCar"
          class="mt-4"
        >
          Create Random Car
        </v-btn>
        <v-snackbar
          v-model="snackbar.show"
          :color="snackbar.color"
          :timeout="3000"
        >
          {{ snackbar.text }}
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const { addRandomCar } = useFirestore();
const loading = ref(false);
const snackbar = ref({
  show: false,
  text: "",
  color: "success",
});

const createRandomCar = async () => {
  loading.value = true;
  try {
    const result = await addRandomCar();
    if (result.success) {
      snackbar.value = {
        show: true,
        text: "Random car created successfully!",
        color: "success",
      };
    } else {
      throw new Error("Failed to create car");
    }
  } catch (error) {
    snackbar.value = {
      show: true,
      text: "Error creating random car",
      color: "error",
    };
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.v-container {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
