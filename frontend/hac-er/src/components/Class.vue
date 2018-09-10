<template>
  <div class="table">
  <v-data-table
      :headers="headers"
      :items="this.$store.getters.getClass(Number(this.$route.params.id)).assignments"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.category }}</td>
        <td class="text-xs-right">{{ props.item.score }}</td>
        <td class="text-xs-right">{{ props.item.total_points }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Assignment Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Category',
          align: 'left',
          sortable: true,
          value: 'category'
        },
        {
          text: 'Score',
          align: 'left',
          sortable: true,
          value: 'score'
        },
        {
          text: 'Total Points',
          align: 'left',
          sortable: true,
          value: 'total_points'
        }
      ]
    }
  },
  mounted () {
    let storage = window.localStorage

    if (this.$store.state.classes.length === 0) {
      let username = storage.getItem('user')
      let password = storage.getItem('password')

      let formData = new FormData()
      formData.set('username', username)
      formData.set('password', password)

      axios({
        method: 'post',
        url: storage.getItem('url') + '/api/grades',
        data: formData
      }).then(response => {
        console.log(response)
        this.$store.commit('setClasses', response.data.classes)
        this.$store.commit('setAuth', response.data.auth_cookie)
        this.$store.commit('setSession', response.data.session_id)
      }).catch(error => {
        console.log(error)
        this.$router.push({ path: 'login' })
      })
    }
  }
}
</script>

<style scoped>
.table {
  max-width: 800px;
  margin: auto;
}
</style>
