<template>
    <div class="section post">
        <article class="media">

            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="@/../public/images/avatars/molly.png">
                </p>
            </figure>

            <div class="media-content">
                <div class="content">
                    <div class="field">
                        <div class="control">
                            <input class="input" type="text" placeholder="Post title." v-model="title">
                        </div>
                    </div>
                    <div class="field">
                        <p class="control">
                            <textarea class="textarea" placeholder="Post body." v-model="content"></textarea>
                        </p>
                    </div>
                    <div>
                        <button @click.prevent="submitPost()" class="button is-info">Submit</button>
                    </div>
                </div>
            </div>

        </article>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        submitPost: function () {
            var post = {
                title: this.title,
                content: this.content,
                url: "#",
                avatar: "./images/avatars/daniel.jpg",
                submissionImage: "./images/submissions/image-yellow.png"
            }
            // create post.
            this.$emit('submittedPost', post);

            this.title = '';
            this.content = '';
        }
    }
};
</script>

<style lang="scss" scoped>
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
