import { delay } from './async.utils';

describe('async utils', () => {
  it('should delay execution for a tiny bit more than 1000 milliseconds', async () => {
    const start = new Date().getTime();
    await delay(1000);
    const elapsedMillis = new Date().getTime() - start;

    expect(elapsedMillis).toBeGreaterThanOrEqual(1000);
  })
});
