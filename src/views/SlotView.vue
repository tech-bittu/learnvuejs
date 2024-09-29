<script setup>
import FallbackSlot from '@/components/slot/FallbackSlotComponents.vue'
import NamedSlot from '@/components/slot/NamedSlotComponents.vue'
</script>
<template>
<FallbackSlot>
    <p>This is inside Fallback.</p>
</FallbackSlot>
<NamedSlot>
    <template  v-slot:first></template>
    <template #second></template>
    <template #default>This is default template</template>
</NamedSlot>
</template>