<template>
  <GameSlot>
    <template v-slot="fooProps">
      <div>{{ fooProps }}</div>
    </template>
  </GameSlot>
</template>

<script setup>
import GameSlot from "@/components/slot/GameSlot.vue";
</script>
