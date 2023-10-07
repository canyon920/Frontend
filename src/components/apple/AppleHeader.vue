<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  model: Object,
});

const isOpen = ref(false);

const isFolder = computed(() => {
  return props.model.children && props.model.children.length;
});

function toggle() {
  isOpen.value = !isOpen.value;
}

function changeType() {
  if (!isFolder.value) {
    this.props.model.children = [];
    addChild();
    isOpen.value = true;
  }
}

function addChild() {
  this.props.model.children.push({ name: "new stuff" });
}
</script>

<template>
  <ul>
    <li>
      <ul
        :class="{ bold: isFolder }"
        @click="toggle"
        @dblclick="changeType"
        style="margin-left: 20px; margin-top: 10px"
      >
        {{
          model.name
        }}
        <!--      <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>-->
      </ul>
      <ul v-show="isOpen" v-if="isFolder" class="apple_header_main">
        <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
        <AppleHeader
          class="item"
          v-for="model in model.children"
          :key="model"
          :model="model"
        >
        </AppleHeader>
        <li class="add" @click="addChild">+</li>
      </ul>
    </li>
  </ul>
</template>

<style>
@import "../../../public/style/appHeader.scss";
</style>
