<template>
  <section class="authentication">
      <div class="auth-body">
          <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
              Reset Password
          </h1>
          <form class="auth-form" @submit.prevent="submit">
              <alert-success :form="form">{{ status }}</alert-success>
              <div class="form-group">
                <base-input
                  :form="form"
                  field="email"
                  v-model="form.email"
                  placeholder="Email"
                >
                </base-input>
<!--
                  <input
                      type="text"
                      :form="form"
                      field="email"
                      v-model="form.email"
                      class="form-control form-control-lg font-14 fw-300"
                      :class="{ 'is-invalid': form.errors.has('email') }"
                      placeholder="Email"
                  />
                  <has-error :form="form" field="email"></has-error>
-->
              </div>
              <!--

              <div class="mt-4 mb-4 clearfix">
                  <a class="forgot-pass color-blue font-14 fw-400" href="#"> Forgot password? </a>
              </div>
              -->
              <div class="text-right">
                <base-button
                  :loading="form.busy"
                  :block=true>
                  Send Reset Link
                </base-button>
              </div>
              <p class="font-14 fw-400 text-center mt-4">
                  <nuxt-link :to="{name: 'login'}" class="color-blue">
                    Back to Login
                  </nuxt-link>
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
      status: '',
      form: this.$vform({
        email: ''
      })
    }
  },
  methods: {
    submit(){
      this.form.post('/password/email')
        .then(response => {
          this.status = response.data.status
          this.form.reset()
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>

