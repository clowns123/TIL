<div id="app">{% raw %}{{ msg }}{% endraw %}</div>

<script>
  var vm = new Vue({
    el: "#app",
    data: {
      msg: "Hello world",
    },
  })
</script>