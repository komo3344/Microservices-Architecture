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
                <!-- <div class='input-group date' id='datetimepicker3'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-time"></span>
                    </span>
                </div> -->
        <div class="md-form">
          <input placeholder="Selected time" type="text" id="input_starttime" class="form-control timepicker">
          <label for="input_starttime">Light version, 12hours</label>
        </div>
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
  // $('#datetimepicker3').timepicker({
  //   showInputs: false
  // });
  $('#input_starttime').pickatime({});
    export default {
        components: {
            FullCalendar, // make the <FullCalendar> tag available
        },
        data() {
            return {
              calendarPlugins: [ dayGridPlugin, interactionPlugin ],
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

