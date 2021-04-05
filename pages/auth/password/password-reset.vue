<template>
  <section class="authentication">
      <div class="auth-body">
          <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
              Reset Password
          </h1>
          <form class="auth-form" @submit.prevent="submit">
              <alert-success :form="form">
                {{ status }}
                <p>
                  <nuxt-link to="/login">Proceed to Login</nuxt-link>
                </p>
              </alert-success>
              <div class="form-group">
                <base-input
                  :form="form"
                  field="email"
                  v-model="form.email"
                  placeholder="Email"
                  readonly="true"
                >
                </base-input>
              </div>
              <div class="form-group">
                <base-input
                  :form="form"
                  field="password"
                  v-model.trim="form.password"
                  placeholder="Password"
                  inputType="password"
                >
                </base-input>
              </div>
              <div class="form-group">
                  <base-input
                    :form="form"
                    field="password_confirmation"
                    v-model.trim="form.password_confirmation"
                    placeholder="Password Confirmation"
                    inputType="password"
                  >
                  </base-input>
              </div>
              <div class="text-right">
                <base-button
                  :loading="form.busy"
                  :block=true>
                  Reset Password
                </base-button>
              </div>
           </form>
      </div>
  </section>
  <!-- End Cards -->
</template>

<script>
export default {
  middleware: ['guest'],
  data(){
    return {
      status: '',
      form: this.$vform({
        email: '',
        password: '',
        password_confirmation: '',
        token: ''
      })
    }
  },

  methods: {
    submit(){
      this.form.post('/password/reset')
        .then(response => {
          this.status = response.data.status
          this.form.reset()
      }).catch(error => {
        console.log(error)
      })
    }
  },

  created(){
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  }
}
</script>

<style>

</style>

