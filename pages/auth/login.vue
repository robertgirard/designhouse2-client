<template>
  <!-- Section Cards -->
  <section class="authentication">
      <div class="auth-body">
          <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
              Login
          </h1>
          <form class="auth-form" @submit.prevent="submit">
            <alert-error v-if="form.errors.has('message')" :form="form">
                {{ form.errors.get('message') }}
                <nuxt-link :to="{ name: 'verification.resend' }"
                  >Resend verification email</nuxt-link
                >
              </alert-error>
              <div class="form-group">
                <base-input
                  :form="form"
                  field="email"
                  v-model="form.email"
                  placeholder="Email"
                >
                </base-input>
              </div>
              <div class="form-group">
                <base-input
                  :form="form"
                  field="password"
                  v-model="form.password"
                  placeholder="Password"
                  inputType="password"
                 >
                </base-input>
              </div>
              <div class="mt-4 mb-4 clearfix">
                  <nuxt-link to="/password/email" class="forgot-pass color-blue font-14 fw-400"> Forgot password? </nuxt-link>
              </div>
              <div class="text-right">
                  <base-button
                    :block=true
                    :loading="form.busy"
                    >
                    Login
                  </base-button>
              </div>
              <p class="font-14 fw-400 text-center mt-4">
                  Don't have an account yet?
                  <nuxt-link :to="{name: 'register'}" class="color-blue"> Create an account</nuxt-link>
              </p>
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
      form: this.$vform({
        email: '',
        password: '',
        busy: false
     })
    }
  },

  methods: {
    async submit(){
      this.form.busy = true
      await this.$auth.loginWith('laravelSanctum', {
        data: this.form
      }).then( response => {
        console.log(response)
        console.log(this.$auth)
      }).catch(error => {
//        console.log(error.response.data.errors)
        this.form.errors.set(error.response.data.errors)
      })
      this.form.busy = false
    }
  }
}
</script>

<style>

</style>
