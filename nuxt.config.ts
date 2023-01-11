// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [ '@nuxtjs/tailwindcss' ],
  app: {
    head:{
      title: 'Next Dojo',
      meta: [
        {name: 'description' , content: 'Everthing about Nuxt 3'}
      ],
link: [ {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}, {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'} ]
    }
  }
})
