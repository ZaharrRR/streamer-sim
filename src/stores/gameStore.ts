import { defineStore } from 'pinia'

import type { GameState } from '@/domain/content'

interface State {
  gameState: GameState
}

export const useGameStore = defineStore('gameStore', {
  state: (): State => ({
    gameState: {
      skillPointPerClick: 1,
      skillPointDecreaseRate: 0.5,
    },
  }),
  getters: {},

  actions: {},
})
