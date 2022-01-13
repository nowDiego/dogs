<template>
  <div class="home">
    <List :list="breeds" />
  </div>
</template>

<script>
import List from "@/components/List.vue";
import axios from "axios";

export default {
  name: "Home",

  mounted() {
    this.loadBreeds();
  },

  data() {
    return {
      breeds: null,
      limit: 50,
      page: 1,
    };
  },
  methods: {
    loadBreeds: function () {
      let self = this;

      axios
        .get("https://api.thedogapi.com/v1/breeds", {
          params: {
            limit: this.limit,
            page: this.page,
          },
        })
        .then(function (response) {
          console.log(response.data);
          self.breeds = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {
    List,
  },
};
</script>
