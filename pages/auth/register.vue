<template>
  <!-- Section Cards -->
  <section class="authentication">
      <div class="auth-body">
          <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
              Register
          </h1>
          <form class="auth-form" @submit.prevent="submit">
              <alert-success :form="form">
                We have sent you an e-mail to activate your account
              </alert-success>
              <div class="form-group">
                <base-input
                    :form="form"
                    field="name"
                    v-model.trim="form.name"
                    placeholder="Full Name"
                  >
                  </base-input>
               </div>
              <div class="form-group">
                  <base-input
                    :form="form"
                    field="username"
                    v-model.trim="form.username"
                    placeholder="Username"
                  >
                  </base-input>
              </div>
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
                  :block=true
                  :loading="form.busy"
                >
                  Register
                </base-button>
<!--
                  <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                      <span v-if="form.busy">
                        <i class="fas fa-spinner fa-spin"></i>
                      </span>
                      Register
                  </button>
-->
              </div>
              <p class="font-14 fw-400 text-center mt-4">
                  Already have an account?
                  <nuxt-link :to="{name: 'login'}" class="color-blue"> Login</nuxt-link>
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
        username: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        busy: false
      })
    }
  },
  methods: {
    submit(){
      console.log('submitting'),
      this.form.post('/register')
        .then(response => {
          this.form.reset()
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
