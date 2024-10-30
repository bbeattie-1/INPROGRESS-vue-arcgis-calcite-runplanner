<script setup>
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-track";
import Sketch from './Sketch.vue'
</script>

<template>
    <arcgis-map basemap="hybrid" center="-77, 41" zoom="6">
        <arcgis-track id="user-location-widget" position="top-right" icon="gps-on-f"></arcgis-track>
        <Sketch/>
    </arcgis-map>
</template>

<style>

</style>