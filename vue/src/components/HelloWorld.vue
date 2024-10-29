<script setup>
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-date-picker';
import '@esri/calcite-components/dist/components/calcite-icon';
</script>


<template>
  <div class="hello">
    <calcite-icon icon="banana"></calcite-icon>
    <calcite-date-picker range></calcite-date-picker>
    <calcite-button icon-start="road-sign" scale="l" round appearance="outline">Button</calcite-button>
  </div>
</template>

<style src="@esri/calcite-components/dist/calcite/calcite.css"></style>