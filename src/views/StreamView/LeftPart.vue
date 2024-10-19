<template>
  <div class="stream-left-part">
    <div class="stream-content">
      <video autoplay loop muted playsinline class="game-video">
        <source src="/content/dota2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="stream-info">
      <div class="info-data">
        <img :src="player.avaImg" alt="player ava" class="data-ava" />

        <div class="flex flex-col gap-1">
          <p class="text-2xl">{{ player.name }}</p>
          <p>{{ stream.title }}</p>
        </div>
      </div>

      <div class="info-stats">
        <div class="flex items-center gap-3">
          <p class="stats-money">{{ player.money }} $</p>
          <p class="stats-views">{{ stream.views }} online</p>
          <p class="stats-time">2h {{ stream.rating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/playerStore'
import { useStreamStore } from '@/stores/streamStore'

const { player } = usePlayerStore()
const { stream } = useStreamStore()
</script>

<style scoped>
.stream-left-part {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.stream-content {
  flex-grow: 1;
  padding: 16px;
  position: relative;
}

.game-video {
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
}

.stream-info {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;
  padding: 16px;

  border-top: 1px solid black;

  color: white;
}

.info-data {
  display: flex;
  gap: 24px;

  font-size: 20px;
  font-weight: 500;
}

.data-ava {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.info-stats {
}

.stats-views {
  color: rgb(238, 128, 128);
  font-weight: 700;
  font-size: 20px;
}

.stats-money {
  color: rgb(128, 238, 146);
  font-weight: 700;
  font-size: 20px;
}

.stats-time {
  font-size: 20px;
}
</style>
