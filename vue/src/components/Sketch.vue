<script setup>
import "@arcgis/map-components/dist/components/arcgis-sketch";
import "@arcgis/map-components/dist/components/arcgis-placement";
import '@esri/calcite-components/dist/components/calcite-chip';

import { ref } from 'vue'

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import Polyline from "@arcgis/core/geometry/Polyline.js";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol.js";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol.js";

const sketchGraphicsLayer = new GraphicsLayer();
const sketchWidget = ref()
let distance = ref(0)

function setSketchProperties() {
    sketchWidget.value.layout = "vertical"
    sketchWidget.value.availableCreateTools = ["polyline"]
    sketchWidget.value.hideSelectionToolsLassoSelection = true
    sketchWidget.value.hideSelectionToolsRectangleSelection = true
    sketchWidget.value.hideSettingsMenu = true
    sketchWidget.value.layer = sketchGraphicsLayer
}

function logSketchDistance(e) {
    const { paths } = e.target.createGraphic.geometry;
    if (paths[0].length > 1) {
        const polyline = new Polyline({ paths });
        let length = geometryEngine.planarLength(polyline);
        distance.value = (length / 1609).toFixed(2)
        console.log(e);
    }
}

</script>

<template>

    <arcgis-sketch @arcgisCreate="logSketchDistance" @arcgisReady="setSketchProperties" ref="sketchWidget"
        position="top-right"></arcgis-sketch>
  <arcgis-placement position="top-left">
    <calcite-chip scale="l" icon="measure-line">{{ distance ? distance + " Miles" : "Start drawing to see distance" }}</calcite-chip>
  </arcgis-placement>
</template>