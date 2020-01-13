<template>
    <FullCalendar 
        defaultView="dayGridMonth"
        :plugins="calendarPlugins"
        
        :selectable="true"
        @select="handleSelect"
        @clickDate="handleDateClick"
        @dateClick="handleDateClick1"
    />
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import interactionPlugin from '@fullcalendar/interaction'
    export default {
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data() {
            return {
                calendarPlugins: [ dayGridPlugin, interactionPlugin ]
            }
        },
        methods:{
            handleDateClick(e){
            console.log(e);
            
            },
            handleSelect(e){
            console.log(e);
            },
            handleDateClick1(arg){
            alert(arg.date)
            },
        }
    }
</script>
<style lang='scss'>

@import '~/node_modules/@fullcalendar/core/main.css';
@import '~/node_modules/@fullcalendar/daygrid/main.css';
@import '~/node_modules/@fullcalendar/timegrid/main.css';
</style>