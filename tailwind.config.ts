import type { Config } from 'tailwindcss'
import daisyui from "daisyui"

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
        image:'4 / 3'
      },
      screens: {
        'xs': '480px',  // 手机端区分
      },
    }
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  plugins:[
    daisyui,
  ]
}