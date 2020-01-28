<template>
<div>

  <!-- The Modal -->
  <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">할 일 추가</h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          할 일: <input type="text" id='task' placeholder="해야 할 일을 입력하세요." autofocus /> <br>
          <!-- <v-time-picker v-model="e4" color="green lighten-1"></v-time-picker> -->
          시작 시간: <input type="text" id='start_time' placeholder="시작 시간 (HH:MM)"/> <br>
          끝낼 시간: <input type="text" id='end_time' placeholder="끝낼 시간 (HH:MM)"/>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addTask()" >추가</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">닫기</button>
        </div>
        
      </div>
    </div>
  </div>

    <FullCalendar id ="myCalendar" data-toggle="modal" data-target="#myModal"
        defaultView="dayGridMonth"
        :plugins="calendarPlugins"
        :selectable="true"
        @select="handleSelect"
        @clickDate="handleDateClick"
    />
</div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction'
    export default {
        components: {
            FullCalendar, // make the <FullCalendar> tag available
        },
        data() {
            return {
              calendarPlugins: [ dayGridPlugin, interactionPlugin ],
              e4: null
            }
        },

        // 모달창 꺼질 때 입력값 초기화
        mounted(){
          $('.modal').on('hidden.bs.modal', function (e) {
            document.getElementById('task').value = null;
            document.getElementById('start_time').value = null;
            document.getElementById('end_time').value = null;
          });
        },
        methods:{
          handleDateClick(e){
          console.log(e);
          },
          
          handleSelect(e){
          console.log(e);
          },
          inputHandler (eventData) {
            console.log(eventData)
          },
          async addTask() {
          try{
            await this.$store.dispatch('addTask', {
              task: task.value,
              start_time: start_time.value,
              end_time: end_time.value
            })
          } catch (e){
            console.error(e)
          }
        }
      }
    }
</script>

<style lang='scss'>
@import '~/node_modules/@fullcalendar/core/main.css';
@import '~/node_modules/@fullcalendar/daygrid/main.css';
@import '~/node_modules/@fullcalendar/timegrid/main.css';
</style>