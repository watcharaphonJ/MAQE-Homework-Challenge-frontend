<template>
  <div v-if="dataObj" :id="propsIndex" class="mt-3">
    <v-card outlined>
      <div :class="checkCss(propsIndex)">
        <v-card-title>
          <v-avatar size="25">
            <img alt="user" :src="dataObj.authData.avatar_url" />
          </v-avatar>
          <span class="auth-name ml-2">{{ dataObj.authData.name }}</span>
          <span class="auth-post-date ml-2"
            >posted on {{ formatPostDate(dataObj.created_at) }}</span
          >
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <div class="row">
            <div class="col-lg-3">
              <v-img
                :src="dataObj.image_url"
                lazy-src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbestherbthai.com%2Fhome%2F&psig=AOvVaw0-Ko3si95ekoIvz7nkWTMf&ust=1622890109455000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNinq6Ln_fACFQAAAAAdAAAAABAD"
              ></v-img>
            </div>
            <div class="col-lg-9">
              <v-card-title>
                {{ dataObj.title }}
              </v-card-title>
              <v-card-text> {{ dataObj.body }}</v-card-text>
            </div>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["propsDataObj", "propsIndex"],
  data() {
    return {
      dataObj: null,
    };
  },
  mounted() {
    this.setData();
  },
  methods: {
    checkCss(index) {
      console.log(index % 2);
      if (index % 2 == 1) {
        return "bg-select";
      }
    },
    formatPostDate(date) {
      var resultDate = date ? moment(date).format("LLLL") : "No Data";
      return resultDate;
    },
    setData() {
      this.dataObj = this.propsDataObj;
    },
  },
};
</script>
<style scoped>
.bg-select {
  background-color: rgb(203, 229, 253);
}
.auth-name {
  color: rgb(255, 136, 0);
}
.auth-post-date {
  color: grey;
}
</style>
