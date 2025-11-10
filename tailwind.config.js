/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    // 禁用预定义的按钮样式（与Element Plus冲突）
    button: false,
    // 禁用表单样式
    form: false,
    // 禁用输入框样式
    input: false,
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,svelte}", // 根据你的框架调整
  ],
  theme: {
    extend: {
      width:{
        '45':'11.25rem'
      },
      colors:{
        'line-color':'#E5E8EF',
        'hover-bg':'#F0F5FF'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

