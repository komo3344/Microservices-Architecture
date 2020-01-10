
<template>
  <div class="panel is-centered">
    <p class="panel-heading">
      To Do
      <span class="icon">
        <i class="fas fa-smile"></i>
      </span>
    </p>
    <new-task @submitted="submit" />
    <task-list v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script>
import NewTask from '@/components/new-task'
import TaskList from '@/components/task-list'
export default {
  components: {
    NewTask,
    TaskList
  },
  data() {
    return {
      tasks: this.$store.state.tasks.list
    }
  },
  methods: {
    submit(task) {
      this.$store.commit('tasks/add', task)
    }
  }
}
</script>