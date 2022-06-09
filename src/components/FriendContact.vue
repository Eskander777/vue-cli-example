<template>
  <li>
    <h2>{{ friend.name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavourite">Toggle Favourite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ["friend"],
  props: {
    friend: {
      type: Object,
      required: true,
      validator(value) {
        if (Object.keys(value).includes("name")) return true;
        return false;
      },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      isFavourite: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
      this.isFavourite = !this.isFavourite;
    },
  },
};
</script>
