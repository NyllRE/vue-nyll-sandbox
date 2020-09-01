const audioB = new Audio("Bruh.mp3");
var app = new Vue({
  el: "#app",
  data: {
    Nice: "nice.jpg",
    cat: "download.jpg",
    message: "a task",
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ],
    img: {
      height: "200px",
    },
    cart: 0,
    free: "مخدرات حسنات مجانا.jpg",
    showallow: false,
    fontSize: '100 px'
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    addToList() {
      app.todos.push({ text: this.message });
      app.message = "";
    },
    removeFromList(todo) {
      app.todos.splice(this.todos.indexOf(todo), 1);
    },
    play() {
      audioB.play();
    },
  },
  computed: {
    updateProduct(imageofproduct) {
      showallow = true;
    }
  }
});
