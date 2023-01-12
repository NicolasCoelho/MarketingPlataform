export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name?.toString().includes('dashboard')) {
    const loggedIn = true
    if (!loggedIn) {
      return navigateTo('/login')
    }
  }
})