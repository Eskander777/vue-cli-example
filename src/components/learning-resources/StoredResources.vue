<template>
  <ul v-if="resources.length > 0">
    <learning-resource
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    >
    </learning-resource>
  </ul>
  <card-base v-else>
    <p>No learning resources</p>
  </card-base>
</template>

<script>
import LearningResource from './LearningResource.vue';
import CardBase from '../ui/CardBase.vue';

export default {
  inject: ['resources'],
  components: { LearningResource, CardBase },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
