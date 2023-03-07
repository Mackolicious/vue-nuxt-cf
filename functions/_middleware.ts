function authorisationMiddleware(context) {
  // const headers = context.request.headers

  // const secureHeaderName = context.env.SECURE_HEADER_NAME
  // const secureHeaderValue = context.env.SECURE_HEADER_VALUE

  // if (headers?.has(secureHeaderName) && headers?.get?.(secureHeaderName) === secureHeaderValue) {
  //   return context.next()
  // }

  // // CMSRD-138
  // // eslint-disable-next-line no-console
  // console.log('Unauthorised request', context.request);

  // return new Response('Unauthorised - 401', {
  //   status: 401,
  // })
  return context.next()
}

interface Env {
	KV: KVNamespace;
}


// const casingMiddleware: PagesFunction<Env> = async (context) => {
// 	const value = await context.env.KV.get('example');
//  	return new Response(value);
// }

export const onRequest = [authorisationMiddleware];
// export const onRequest = [authorisationMiddleware, casingMiddleware];