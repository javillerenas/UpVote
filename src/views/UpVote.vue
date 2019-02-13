<template>
  <div class="content">
    <Post v-for="project of list" :project="project" :key="project.id"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Post from "@/components/Post";

export default {
  name: "UpVote",
  computed: {
    ...mapState("project", ["list"]),
    ...mapState("user", ["currentVote"])
  },
  beforeMount() {
    this.$store.dispatch("project/getAllProjects");
  },
  components: {
    Post
  }
};
</script>

<style scoped>
</style>

