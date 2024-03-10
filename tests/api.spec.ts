import { test, expect } from '@playwright/test';
// store in env
const BASE_URL = 'https://countries.trevorblades.com/graphql';
test.describe('Graphql API tests', () => {
  test('Should be able to get all EU countries', async ({ request }) => {
    const response = await request.post(BASE_URL, {
      data: {
        query: `
              query { 
                continent(code: "EU") { 
                  code
                  name
                  countries {
                    name
                  }
                } 
              }
            `,
      },
    });
    const body = await response.body();
    const responseBody = JSON.parse(body.toString());
    expect(responseBody.data?.continent.name).toEqual('Europe');
    expect(responseBody.data?.continent.name).not.toContain('America');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });

  test('Should be able to get all Asia countries', async ({ request }) => {
    const response = await request.post(BASE_URL, {
      data: {
        query: `
              query { 
                continent(code: "AS") { 
                  code
                  name
                  countries {
                    name
                  }
                } 
              }
            `,
      },
    });
    const body = await response.body();
    const responseBody = JSON.parse(body.toString());
    expect(responseBody.data?.continent.name).toEqual('Asia');
    expect(responseBody.data?.continent.name).not.toContain('Europe');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});
