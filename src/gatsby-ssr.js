import React from 'react'

export const onRenderBody = ({setHeadComponents, setPostBodyComponents}, pluginOptions) => {
  if (process.env.NODE_ENV !== `production` || !pluginOptions.hostUrl) {
    return null
  }

  setHeadComponents([
    <link
      rel="preconnect dns-prefetch"
      key="preconnect-mautic"
      href={pluginOptions.hostUrl}
    />,
  ])

  const excludeMTPaths = []
  if (typeof pluginOptions.exclude !== `undefined`) {
    const Minimatch = require(`minimatch`).Minimatch
    pluginOptions.exclude.map(exclude => {
      const mm = new Minimatch(exclude)
      excludeMTPaths.push(mm.makeRe())
    })
  }

  const setComponents = pluginOptions.head
    ? setHeadComponents
    : setPostBodyComponents

  return setComponents([
    <script
      key="gatsby-plugin-mautic"
      dangerouslySetInnerHTML={{
        __html: `
          ${
            excludeMTPaths.length
              ? `window.excludeMTPaths=[${excludeMTPaths.join(`,`)}];`
              : ``
          }
          (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)})(window,document,'script','${pluginOptions.hostUrl}/mtc.js','mt');
        `
      }}
    />
  ])
}
