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
          할 일: <input type="text" placeholder="해야 할 일을 입력하세요."/>
          <v-layout row wrap>
            <v-flex md12 lg6>
              <v-time-picker v-model="e4" color="green lighten-1"></v-time-picker>
            </v-flex>
            <v-flex md12 lg6 class="hidden-xs-only">
              <v-time-picker v-model="e4" color="green lighten-1" header-color="primary"></v-time-picker>
            </v-flex>
        </v-layout>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">추가</button>
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
        methods:{
            handleDateClick(e){
            console.log(e);
            },
           
            handleSelect(e){
            console.log(e);
            },
            inputHandler (eventData) {
              console.log(eventData)
            }
        }
    }
</script>
<style lang='scss'>

@import '~/node_modules/@fullcalendar/core/main.css';
@import '~/node_modules/@fullcalendar/daygrid/main.css';
@import '~/node_modules/@fullcalendar/timegrid/main.css';
</style>

