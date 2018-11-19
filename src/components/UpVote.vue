<template>
    <div>
        <div>
            <h2 class="title has-text-centered dividing-header">UpVote! 💯</h2>
        </div>

        <Post></Post>
        
        <footer>
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
        </footer>
    </div>
</template>

<script>
import Post from '@/components/Post'

export default {
    components: {
        Post
    }    
}
</script>
