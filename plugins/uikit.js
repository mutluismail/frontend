import Vue from 'vue'
    
import UIkit from 'uikit/dist/js/uikit-core'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit

Add the following sections to your `nuxt.config.js` file:

// nuxt.config.js

export default {
 css: [
    'uikit/dist/css/uikit.min.css',
    '@assets/css/main.css'
  ],

  plugins: [
    { src: '~/plugins/uikit.js', ssr: false }
  ]
}

As you can see, you are including both UIkit and `main.css` files! We just need to create the `./frontend/assets/css/main.css` file.

a {
  text-decoration: none;
}

h1  {
  font-family: Staatliches;
  font-size: 120px;
}

#category {
   font-family: Staatliches;
   font-weight: 500;
}

#title {
  letter-spacing: .4px;
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 1.13636;
}

#banner {
  margin: 20px;
  height: 800px;
}

#editor {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
}

.uk-navbar-container {
  background: #fff !important;
  font-family: Staatliches;
}

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}

**Note:** You don't need to understand what's in this file. It's just some styling ;)

Let's add a beautiful font [Staatliches](https://fonts.google.com/specimen/Staatliches) to the project! Add the following code to your `link` section in your `nuxt.config.js`

// nuxt.config.js

export default {
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' }
  ],
}