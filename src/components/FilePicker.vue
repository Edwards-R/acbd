<template>
  <v-file-input
    v-model="inputFile"
    label="File input"
    @change="ReadFile"
  />

  <div>
    {{ rawInputData }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import xlsx from "xlsx";

const inputFile = ref();
const rawInputData = ref();

function ReadFile(){
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(inputFile.value);
    fileReader.onload = () => {
        const fileResult = fileReader.result;
        const wb = xlsx.read(fileResult);
        const ws = wb.Sheets[
            wb.SheetNames[0]
        ];
        rawInputData.value = xlsx.utils.sheet_to_json(ws, {header: 1});
    }
}
</script>