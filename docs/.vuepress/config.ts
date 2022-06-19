const { palettePlugin } = require('@vuepress/plugin-palette')
import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  title: "qouteall",
  head: [['link', { rel: 'icon', href: '/images/benzene.jpg' }]],

  theme: hopeTheme({
    hostname: "https://qouteall.fun",
    sidebar: false,
    lastUpdated: false,
    contributors: false,
    pageInfo: false,
  }),
  plugins: [
    
  ],
})
