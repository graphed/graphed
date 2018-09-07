<template>
</template>

<script>
export default {
  beforeMount () {
    let storage = window.localStorage

    if (storage.getItem('user') == null || storage.getItem('password') == null) {
      this.$router.push({ path: 'login' })
    } else {
      this.$router.push({ path: 'home' })
    }
  }
}
</script>


<style scoped>
</style>
