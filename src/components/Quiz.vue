<template>
<div class="Quiz">
  <QHeader>
    <div><router-link to="/">BACK HOME</router-link></div>
  </QHeader>
  <div class="main">
    <Question/>
  </div>
</div>
</template>

<script>
import QHeader from './QHeader'
import Question from './Question'

export default {
  name: 'Quiz',
  components: {
    QHeader,
    Question
  }
}
</script>

<style>
.Quiz {
  min-height: 100vh;
  background-color: rgb(132, 225, 194);
}
.main {
  display: flex;
  justify-content: center;
}
</style>
