function trailingSlashMiddleware({ request, next }) {
  const requestURL = new URL(request.url)

  if (requestURL.pathname.endsWith('/') ||requestURL.pathname.includes('.')) {
    return next()
  }

  requestURL.pathname += '/';
  return next(new Request(requestURL))
}
