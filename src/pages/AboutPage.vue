<script setup>
</script>

<template>
  <section id="content">
    <div class="container_12">
      <div class="left-column bot-1">
        <h2 class="margins1 sectionTitle">Teachers</h2>
        <p class="text-1 p3">Peter Stanton</p>
        <p class="sideText">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat
          <a href="#" class="link" @click.prevent=""> More...</a>
        </p>
        <p class="text-1 top-2 p3">Helen Perton</p>
        <p class="sideText">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus
          est <a href="#" class="link" @click.prevent=""> More...</a>
        </p>
        <p class="text-1 top-2 p3">Jesica Murray</p>
        <p class="sideText">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, <br />
          sed diam <a href="#" class="link" @click.prevent=""> More...</a>
        </p>
      </div>
      <div class="right-column">
        <div class="block-1 top-5">
          <div class="block-1-shadow">
            <h2 class="sectionTitle">A Few Words About Us</h2>
            <p class="clr-6"><strong>Our vision</strong></p>
            <p class="clr-6">Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              acam
              et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem ipsum
              dolor sit amet.</p>
            <div class="pad-3">
              <img src="../assets/images/page2-img1.jpg" alt="" class="img-border img-indent" />
              <div class="extra-wrap clr-6">
                <p><strong>Your child's future</strong></p>
                <p>sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd
                  gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <h2 class="sectionTitle">What We Offer</h2>
            <p class="clr-6"><strong>The best courses</strong></p>
            <p class="clr-6">Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit
            </p>
            <div class="lists">
              <ul class="list-2">
                <li><a href="#">Sed diam nonummy nibh euismod</a></li>
                <li><a href="#">Tincidunt ut laoreet dolore</a></li>
                <li><a href="#">Magna aliquam erat volutpat wisi enim</a></li>
                <li><a href="#">Minim veniam, quis nostrud exerci</a></li>
              </ul>
              <ul class="list-2 last">
                <li><a href="#">Duis autem vel eum iriure dolor</a></li>
                <li><a href="#">Hendrerit in vulputate velit molestie</a></li>
                <li><a href="#">Consequat vel illum dolore</a></li>
                <li><a href="#">Feugiat nulla facilisis at vero eros</a></li>
              </ul>
            </div>
            <div class="pad-2">
              <router-link to="/gallery" class="link">Visit gallery</router-link>
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
  color: #00ae35;
  padding-bottom: 5px;
  text-decoration: underline;
}

.margins1 {
  margin-top: 40px;
  padding-bottom: 6px;
}

.sideText {
  padding-bottom: 12px;
  color: rgb(0, 95, 0);
  font-size: 15px;
}

.link {
  font-size: 30px;
  line-height: 36px;
  font-weight: bold;
  font-family: 'Cabin Sketch', cursive;
  letter-spacing: -1px;
  display: inline-block;
  color: #b30800;
}
</style>
