<template>
  <div v-if="project !== null" class="section project">
    <article :class="{media: true, hot: isHot}">
      <figure class="media-left">
        <img :src="project.submissionImage" alt="submission image" class="image is-64x64">
      </figure>

      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a href="#" class="has-text-info">{{ project.title }}</a>
              <span class="tag is-small">#{{ project.id }}</span>
            </strong>
            <br>
            {{ project.content }}
            <br>
            <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24 is-inline-block" :src="project.avatar">
            </small>
          </p>
        </div>
      </div>

      <div class="media-right">
        <span class="icon is-small">
          <i @click="increaseVotes()" class="fa fa-chevron-up"></i>
          <strong class="has-text-info">{{ project.votes }}</strong>
        </span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    project: null
  },
  methods: {
    increaseVotes: function() {
      this.project.votes++;
    }
  },
  computed: {
    isHot: function() {
      return this.project.votes >= 20;
    }
  }
};
</script>


// STYLE
<style lang='scss' scoped>
.project p {
  font-size: calc(12px + 0.5vw);
}

.section {
  padding: 0.5rem 1.5rem;
}
.media {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #e6e7e9;
  padding: 1em 1.5em 0.5em 1.5em;
  border-radius: 0.3em;
}

// Once you reach 20 votes.
@mixin border-gradient($from, $to, $weight: 0) {
  $mix-main: mix($from, $to);
  $mix-sub-from: mix($mix-main, $from);
  $mix-sub-to: mix($mix-main, $to);

  box-shadow: 0 1px 0 $weight rgba($mix-sub-to, 0.25),
    0 -1px 0 $weight rgba($mix-sub-from, 0.25),
    1px 0 0 $weight rgba($mix-sub-to, 0.25),
    -1px 0 0 $weight rgba($mix-sub-from, 0.25),
    1px -1px 0 $weight rgba($mix-main, 0.5),
    -1px 1px 0 $weight rgba($mix-main, 0.5), 1px 1px 0 $weight rgba($to, 0.75),
    -1px -1px 0 $weight rgba($from, 0.75);
}
.hot {
  @include border-gradient(rgb(255, 72, 22), rgb(255, 185, 0));
}
</style>
