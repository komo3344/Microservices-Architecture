<template>
<no-ssr>
  <full-calendar 
  />
</no-ssr>
</template>


<script>

export default {
  middleware: 'auth',
  
  data () {
    return {

    }
  },
  methods:{
    handleDateClick(e){
      console.log(arg);
      alert(arg.date)
    },
    handleSelect(e){
      console.log(e);
    }
  }
}
</script>

