<script setup>
import { ref } from "vue";
var reader = ref("");

const example = ref(null);
const image = ref(false);
const preview = ref(null);

function read_file(file) {
  reader = new FileReader();
  reader.value.onload = (evt) => {
    console.log(evt.target.result);
  };
  reader.value.readAsText(file);
}
const readFile = () => {
  this.example = this.$refs.file.files[0];
  if (
    this.example.name.includes(".png") ||
    this.example.name.includes(".jpg")
  ) {
    this.image = true;
    this.preview = URL.createObjectURL(this.example);
  } else {
    this.image = false;
  }
};
</script>

<template>
  <div>
    <div style="border-style: solid">
      <input type=" file" ref="file" @change="readFile()" />
      <div v-if="Image">
        <img :src="preview" />
      </div>
    </div>
  </div>
</template>
