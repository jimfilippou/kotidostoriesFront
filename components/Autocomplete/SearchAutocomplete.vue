<template>
  <div class="autocomplete-container">
    <b-input-group class="search">
      <b-form-input
        id="autocomplete-input"
        v-model="input"
        @mouseup="toggleWidth"
        @blur="toggleWidth"
      />
      <b-input-group-append>
        <b-button>Search</b-button>
      </b-input-group-append>
    </b-input-group>
    <div :class="['autocomplete-list',!show?'hide':'']">
      <auto-complete-item
        v-for="suggestion in matches"
        :key="suggestion.id"
        :post="suggestion"
      />
    </div>
  </div>
</template>

<script>
  import AutoCompleteItem from "./AutoCompleteItem";

  export default {
    name: "SearchAutocomplete",
    components: {AutoCompleteItem},
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        open: false,
        current: 0,
        input: "",
        matches: []
      }
    },
    watch: {
      input: function () {
        {
          if (this.input.length > 1) {
            this.$axios.$get(`suggest?q='${this.input}'`)
              .then((response) => {
                console.log(response)
                this.matches = response;
              })
          }
          this.matches = [];
        }
      }
    },
    methods: {
      toggleWidth(event) {
        if (event.type === 'mouseup') {
          event.target.parentElement.parentElement.style.width =
            event.target.parentElement.nextElementSibling.style.width = "40%";
        } else {
          event.target.parentElement.parentElement.style.width =
            event.target.parentElement.nextElementSibling.style.width = "20%";

        }
      }
    },
  }
</script>

<style scoped>
  .autocomplete-container, .autocomplete-list {
    min-width: 30%;
    transition: ease 0.2s;
  }

  .input-group-append button {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .hide {
    display: none;
  }

  .autocomplete-list {

    list-style: none;
    position: absolute;
    margin-top: 20px;
    padding: 0;
    text-align: center;
    box-shadow: var(--soft-shadow);
    z-index: 1;
  }

  .search input {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    box-shadow: 0 0 1px 0px white inset, 0 0 1px 0px white;
    color: var(--soft-primary-text);
    background-color: var(--bg);
  }

</style>
