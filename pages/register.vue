<template>
  <main>
    <section>
      <FormsUser @submit="register"/>
    </section>
  </main>
</template>
<script setup>
const register = (payload) => {
  // TODO: Authentication
  console.log(payload)
  navigateTo('/dashboard')
}
</script>
<style scoped lang="scss">
main {
  width: 100%;
  section {
    margin: auto;
    background: var(--surface-overlay);
    padding: 20px;
    margin-top: 5%;
    max-width: 600px;
  }
}
</style>
