<template>
<div class="Home">
  <QHeader>
    <div><router-link to="/Quiz">TO QUIZ</router-link></div>
  </QHeader>
  <div class="main">
  </div>
</div>
</template>

<script>
import QHeader from './QHeader'

export default {
  name: 'Home',
  components: {
    QHeader
  }
}
</script>

<style>
.Home {
  min-height: 100vh;
  background-color: rgb(195, 224, 250);
}
</style>
