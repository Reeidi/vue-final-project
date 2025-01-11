<script setup>
import ScheduleItem from '@/components/ScheduleItem.vue';
</script>

<template>
  <section id="content">
    <div class="container_12">
      <div class="grid_4 bot-1">
        <h2 class="sectionTitle top-6">About Schedule</h2>
        <p class="sideTextTitle"><strong>At vero eos et accusam et justo duo dolores et ea rebum.</strong>
        </p>
        <p class="sideText">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.
          Loremsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        <p class="sideText">Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum <br />
          dolor sit amet.</p>
      </div>
      <div class="grid_8">
        <div class="block-1 top-5">
          <div class="block-1-shadow">
            <h2 class="sectionTitle">Schedule</h2>
            <table class="table">
              <tbody>
                <tr>
                  <th>Monday</th>
                  <th>Wednesday</th>
                  <th>Friday</th>
                  <th class="last">Saturday</th>
                </tr>
                <tr>
                  <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                  <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                  <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                  <ScheduleItem time="11:00" courseName="Composition" teacher="Peter Stanton" />
                </tr>
                <tr>
                  <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                  <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                  <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                  <ScheduleItem time="13:00" courseName="Color science" teacher="Helen Perton" />
                </tr>
                <tr>
                  <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                  <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                  <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                  <ScheduleItem time="16:00" courseName="Human anatomy" teacher="Jesica Murray" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </section>

</template>

<style scoped>
.sectionTitle {
  color: #bfaf00;
  padding-bottom: 5px;
  text-decoration: underline;
}

.sideText {
  padding-bottom: 12px;
  color: wheat;
  font-size: 15px;
}

.sideTextTitle {
  padding-bottom: 12px;
  color: white;
  font-size: 17px;
}
</style>
