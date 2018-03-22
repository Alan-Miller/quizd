<template>
<header class='QHeader'>
  <div class='QLogoBox'>
    <span>Quizd!</span>
  </div>
  <slot></slot>
</header>
</template>

<script>
export default {
  name: 'QHeader',
  data() {
    return {
      // shadowColor: 'rgba(24, 42, 58, 1)'
    }
  }
}
</script>

<style>
header.QHeader {
  height: 100px;
  width: 100vw;
  background-color: rgba(45, 71, 96, 1);
  position: relative;
  box-shadow: 0 3px 3px 0 rgba(24, 42, 58, 1);
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.QLogoBox {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.QLogoBox span {
  font-size: 2.4rem;
  font-weight: bold;
  color: rgba(0, 201, 137, 1);
  transform: rotate(-20deg);
}
</style>
