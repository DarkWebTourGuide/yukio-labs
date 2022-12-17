import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 
  <img src='/static/yukio_labs_company_logo.png' width={80} height={80} ></img>,
  project: {
    link: 'https://github.com/DarkWebTourGuide/yukio-lab-research',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: <span>
    {new Date().getFullYear()} © <a href="https://adotatech.com" target="_blank">Adota Technologies</a>. All rights reserved.
  </span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Yukio Labs'
    }
  },
  feedback: {
    content: null
},
editLink: {
  text: ''
},
search: {
  placeholder: 'Search'
},
}

export default config
