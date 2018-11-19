<template>
    <div v-if="post !== null" class="section post">
        <article class="media">

            <figure class="media-left">
                <img :src="post.submissionImage" alt="submission image" class="image is-64x64">
            </figure>

            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <a href="#" class="has-text-info">{{ post.title }}</a>
                            <span class="tag is-small">#{{ post.id }}</span>
                        </strong>
                        <br>
                            {{ post.description }}
                        <br>
                        <small class="is-size-7">
                            Submitted by: 
                            <img class="image is-24x24 is-inline-block"
                                :src="post.avatar">
                        </small>
                    </p>
                </div>
            </div>

            <div class="media-right">
                <span class="icon is-small">
                    <i @click="increaseVotes()" class="fa fa-chevron-up"></i>
                    <strong class="has-text-info">{{ post.votes }}</strong>
                </span>
            </div>

        </article>
    </div>
</template>

<script>
export default {
    props: {
        post: null
    },
    methods: {
        increaseVotes: function () {
            this.post.votes += 1;
        }
    }
}
</script>


// STYLE
<style scoped>

.post p {
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
</style>
