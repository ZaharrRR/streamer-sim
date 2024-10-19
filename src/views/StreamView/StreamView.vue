<template>
  <div class="screen">
    <LeftPart />
    <ChatBar />
  </div>
</template>

<script setup lang="ts">
import LeftPart from './LeftPart.vue'

import { useGameStore } from '@/stores/gameStore'
import { usePlayerStore } from '@/stores/playerStore'
import { useStreamStore } from '@/stores/streamStore'
import ChatBar from './ChatBar.vue'

const {} = useGameStore()
const { player } = usePlayerStore()
const { stream, messages } = useStreamStore()
</script>

<style scoped>
.screen {
  width: 100vw;
  height: 100vh;

  display: flex;

  position: relative;
}
</style>
