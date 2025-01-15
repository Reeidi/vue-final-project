<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { onMounted } from 'vue';

const userStore = useUserStore();

function logoutClicked() {
  userStore.logout();
}

onMounted(() => userStore.reAuthUser());
</script>

<template>
  <nav class="navbar navbar-expand-lg topNav">
    <router-link v-slot="{}" to="/" class="navBarBrand">
      Art School
    </router-link>

    <div class="navbar-collapse">
      <div class="navBarGroup">
        <template v-if="userStore.isUserLogged">
          <p class="navItem">Welcome, {{ userStore.user?.email }}</p>
          <router-link to="/mine" class="nav-link navItem">My drawings</router-link>
          <router-link to="/drawing/create" class="nav-link navItem">Add drawing</router-link>
          <router-link to="/" class="nav-link navItem" @click.prevent="logoutClicked">Logout</router-link>
        </template>
        <template v-else>
          <router-link to="/login" class="nav-link navLink">Login</router-link>
          <router-link to="/register" class="nav-link navLink">Register</router-link>
        </template>
      </div>
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
  width: 100%;
  justify-content: right;
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
