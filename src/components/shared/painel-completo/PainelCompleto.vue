<template>
    
    <div>
      <br>
      <table class= "tabela table table-dark ">
        <tbody>
          <tr>
            <td> Nome:  {{ name }}</td>
          </tr>
          <tr>
            <td> Usuário:  {{ username }}</td>
          </tr>
          <tr>
            <td> Email:  {{ email }}</td>
          </tr>
          <tr>
            <td> Telefone:  {{ phone }}</td>
          </tr>
          <tr>
            <td> WebSite:  {{ website }}</td>
          </tr>
        </tbody>
      </table>

      <br>
      <h2>Endereço</h2>

      <table class= "tabela table table-dark ">
        <tbody>
          <tr>
            <td> Rua:  {{ addressStreet }}</td>
          </tr>
          <tr>
            <td> Complemente:  {{ addressSuite }}</td>
          </tr>
          <tr>
            <td> Cidade:  {{ addressCity }}</td>
          </tr>
          <tr>
            <td> Código Postal:  {{ addressZipcode }}</td>
          </tr>
          <tr>
            <td> Latitude:  {{ addressGeoLat }}</td>
          </tr>
          <tr>
            <td> Longitude:  {{ addressGeoLng }}</td>
          </tr>
        </tbody>
      </table>

      <br>
      <h2>Local de Trabalho</h2>

      <table class= "tabela table table-dark ">
        <tbody>
          <tr>
            <td> Nome:  {{ companyName }}</td>
          </tr>
          <tr>
            <td> Slogan:  {{ companyCatchPhrase }}</td>
          </tr>
          <tr>
            <td> Proposito:  {{ companyBs }}</td>
          </tr>

        </tbody>
      </table>
      <slot></slot>
    </div>
</template>

<script>

export default {
    
  props: ['name', 'username', 'email', 'phone', 'website', 'addressStreet', 
        'addressSuite', 'addressCity', 'addressZipcode', 'addressGeoLat', 'addressGeoLng',
        'companyName', 'companyCatchPhrase', 'companyBs']
}

</script>

<style scoped>

  
</style>

