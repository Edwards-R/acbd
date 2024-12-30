<template>
  <v-text-field
    v-model="gr"
    label="Label"
  />
</template>

<script setup lang="ts">
        import { osgr } from "@/utils/osgr"

    const gr = ref('TQ1235');
    
    const myGR = new osgr();
    try {
    myGR.ToGBEasting(gr.value);
    }catch{
        console.log("error happened")
    }

    
    
</script>