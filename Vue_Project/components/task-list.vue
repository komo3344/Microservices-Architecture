<template>
  <div class="panel-block field has-addons">
    <p class="control is-expanded">
      <label class="checkbox">
        <input type="checkbox" @change="toggle({task, $event})">{{task.text}}
      </label>
    </p>
    <p class="control">
      <a class="delete" @click="remove(task)"></a>
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['task'],
  methods: {
    ...mapMutations({
      toggle: 'tasks/toggle',
      remove: 'tasks/remove'
    })
  }
}
</script>