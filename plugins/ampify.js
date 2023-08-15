const ampScript = `<script async src="https://cdn.ampproject.org/v0.js"></script>
<script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>`

module.exports = (html) => {
  // Add ⚡ to html tag
  html = html.replace(/<html/gi, '<html ⚡')

  // Combine css into single tag
  let styleConcat = ''
  html = html.replace(/<style[^>]*data-vue-ssr[^>]*>(.*?)?<\/style>/gi, (match, sub) => {
    styleConcat += sub
    return ''
  })
  html = html.replace('</head>', `<style amp-custom>${styleConcat}</style></head>`)

  // Remove all !important in CSS
  html = html.replace(/!important/gi, '')

  // Remove preload and prefetch tags
  html = html.replace(/<link[^>]*rel="(?:preload|prefetch|modulepreload)?"[^>]*>/gi, '')

  // Remove amphtml tag
  html = html.replace(/<link[^>]*rel="(?:amphtml)?"[^>]*>/gi, '')

  // Replace img tags with amp-img
  html = html.replace(/(<img\\b|(?!^)\\G)[^>]*?\\b(src|width|height)=([\"']?)([^>]*?)\\3/gi, (match, sub) => {
    return `<amp-img ${sub} layout=responsive></amp-img>`
  })

  // Remove data attributes from tags
  html = html.replace(/\s*data-(?:[^=>]*="[^"]*"|[^=>\s]*)/gi, '')

  // Remove JS script tags except for ld+json
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (match) => {
    return (/application\/ld\+json/gi.test(match)) ? match : ''
  })

  // Add AMP script before </head>
  html = html.replace('</head>', ampScript +'</head>')

  // Add AMP analytics
  html = html.replace('</body>',
    `
    <amp-auto-ads type="adsense" data-ad-client="${process.env.GOOGLE_ADSENSE_ID}"></amp-auto-ads>
</body>`)

  return html
}
