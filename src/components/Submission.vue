<template>
  <div class="hello">
     <h1>{{ msg }}</h1>
      <p>
      How happy do you feel right now?
    </p>
    <input type="text" placeholder="....." v-model="individualHappiness">
       <p>
      How happy do you think your team feels right now?
    </p>
    <input type="text" placeholder="....." v-model="teamHappiness"> 
     <p>

    </p>
    <button v-on:click ="Submit" v-bind:enabled = "btnState">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'Invitation',

  data(){
    return{
      msg: 'Please submit your Happiness!',
      individualHappiness: '',
      teamHappiness: '',
      btnState:true
    }
  }

  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
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

input{
  width: calc(100% - 1300px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: black;
  color:aquamarine
}
button{
  padding: 10px;
  text-decoration: none;
  background: black;
  border-radius: 3px;
  color:red;
  font-weight: bold;
  margin-right: 15px;
}

</style>
