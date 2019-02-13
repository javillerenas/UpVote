<template>
  <div>
    <div class="section header">
      <h2 class="title has-text-centered dividing-header">Hack-a-vote! ✂️💥</h2>
    </div>

    <div class="content">
      <Post v-for="a in sortedSubmissions" :post="a" :key="a.id"></Post>
      <SubmitBox @submittedPost="createPost"></SubmitBox>
    </div>

    <footer class="footer">
      <img
        src="https://bulma.io/images/made-with-bulma.png"
        alt="Made with Bulma"
        width="128"
        height="24"
      >
    </footer>
  </div>
</template>

<script>
import Post from '@/components/Post'
import SubmitBox from '@/components/SubmitBox'
import store from '@/store/store'


export default {
    components: {
        Post,
        SubmitBox
    },
    computed: {
        sortedSubmissions: function () {
            return store.state.post.posts.slice(0).sort( (a,b) => {
                return b.votes - a.votes;
            });
        },
        numSubmissions: function () {
            return store.state.post.posts.length;
        }
    },
    methods: {
        createPost: function (post) {
            post.votes = 0;
            post.id = this.numSubmissions + 1;
            this.submissions.push(post);
        }
    }
}
</script>

<style scoped>
.header {
  padding: 3rem 1rem 1.5rem;
}

.footer {
  padding: 1rem;
}
</style>
