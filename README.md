# 
> npm install -D @tailwindcss/forms  for forms styling
also in tailwind.config.css add the following code

  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],

  ## for icons heroicons.com 
  heroicons are from tailwind css creators

  > npm install @heroicons/react

  > npm i minifaker
  for fake data
  // https://www.npmjs.com/package/minifaker

  ## pravatar website for images

  https://i.pravatar.cc/150?img=3

  ## to remove scrollbar

  >npm install --save-dev tailwind-scrollbar

  require('tailwind-scrollbar'),

  ## To add custom classses in tailwindcss
  add this to global.css
 
 '''js
  @layer components {
    .btn {
        @apply h-7 hover:scale-125 transition-transform duration-200 ease-out cursor-pointer
    }
}
'''

## Google client id and secret obtained from google.cloud.com - dashboard- credentials

but first select your project created in firebase from the top dropdown on google.cloud.com

## recoil 
package like redux to manage global state

>npm install recoil

## react-MODAL
>npm install --save react-modal

## Important bug

NEXT_PUBLIC_FIREBASE_  needs to be added for all firebase keys in .env file

By default all environment variables loaded through .env.local are only available in the Node.js environment (in methods like getStaticProps), meaning they won't be exposed to the browser.

In order to expose a variable to the browser, you have to prefix the variable with NEXT_PUBLIC_. For example:

NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk

## react-moment for timestamps

>npm install --save moment react-moment

On deployment to vercel also add the redirect URI for next-auth