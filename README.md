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