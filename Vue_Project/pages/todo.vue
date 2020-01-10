<template>
  <section class="container">
    <div>
      
  <!-- Button to Open the Modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    할 일 추가하기
  </button>

  <!-- The Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">할 일 추가</h4>
          <button type="button btn-block" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <input type="text" class="form-control" id="todo" placeholder="할 일을 입력하세요" autofocus='true' required>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" v-on:click="add" class="btn btn-primary" data-dismiss="modal">추가</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">닫기</button>
        </div>
     
      </div>
    </div>
  </div>
<br>

    {{task}}
      
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get('http://localhost:8000/todos/')
      .then((res) => {
        console.log(res.data[0].task)
        return { task: res.data[0].task }
      })
  },
  methods: {
    async add() { // 비동기로 todo add 처리
      try{
        await this.$store.dispatch('addTask', {task: todo.value})
      } 
      catch (e){
        console.error(e)
      }
    },
  }
}
</script>