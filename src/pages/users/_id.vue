<template>
  <div>
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <p>{{ user.website }}</p>
    <nuxt-link to="/">&larr; back</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data: user } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    )
    return { user }
  },

  head() {
    return {
      titleTemplate: `${this.user.name} | %s`
    }
  }
}
</script>
