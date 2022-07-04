<template>
  <dialog-base
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunately at least one input value is invalid</p>
      <p>Please check all inputs!</p>
    </template>
    <template #actions>
      <button-base @click="confirmError">Okay</button-base>
    </template>
  </dialog-base>
  <card-base>
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" name="title" ref="inputTitile" />
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <textarea id="desc" type="text" name="desc" ref="inputDesc"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="url" name="link" ref="inputLink" />
      </div>
      <div>
        <button-base @click.prevent="addNewResource" type="submit"
          >Add Resource</button-base
        >
      </div>
    </form>
  </card-base>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return { inputIsInvalid: false };
  },
  methods: {
    addNewResource() {
      const title = getRefValue(this.$refs.inputTitile);
      const description = getRefValue(this.$refs.inputDesc);
      const link = getRefValue(this.$refs.inputLink);

      if (isEmpty(title) || isEmpty(description) || isEmpty(link)) {
        this.inputIsInvalid = true;
        return;
      }

      const newResource = createResource(title, description, link);

      this.addResource(newResource);

      deleteRefValue(this.$refs.inputTitile);
      deleteRefValue(this.$refs.inputDesc);
      deleteRefValue(this.$refs.inputLink);
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};

function isEmpty(str) {
  return str.trim() === '';
}

function createResource(title, desc, link) {
  return {
    id: new Date().toISOString(),
    title,
    description: desc,
    link,
  };
}

function getRefValue(ref) {
  return ref.value;
}

function deleteRefValue(ref) {
  ref.value = '';
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
