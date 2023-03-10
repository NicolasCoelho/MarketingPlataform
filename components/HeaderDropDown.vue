<template>
  <li @mouseover="hover" @mouseleave="leave">
    <span>{{ name }}</span>
    <ul v-show="showSubMenu">
      <div class="links-container">
        <slot></slot>
      </div>
    </ul>
  </li>
</template>
<script setup lang="ts">
const props = defineProps({
  name: { type: String, required: true },
})

let showSubMenu = ref(false)

const hover = () => {
  showSubMenu.value = true
}

const leave = () => {
  showSubMenu.value = false
}

</script>
<style lang="scss" scoped>
span {
  cursor: default;
}
li {
  position: relative;
  ul {
    position: absolute;
    width: 200px;
    left: 8px;
    top: 0;
    background-color: initial;
    padding-top: 32px;

    .links-container {
      
      border-bottom: 1px solid var(--surface-border);  
      display: flex;
      gap: 8px;
      background: var(--surface-overlay);
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
    }
  }
}
</style>