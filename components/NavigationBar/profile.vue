<template>
  <div class="dropprof">
    <font-awesome-icon
      id="theme-icon"
      :icon="icon"
      size="2x"
      @click="toggleTheme"
    />
    <b-dropdown
      class="profile-dropdown"
      no-caret
      right
      size="lg"
      toggle-class="text-decoration-none"
      variant="link"
    >
      <template #button-content>
        <div id="icon-container">
          <b-icon
            id="icon"
            icon="person"
          />
        </div>
      </template>
      <div v-if="this.$auth.loggedIn">
        <a />
        <b-dropdown-item :href="'/user/'+profile_name">
          Profile
        </b-dropdown-item>
        <b-dropdown-item href="/TextEditor">
          New Post
        </b-dropdown-item>
        <b-dropdown-item @click="logout">
          Logout
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        </b-dropdown-item>
      </div>
      <div v-else>
        <b-dropdown-item href="/">
          Log in / Sign up!
        </b-dropdown-item>
      </div>
    </b-dropdown>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {BootstrapVueIcons} from 'bootstrap-vue'

  Vue.use(BootstrapVueIcons);
  export default {
    data() {
      return {
        profile_name: this.$auth.loggedIn ? this.$auth.user.username : '',
        icon: this.$colorMode.value==="dark"? ['fas', 'sun'] :['fas','moon']

      }
    },
    methods: {
      async logout() {
        await this.$auth.logout();
        await this.$router.push('/')

      },
      toggleTheme() {
        if (this.$colorMode.preference === "dark") {
          this.$colorMode.preference = "light";
          this.icon = ['fas', 'moon']
        } else {
          this.$colorMode.preference = "dark";
          this.icon = ['fas', 'sun']
        }
      }
    }
  }
</script>

<style scoped>

  #icon {
    color: #ffffff;
    background-size: 938px 318px;
    height: 50px;
    width: 50px;
  }

  #icon-container {
    width: 100%;
    height: 100%;
  }

  .dropprof {
    padding-right: 5px;
  }

  #theme-icon {
    color: white;
    margin-bottom: -6px;
    transition: ease-in 0.5s;
  }

</style>
