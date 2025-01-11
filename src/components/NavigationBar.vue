<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg topNav">
    <router-link v-slot="{}" to="/" class="navBarBrand">
      Art School
    </router-link>

    <div class="navbar-collapse">
      <!-- Това не е CSS курс. Това остава за да се подравнят правилно линковете за Login/Logout -->
      <div class="mx-auto flex-column flex-lg-row align-items-center">
      </div>

      <ul class="navBarGroup">
        <router-link to="/login" class="nav-link navLink">Login</router-link>
        <router-link to="/register" class="nav-link navLink">Register</router-link>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.topNav {
  background-color: green;
  color: white;
  width: 100%;
  padding: 0.5rem 1rem;
}

.navBarBrand {
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
}

.navBarGroup {
  display: flex;
  margin-bottom: 0;
}

.navLink {
  color: white;
  padding: 0.5rem 1rem;
}

.navItem {
  margin-bottom: 0;
  margin-top: 8px;
  margin-right: 20px;
}

.userManagementButtons {
  color: white;
}
</style>
