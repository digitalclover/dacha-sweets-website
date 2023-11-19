import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from '@azure/functions';

export async function getProduct(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  return { body: `Dacha Sweets` };
}

app.http('getProduct', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: getProduct,
});
