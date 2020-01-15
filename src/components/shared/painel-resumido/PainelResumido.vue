<template>
    <div>
      <table class= " table table-dark ">
        <tbody>
          <tr>
            <td> Nome: {{ name }}</td>
          </tr>
          <tr>
            <td> Usuário: {{ username }}</td>
          </tr>
          <tr>
            <td> Email: {{ email }}</td>
          </tr>
        </tbody>
      </table>
      <slot></slot>
    </div>
</template>

<script>

export default {
    
  props: ['name', 'username', 'email']
}

</script>

<style scoped>

</style>

