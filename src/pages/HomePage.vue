<script setup>

</script>

<template>
  <section id="content">
    <div class="container_12">
      <div class="grid_4 bot-1">
        <div class="art"></div>
        <h2 class="top-1 sectionTitle">Events</h2>
        <p class="text-1 p3">April 18 - "Spring's Bloom"</p>
        <p class="sideText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <p class="text-1 top-2 p3">April 01 - “Smile!”</p>
        <p class="sideText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
        <router-link to="/schedule" class="link orange">More events</router-link>
      </div>
      <div class="grid_8">
        <div class="pad-1">
          <h2 class="p2">Welcome to Art School</h2>
          <p class="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip</p>
        </div>
        <div class="block-1">
          <div class="block-1-shadow">
            <h2 class="sectionTitle">News</h2>
            <p class="clr-6">
              <strong>Today...</strong>
            </p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.

            <div class="clear"></div>
            <div class="pad-2">
              <router-link to="/about" class="link green">About</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </section>
</template>

<style scoped>
.sectionTitle {
  color: #0072ff;
  padding-bottom: 12px;
  text-decoration: underline;
}

.sideText {
  padding-bottom: 12px;
  color: rgb(114, 151, 253);
  font-size: 15px;
}

.link {
  font-size: 30px;
  line-height: 36px;
  font-weight: bold;
  font-family: 'Cabin Sketch', cursive;
  letter-spacing: -1px;
  display: inline-block;
}

.orange {
  color: #dd5100;
}

.orange:hover {
  color: #dd5100;
}

.green {
  color: #00ae35;
}

.green:hover {
  color: #00ae35;
}
</style>
