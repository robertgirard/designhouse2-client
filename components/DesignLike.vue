<template>
  <li class="d-table w-100">
    <div class="stats-txt d-table-cell w-50">
      <a href="#" @click.prevent="likeDesign()" v-if="$auth.loggedIn">
        <template v-if="current_user_likes">
          <span>
            <i class="fas fa-thumbs-down text-danger"></i>
          </span>
          Unlike
        </template>
        <template v-else>
          <span>
            <i class="fas fa-thumbs-up text-success"></i>
          </span>
          Like
        </template>
      </a>
    </div>
    <div class="stats-num d-table-cell w-50 text-right">
      <a href="#">{{ total_likes }} Likes</a>
    </div>
  </li>

</template>

<script>
export default {
  props: {
    design: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      current_user_likes: false,
      total_likes: 0
    };
  },
methods: {
    likeDesign() {
      this.$axios.post(`/designs/${this.design.id}/like`).then(res => {
        this.current_user_likes = !this.current_user_likes;
        this.total_likes = res.data.total;
      });
    },
    async checkIfCurrentUserLikes() {
      await this.$axios
        .$get(`/designs/${this.design.id}/liked`)
        .then(res => {
          console.log('fired checkIfCurrentUserLikes')
          this.current_user_likes = res.liked
        });
    }
  },
  async created() {
    this.total_likes = this.design.likes_count
    this.checkIfCurrentUserLikes()
    await this.$axios.$get(`/designs/${this.design.id}/liked`)
      .then(res => {
        this.current_user_likes = res.liked
      })
  }
};
</script>

<style></style>
