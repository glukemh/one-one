export const onRequest: PagesFunction<any, string, any> = context => {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  const info = JSON.stringify({ data: `Hello ${name}` })
  return new Response(info, {
    headers: { 'content-type': 'application/json' },
  })
}
