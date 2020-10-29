<template>
  <div
    class="content"
    @mouseup="closePopUp"
  >
    <navbar
      id="nav"
      :show="show"
    />
    <nuxt />
  </div>
</template>

<script>
  import navbar from "../components/NavigationBar/navbar";

  export default {
    components: {
      navbar
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      closePopUp(event) {
        this.show = event.target.id === 'autocomplete-input'
      }
    }
  }
</script>

<style lang="scss" scoped>

  :root {
    --soft-shadow: 0 0 5px 0 #888;
    --title-font: 'Zilla Slab', serif, arial;
  }

  .ProseMirror-focused {
    outline: none !important;
  }

  .ProseMirror:focus {
    outline: none !important;
  }

  * {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  .custom-nav {
    padding: 0;
  }


  .email-button-container {
    padding: 5px !important;
  }

  .date-info {
    text-align: right;
    font-size: 10px;
    color: #7f828b;
    position: relative;
    bottom: 0;

    a {
      font-size: inherit;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: var(--soft-primary-text);

      }
    }
  }


  .profile-dropdown a[role] {
    &:hover {
      background-color: #e7d0e7;
    }

    &:active {
      background-color: #950ca0;
    }
  }

  #donate-modal .modal-body {
    height: 110px;
  }

  .fade-out-enter-active, .fade-out-leave-active {
    transition: all .3s ease;
  }

  .fade-out-enter, .fade-out-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

</style>
