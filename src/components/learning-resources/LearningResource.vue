<template>
  <li>
    <card-base>
      <header>
        <h3>{{ resource.title }}</h3>
        <button-base
          :itemId="resource.id"
          buttonTitle="Delete"
          mode="flat"
          @click="deleteResource(resource.id)"
        >
          Delete
        </button-base>
      </header>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href="resource.link" target="_blank">View Resource</a>
      </nav>
    </card-base>
  </li>
</template>

<script>
export default {
  props: { resource: { type: Object, required: true } },
  inject: ['deleteResource'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
