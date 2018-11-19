<template>
    <div>
        <div class="section">
            <h2 class="title has-text-centered dividing-header">UpVote! 💯</h2>
        </div>

        <Post v-for="a in submissions" :post="a" :key="a.id"></Post>
        
        <footer>
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
        </footer>
    </div>
</template>

<script>
import Post from '@/components/Post'
import seed from '@/seed.json'

export default {
    components: {
        Post
    },
    data: function () {
        return {
            submissions: seed.posts
        }
    }
}
</script>


// STYLE
<style scoped>
</style>

