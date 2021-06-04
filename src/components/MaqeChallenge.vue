<template>
  <div>
    <v-card-title>
      MAQE Forum
    </v-card-title>
    <div>Your current timezone is {{ getTimeZone() }}</div>
    <div v-if="isDataRearranged">
      <div v-for="(itemPosts, indexPosts) in arrPosts" :key="indexPosts">
        <Card
          :propsIndex="indexPosts"
          :propsDataObj="itemPosts"
          :key="indexPosts"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card/Card.vue";
export default {
  components: {
    Card,
  },
  name: "HelloWorld",

  data: () => ({
    arrAuth: [],
    arrPosts: [],
    isDataRearranged: false,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    getTimeZone() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    },
    async getData() {
      await this.getAuth();
      await this.getPosts();
      await this.arrangeData();
    },
    async getAuth() {
      this.isDataRearranged = false;

      var url = `${this.config.api_path}/authors`;
      var result = await this.get(url);
      var { data } = result.data;
      this.arrAuth = data;
      console.log(data);
    },
    async getPosts() {
      var url = `${this.config.api_path}/posts`;
      var result = await this.get(url);
      var { data } = result.data;
      this.arrPosts = data;

      console.log(data);
    },
    async arrangeData() {
      console.log("arrangeData");
      for (let elementAuth of this.arrAuth) {
        for (let elementPosts of this.arrPosts) {
          if (elementPosts.author_id === elementAuth.id) {
            elementPosts.authData = elementAuth;
          }
        }
      }
      this.isDataRearranged = await true;
      console.log(this.arrPosts);
    },
  },
};
</script>
