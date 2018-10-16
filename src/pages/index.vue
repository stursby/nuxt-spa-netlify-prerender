<template>
  <div>
    <h2>Users</h2>
    <ul>
      <li v-for="{ id, name } in users" :key="id">
        <nuxt-link :to="`/users/${id}`">{{ name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data: users } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return { users }
  }
}
</script>
