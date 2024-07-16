<template>
  <header>
    <hgroup>
      <h1><Icon name="fa-solid:lock" mode="svg" size="0.8em" /> Auth Test App</h1>
      <p>A really cool app.</p>
    </hgroup>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/public">Public</NuxtLink></li>
        <li><NuxtLink to="/private">Private</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
h1 {
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.2em;
  }
}
</style>