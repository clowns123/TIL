<div id="app">
  <button v-on:click="onClick">클릭미!</button>
</div>

<script>
  var vm = new Vue({
    el: "#app",
    methods: {
      onClick: function () {
        alert("Hello world")
      },
    },
  })
</script>