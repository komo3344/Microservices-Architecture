<template>
<div>
<no-ssr>
  <full-calendar 
  />
</no-ssr>

</div>
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

    },
    handleSelect(e){

    }
  }
}
</script>

