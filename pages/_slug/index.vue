<template>
  <div class="container">
    <main>
      <h1>{{ post.title }}</h1>
      <div class="content">
        <div v-html="post.html">{{ post.html }}</div>
      </div>
    </main>
  </div>
</template>

<script>
import { getPost } from '~/api/posts'

export default {
  async asyncData ({ params }) {
    const post = await getPost(params.slug)
    return { post }
  }
}
</script>

<style lang="scss">
header {
  height: 15em;
}
h1 {
  color: #fff;
  margin-bottom: 1em;
}
.content {
  background-color: #fff;
  border-radius: 1em;
  padding: 1em;

  img {
    width: 100%;
  }
}
main {
  margin-top: -9em;
}

@media only screen and (min-width: 768px) {
  .content {
    padding: 2em;
  }
}
</style>
