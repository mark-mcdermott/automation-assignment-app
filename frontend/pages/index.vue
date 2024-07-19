<script setup>
const { signIn, status } = useAuth()
definePageMeta({ auth: false })
const email = ref('email')
const password = ref('password')

async function login() {
  await signIn({ email: email.value, password: password.value }, { redirect: false })
}
</script>

<template>
  <h2>Home</h2>
  <p>Most bee jobs are small ones. But bees know that every small job, if it's done well means a lot. But choose carefully because you'll stay in the job you pick for the rest of your life.</p>
  <section v-if="status === 'unauthenticated'">
    <h3>Login</h3>
    <form>
      <input v-model="email">
      <input v-model="password">
      <button type="submit" @click.prevent="login">Login</button>
    </form>
  </section>
</template>