<template>
  <div class="content">
    <h4 v-if="listProjects === {}">Aguarde un momento mientras traemos los proyectos.</h4>
    <Post v-for="post of listProjects" :post="post" :key="post.id"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Post from "@/components/Post";

export default {
  name: "UpVote",
  computed: {
    ...mapGetters("post", ["listProjects"]),
    ...mapState("user", ["currentVote"])
  },
  beforeCreate() {
    this.$store.dispatch("post/getList");
  },
  components: {
    Post
  }
};
</script>

<style scoped>
</style>
