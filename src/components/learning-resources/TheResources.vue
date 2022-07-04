<template>
  <card-base>
    <button-base
      @click="setSelectedTab('stored-resources')"
      :mode="storedResBtnMode"
      >Stored Resources</button-base
    >
    <button-base @click="setSelectedTab('add-resource')" :mode="addResBtnMode"
      >Add Resource</button-base
    >
  </card-base>
  <keep-alive>
    <component :is="selectedTab"> </component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab !== 'stored-resources' && 'flat';
    },
    addResBtnMode() {
      return this.selectedTab !== 'add-resource' && 'flat';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(resource) {
      this.storedResources.unshift(resource);
      this.setSelectedTab('stored-resources');
    },
    deleteResource(resId) {
      const resIndex = this.storedResources.findIndex(
        (resource) => resource === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
