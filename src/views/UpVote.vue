<template>
  <div class="content">
    <h4 v-if="!isLoaded">Aguarde un momento mientras traemos los proyectos.</h4>
    <section class="list" v-if="isLoaded">
      <input type="text" v-model="search" placeholder="Search title..">
      <Post v-for="post of listHotPosts" :post="post" :isHot="true" :key="post.id"/>
      <Post v-for="post of filteredProjects" :post="post" :key="post.id"/>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";
import Masonry from "masonry-layout";
import Post from "@/components/Post";

export default {
  name: "UpVote",
  data: function() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapGetters("post", ["listProjects", "listHotPosts", "isLoaded"]),
    filteredProjects() {
      return Object.entries(this.listProjects)
        .filter(([key, value]) => {
          value.title.includes(this.search.toLowerCase());
        })
        .reduce((obj, key) => {
          return {
            ...obj,
            [key]: this.listProjects[key]
          };
        }, {});
    }
  },
  methods: {
    applyMassonry() {
      if (this.isLoaded) {
        setTimeout(() => {
          new Masonry(".list", {
            itemSelector: ".post",
            columnWidth: ".post",
            percentPosition: true,
            gutter: 10
          });
        }, 0);
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch("post/getList");
    this.$store.dispatch("post/getVotes");
  },
  updated() {
    this.$store.dispatch("user/getCurrentVote");
  },
  watch: {
    isLoaded(o, n) {
      this.applyMassonry();
    }
  },
  components: {
    Post
  }
};
</script>

<style scoped>
.list {
  box-sizing: border-box;
  max-width: 100vw;
  overflow: hidden;
  padding: 25px;
  text-align: center;
}
</style>
