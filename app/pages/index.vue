<template>
  <div class="main-container">
    <!-- Background image with blur effect -->
    <div class="background-image"></div>

    <v-row justify="center" align="center" class="content-wrapper">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 font-weight-bold mb-4 header-title">
          Car Care Management System
        </h1>

        <!-- Login Button -->
        <v-btn
          color="orange-darken-2"
          size="large"
          variant="elevated"
          class="login-btn mb-6"
          prepend-icon="mdi-login"
        >
          Login
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
  </div>
</template>

<script setup lang="ts">
const { addRandomCar } = useFirestore();
const loading = ref(false);
const snackbar = ref({
  show: false,
  text: "",
  color: "success",
});
const test1 = () => {
  alert("hello world");
};
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
.main-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px);
  transform: scale(1.1);
  z-index: -1;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
}

.header-title {
  color: #ff8c00 !important;
  font-size: 4.5rem !important;
  font-weight: 300 !important;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 2px;
  margin-bottom: 2rem !important;
  line-height: 1.1;
  text-transform: none;
}

.login-btn {
  background: linear-gradient(135deg, #ff8c00, #ff4500) !important;
  color: white !important;
  font-weight: bold;
  font-size: 1.1rem;
  padding: 12px 32px;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 140, 0, 0.4);
}

.v-container {
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
