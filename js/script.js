new Vue({
  el: '#app',
  data: {
    items: [],  
    newKeep: ""
  },
  methods:{
    addKeep: function(){
      this.items.push({ keep: this.newKeep, completed: false })
      this.newKeep = ''
    }
  },
  filters: {
    json: (value) => { return JSON.stringify(value, null, 2) }
  }
})