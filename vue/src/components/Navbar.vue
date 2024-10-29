<script setup>
import '@esri/calcite-components/dist/components/calcite-navigation';
import '@esri/calcite-components/dist/components/calcite-navigation-logo';
import '@esri/calcite-components/dist/components/calcite-menu';
import '@esri/calcite-components/dist/components/calcite-menu-item';

</script>


<template>
  <calcite-navigation slot="header">
    <calcite-navigation-logo slot="logo" icon="running" heading="Run Planner"
      description="Developed by Ben Beattie | October 26th 2024">He</calcite-navigation-logo>
    <calcite-menu slot="content-end">
      <calcite-menu-item icon-start="zoom-to-object" text="Reading, PA"></calcite-menu-item>
      <calcite-menu-item icon-start="zoom-to-object" text="Lancaster, PA"></calcite-menu-item>
    </calcite-menu>
  </calcite-navigation>
</template>

<style></style>