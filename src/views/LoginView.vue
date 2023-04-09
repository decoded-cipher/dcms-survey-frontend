<template>
  <div class="login">
    <Login @userLogin="userLogin" />
  </div>
</template>

<script>

  import Login from '@/components/Login.vue';

  export default {
    name: 'LoginView',
    components: {
      Login
    },
    methods: {
      async userLogin(user) {
        await fetch('http://localhost:3000/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
            // console.log(data);

            if (data.status === 200) {
              localStorage.setItem('token', data.token);
              this.$router.push('/');
            }

          })
          .catch(err => {
            console.log(err);
          });
      }
    }
    
  };
</script>