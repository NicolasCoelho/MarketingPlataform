<template>
  <header>
    <div class="logo-container">
      <NuxtLink to="/dashboard">
        <img src="/img/logo-white.png" alt="FaneyLab">
      </NuxtLink>
    </div>
    <nav>
      <ul>
        <li><NuxtLink to="/projects">{{ $t('Dashboard.Header.Menu.Projects') }}</NuxtLink></li>
        <li><NuxtLink to="/leeds">{{ $t('Dashboard.Header.Menu.Leeds') }}</NuxtLink></li>
        <HeaderDropDown :name="$t('Dashboard.Header.Menu.Reports')">
          <li><NuxtLink to="/leeds">Cliques</NuxtLink></li>
          <li><NuxtLink to="/leeds">Acessos</NuxtLink></li>
          <li><NuxtLink to="/leeds">Tempo</NuxtLink></li>
        </HeaderDropDown>
      </ul>
    </nav>
    <div class="profile">
      
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  background-color: var(--surface-overlay);
  border-bottom: 1px solid var(--surface-border);

  .logo-container {
    max-width: 150px;
    img {
      width: 100%;
    }
  }
  nav {
    width: 100%;
    ul {
      display: flex;
      gap: 8px;
      justify-content: flex-start;
      align-items: center;

      li {
        padding: 0px 16px;

        ul li {
          padding: 8px;
        }
      }
    }
  }
}
</style>
