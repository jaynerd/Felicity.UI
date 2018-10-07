<template>
  <div class="hello" align="center">
       <img alt="Vue logo" src="./felicity cropped.png">
     <h1>{{ msg }}</h1>
      <p>
      Please enter your team invitation code below!
    </p>
    <input type="text" placeholder="Code...">
    <nav>
      <router-link to ="/submission">Submit</router-link>
     </nav>  
  </div>
</template>

<script>
export default {
  name: "Invitation",

  data() {
    return {
      msg: "Welcome to Felicity",
      invitatationCode: String
    };
  }

  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin: auto;
}
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {
  width: calc(100% - 1300px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: black;
  color: aquamarine;
}
</style>
