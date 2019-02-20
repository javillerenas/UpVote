<template>
  <article v-if="post !== null" class="card post">
    <header class="card-header">
      <p class="card-header-title">
        {{ post.title }}
      </p>
      <span class="hotPost" v-if="isHot">
        <i class="fas fa-star" aria-hidden="true"></i>
      </span>
    </header>
    <div class="card-content">
      <div class="content has-text-left">
        {{ post.content }}
        <span class="is-small">
          <br/><b>Lead by:</b> {{ post.teamLead}}
          <br/><b>Made by:</b> {{ post.teamMembers}}
        </span>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" :class="{ 'has-background-success has-text-white': currentVote === post.id }" @click="vote">VOTE!</a>
    </footer>
  </article>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Post",
  computed: {
    ...mapState("user", ["currentVote"])
  },
  props: ['post', 'isHot'],
  methods: {
    vote () {
      if (this.currentVote !== this.post.id) {
        this.$store.dispatch('user/vote', this.post)
      }
    }
  }

};
</script>

<style lang='scss' scoped>
.post {
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  width: calc(24% - 30px);

  .card-header {
    box-sizing: border-box;
    padding: 10px;
    
    .card-header-title {
      margin: 0;
    }
  }

  .card-footer a {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    &.has-background-success {
      cursor: initial;
    }
  }

  p {
    font-size: calc(12px + 0.5vw);
  }

  .hotPost {
    border-radius: 50px;
    box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, .1);
    display: inline-block;
    height: 52px;
    right: 10px;
    position: absolute;
    top: 10px;
    width: 52px;
    z-index: 1;

    i {
      font-size: 22px;
      left: 14px;
      position: absolute;
      transform: rotate(15deg);
      top: 14px;
      text-shadow: rgba(0,0,0, 0.2) 0 0 1px;
      z-index: 10;
    }

    &:before {
      content: "";
      width: 50px; 
      height: 50px;
      display: block;
      position: absolute;
      border-radius: 50px;
      z-index: 1;
    }

    &:after{
      content: "";
      width: 42px; 
      height: 42px;
      display: block;
      top: 4px;
      left: 4px;
      position: absolute;
      border-radius: 50px;
      z-index: 2;
    }
  }

  &:nth-child(1) .hotPost {
    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);
    i {
      color: #F2D70C;
    }

    &:before{
      background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);
      border: 1px solid rgba(242,215,12,1);
    }
    &:after{
      background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);
      border-top: 1px solid rgba(255,255,255,0.3);
      border-left: 1px solid rgba(255,255,255,0.3);
      border-bottom: 1px solid rgba(242,215,12,0.3);
      border-right: 1px solid rgba(242,215,12,0.3);
      box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);
    }
  }

  &:nth-child(2) .hotPost {
    background: linear-gradient(45deg,  rgba(160,160,160,1) 0%,rgba(232,232,232,1) 56%);
    i {
      color: #A0A0A0;
    }

    &:before{
      background: linear-gradient(45deg,  rgba(181,181,181,1) 0%,rgba(252,252,252,1) 56%,rgba(232,232,232,1) 96%);
      border: 1px solid rgba(181,181,181,1);
    }
    &:after{
      background: linear-gradient(45deg,  rgba(181,181,181,1) 0%,rgba(252,252,252,1) 56%,rgba(232,232,232,1) 96%);
      border-top: 1px solid rgba(255,255,255,0.3);
      border-left: 1px solid rgba(255,255,255,0.3);
      border-bottom: 1px solid rgba(160,160,160,0.3);
      border-right: 1px solid rgba(160,160,160,0.5);
      box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);
    }
  }

  &:nth-child(3) .hotPost {
    background: linear-gradient(45deg,  rgba(223,182,103,1) 0%,rgba(249,243,232,1) 56%,rgba(231,192,116,1) 96%); 
    i {
      color: #D19C35;
    }

    &:before{
      background: linear-gradient(135deg,  #d19c35 0%,#f7e6c5 50%,#e8b558 100%);
      border: 1px solid #e6b86a;
    }
    &:after{
      background: linear-gradient(45deg,  rgba(223,182,103,1) 0%,rgba(249,243,232,1) 56%,rgba(231,192,116,1) 96%);
      border-top: 1px solid rgba(255,255,255,0.3);
      border-left: 1px solid rgba(255,255,255,0.3);
      border-bottom: 1px solid rgba(209,156,53,0.3);
      border-right: 1px solid rgba(209,156,53,0.5);
      box-shadow: inset 0px 0px 2px 2px rgba(153, 106, 26, .05);
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    max-width: calc(100vw - 50px);
    width: 100%;
  }

 
}
</style>
