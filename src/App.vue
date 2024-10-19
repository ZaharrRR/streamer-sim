<template>
  <RouterView v-if="!gameIsLoading" />

  <div v-else>game is loading...</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { RouterView } from 'vue-router'

import { useGameStore } from '@/stores/gameStore'
import { usePlayerStore } from '@/stores/playerStore'
import { useStreamStore } from '@/stores/streamStore'

const { gameState } = useGameStore()
const { changeSkillPoint } = usePlayerStore()
const { updateStreamRating, updateViewCount, generateChatMessage, stream } =
  useStreamStore()

const gameIsLoading = ref(true)

const skillPointReduce = () => {
  changeSkillPoint(-gameState.skillPointDecreaseRate)
}

onMounted(() => {
  setInterval(() => {
    skillPointReduce()
    updateStreamRating()
    updateViewCount()
  }, 1000)

  setInterval(() => {
    generateChatMessage(Math.random() < stream.rating / 100 ? 'GOOD' : 'BAD')
  }, 5000)

  gameIsLoading.value = false
})
</script>

<style scoped></style>
