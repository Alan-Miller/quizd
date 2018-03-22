<template>
<div class="Question">
  <p class="Q">What is the best thing you have ever done?</p>
  <div class="ABox">
    <p class="A" @click="setAnswer('Save life')">Save someone's life</p>
    <p class="A" @click="setAnswer('Be friend')">Be a good friend</p>
    <p class="A" @click="setAnswer('Talk good')">Use proper English</p>
    <p class="A" @click="setAnswer('Not hit')">Not punch someone</p>
    <p class="Answer">{{answer ? `Answer: ${answer}` : null}}</p>
  </div>
</div>
</template>

<script>
import QHeader from './QHeader'

export default {
  name: 'Question',
  data() {
    return {
      answer: ''
    }
  },
  methods: {
    setAnswer(ans) {
      this.answer = ans
    }
  }
}
</script>

<style>
.Question {
  min-height: calc(100vh - 100px);
  width: 100vw;
}
.Q {
  background-color: rgba(0, 211, 140, 1);
  box-shadow: 0 3px 3px 0 rgba(0, 142, 84, 1);
  font-size: 2.4rem;
  padding: 30px;
  z-index: 1;
  position: relative;
}
.ABox {
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0 3px 3px 0 rgb(36, 135, 112); */
}
.A {
  background-color: #efefef;
  width: 55%;
  min-width: 500px;
  /* border-bottom: .5px solid rgb(36, 135, 112); */
  border-radius: 7px;
  padding: 20px;
  cursor: pointer;
  margin-top: 20px;
}
.A:hover {
  color: #ddd;
  background-color: rgb(36, 135, 112);
}
.Answer {
  padding: 20px;
  margin-top: 20px;
}
</style>
