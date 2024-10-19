<template>
  <div class="chat">
    <div class="chat-head">
      <h2>Chat</h2>
    </div>

    <div class="chat-main">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="chat-message"
      >
        <span class="message-author">{{ message.username }}:</span>
        <span class="message-text">{{ message.text }}</span>
      </div>
    </div>

    <div class="chat-actions">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type your message..."
        class="message-input"
      />
      <button @click="sendMessage" class="send-button">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePlayerStore } from '@/stores/playerStore'
import { useStreamStore } from '@/stores/streamStore'

const { player } = usePlayerStore()
const { messages, addMessage } = useStreamStore()

const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim()) {
    addMessage({
      username: player.name,
      text: newMessage.value,
      status: 'GOOD',
    })
    newMessage.value = ''
  }
}
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100%;
  background-color: #333;
  color: white;
  overflow: hidden;
}

.chat-head {
  padding: 16px;
  background-color: #333;
  border-bottom: 1px solid #2a2a2e;
  text-align: center;
}

.chat-main {
  flex-grow: 1;
  padding: 16px;
  overflow-y: auto;
}

.chat-message {
  margin-bottom: 8px;
}

.message-author {
  font-weight: bold;
  margin-right: 8px;
  color: #9147ff;
}

.message-text {
  color: #d1d1d1;
}

.chat-actions {
  display: flex;
  padding: 16px;
  border-top: 1px solid #2a2a2e;
}

.message-input {
  flex-grow: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #3a3a3d;
  color: white;
  outline: none;
}

.send-button {
  margin-left: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #9147ff;
  color: white;
  cursor: pointer;
}

.send-button:hover {
  background-color: #772ce8;
}
</style>
