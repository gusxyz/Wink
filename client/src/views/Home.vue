<template>
  <div class="home">
    <h1 class="title">WINK</h1>
    <p>Link shortening in a wink ;)</p>
    <input type="text" class="linkInput" v-model="link">  <button v-on:click="createLink(link)">Create Link</button>
  </div>
</template>

<script>
window.validUrl = require('valid-url');
window.fetch = require('fetch');

export default {

  name: 'home',
  data() {
    return {
      link: ''
    }
  },
  methods: {
    createLink: function(url) {
      if (window.validUrl.isUri(url)){
        console.log('Looks like an URI');
      } else {
        console.log('Not a URI');
      }
    }
  }
};
</script>

<style>
.title {
  font-size: 100px;
}
.linkInput {
  width: 500px;
  height: 20px;
  border: none;
}

button {
  background-color: #34495e; 
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  height: 22px;
}
</style>

