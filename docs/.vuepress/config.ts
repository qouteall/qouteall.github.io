const { defaultTheme } = require('@vuepress/theme-default')
const { palettePlugin } = require('@vuepress/plugin-palette')

module.exports = {
  title: "qouteall",
  head: [['link', { rel: 'icon', href: '/images/benzene.jpg' }]],

  theme: defaultTheme({
    sidebar: false
  }),
  plugins: [
    palettePlugin({ preset: 'sass' }),
  ],
}