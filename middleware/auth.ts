export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn = true
  if (!loggedIn) {
    return navigateTo('/login')
  }
})