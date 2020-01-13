<template>
<no-ssr>
  <full-calendar 
  />
</no-ssr>
</template>


<script>

export default {
  mounted(){

  },
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

