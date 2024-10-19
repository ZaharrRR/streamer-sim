import { defineStore } from 'pinia'

import type { ChatMessage, ChatMessageStatus, Stream } from '@/domain/stream'

import { usernames, badMessages, goodMessages } from '@/consts'

import { usePlayerStore } from './playerStore'

interface State {
  stream: Stream
  messages: ChatMessage[]
}

export const useStreamStore = defineStore('streamStore', {
  state: (): State => ({
    stream: {
      title: 'Lose strick run. Now 7, goal 20',
      content: 'Dota 2',
      views: 2,
      rating: 20,
    },
    messages: [],
  }),
  getters: {},

  actions: {
    async addMessage(message: ChatMessage) {
      this.messages.push(message)
    },

    async generateChatMessage(status: ChatMessageStatus) {
      const randomUsername =
        usernames[Math.floor(Math.random() * usernames.length)]
      const randomMessage =
        status === 'GOOD'
          ? goodMessages[Math.floor(Math.random() * goodMessages.length)]
          : badMessages[Math.floor(Math.random() * badMessages.length)]

      this.messages.push({
        username: randomUsername,
        text: randomMessage,
        status: status,
      })
    },

    async updateStreamRating() {
      const playerStore = usePlayerStore()
      this.stream.rating = (playerStore.player.skillPoint.value / 100) * 100
    },

    async updateViewCount() {
      this.stream.views += Math.floor(
        3 * (this.stream.rating / 100) * Math.random(),
      )
    },
  },
})
