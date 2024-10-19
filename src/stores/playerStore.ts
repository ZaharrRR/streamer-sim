import { defineStore } from 'pinia'

import type { Player } from '@/domain/player'

interface State {
  player: Player
}

export const usePlayerStore = defineStore('playerStore', {
  state: (): State => ({
    player: {
      name: 'Zaharik',
      avaImg:
        'https://i.ytimg.com/vi/rvX8cS-v2XM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCF0zNNCUpNmTYhJxWG7VWjmvmybA',
      money: 0,
      skillPoint: {
        value: 50,
        max: 100,
      },
    },
  }),
  getters: {},

  actions: {
    async changeSkillPoint(amount: number) {
      const newSkillPointValue = this.player.skillPoint.value + amount

      if (
        newSkillPointValue >= this.player.skillPoint.max ||
        newSkillPointValue <= 0
      ) {
        return
      }

      this.player.skillPoint.value = newSkillPointValue
    },
  },
})
