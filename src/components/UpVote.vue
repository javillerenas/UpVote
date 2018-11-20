<template>
    <div>
        <div class="section header">
            <h2 class="title has-text-centered dividing-header">UpVote! 💯</h2>
        </div>

        <Post v-for="a in sortedSubmissions" :post="a" :key="a.id"></Post>

        <SubmitBox @submittedPost="createPost"></SubmitBox>
        
        <footer>
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
        </footer>
    </div>
</template>

<script>
import Post from '@/components/Post'
import SubmitBox from '@/components/SubmitBox'
import seed from '@/seed.json'

export default {
    components: {
        Post,
        SubmitBox
    },
    data: function () {
        return {
            submissions: seed.posts
        }
    },
    computed: {
        sortedSubmissions: function () {
            return this.submissions.slice(0).sort( (a,b) => {
                return b.votes - a.votes;
            });
        },
        numSubmissions: function () {
            return this.submissions.length;
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


// STYLE
<style scoped>

.header {
    padding: 3rem 1rem 1.5rem;
}
</style>

