<template>
  <div class="game">
    <div class="computer" @click="$router.push('/screen')">Computer</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.game {
  width: 1280px;
  margin: 0 auto;
  padding: 24px 36px;

  display: flex;
  gap: 12px;

  user-select: none;
}
.computer {
  width: 600px;
  height: 300px;
  margin: 0 auto;

  background-color: #474747;
  border-radius: 12px;
  text-align: center;
}
</style>
