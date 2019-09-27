<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1>Welcome to My Blog</h1>
        <p class="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi molestias, consectetur asperiores dignissimos temporibus laudantium ut tempora aut, aliquid qui incidunt maiores! Veritatis vero dolores velit necessitatibus corrupti, distinctio in?</p>
        <nuxt-link to="/contact" class="hire">Hire me</nuxt-link>
      </div>
    </div>
    <div class="container">
      <main>
        <h2>Latest throughts</h2>
        <ul>
          <li v-for="(post, index) of posts" :key="index">
            <img :src="post.feature_image">
            <div class="content">
              <span>{{ post.authors[0].name }}</span>
              <nuxt-link :to="{{ path: post.slug }}">{{ post.title }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
import { getPosts } from '~/api/posts'

export default {
  async asyncData () {
    const posts = await getPosts()
    return { posts }
  }
}
</script>

<style lang="scss">
.hero {
  background-color: $primary-color;
  color: #fff;
  padding-top: 2em;
  text-align: center;

  h1 {
    margin-bottom: 1em;
  }

  .hire {
    background: darken($primary-color, 10%);
    border-radius: 10px;
    color: $accent-color;
    display: inline-block;
    margin: 2em 0 3em;
    padding: .5em 3em;
    text-decoration: none;
  }
}

.container ul {
  list-style-type: none;
  padding: 0;
}

main {
  li {
    background-color: #fff;
    border-radius: 1em;
    box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.4);
    margin: 1em 0;
    padding: .8em;
  }

  img {
    border-radius: .5em;
    width: 100%;
  }

  .content {
    padding: .5em;
  }

  a {
    font-size: 1.5em;
    text-decoration: white;
    color: #000;
    font-weight: bold;
    display: block;
    margin: -.1em 0 .2em;
  }

  h2 {
    margin-top: 3em;
    text-transform: uppercase;
    font-size: .8em;
  }

  span {
    color: $primary-color;
    text-transform: uppercase;
  }
}

@media only screen and (min-width: 768px) {
  main li {
    display: grid;
    grid-template-columns: 180px auto;
    grid-column-gap: 1em;
  }
}

</style>
