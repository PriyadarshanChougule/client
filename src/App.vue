<template>
  <div>
    <RouterView style="z-index: 999;"></RouterView>
  </div>
</template>

<script>
import chatIcon from './assets/chatIcon_1.png'
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      appName:"Lets Chat",
      chatIcon:chatIcon
    }
  }
}
</script>

<style>

</style>
