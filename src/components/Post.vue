<template>
    <div v-if="post !== null" class="section">
        <article class="media">

            <figure class="media-left">
                <img v-if="post.submissionImage" :src="post.postImageUrl" alt="submission image" class="image is-64x64">
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
                    <i @click="increaseLikes()" class="fa fa-chevron-up"></i>
                    <strong class="has-text-info">{{ likes }}</strong>
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
    data: function () {
        return {
            likes: 10
        }
    },
    methods: {
        increaseLikes: function () {
            this.likes += 1;
        }
    }
}
</script>


// STYLE
<style>

.media {
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #e6e7e9;
    padding: 1em 1.5em 0.5em 1.5em;
    border-radius: 0.3em;
}
</style>
