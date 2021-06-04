<template>
  <v-app>
    <v-main>
      <div class="bg-main">
        <v-container>
          <MaqeChallenge />
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import MaqeChallenge from "./components/MaqeChallenge";

export default {
  name: "App",

  components: {
    MaqeChallenge,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.bg-main {
  background-color: rgb(238, 238, 238) !important;
}
</style>
