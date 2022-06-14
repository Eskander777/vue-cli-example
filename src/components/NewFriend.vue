<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="name" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" name="phone" id="phone" v-model="phone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="email" />
    </div>
    <button @click="addNewFriend">Add New friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", {
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>
