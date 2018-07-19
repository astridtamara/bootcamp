// @flow
import sleep from '../sleep';

it('should sleep for x ms', (done) => {
  let before = Date.now();
  sleep(100, 'test').then(() => {
    expect(Date.now() - before).toBeGreaterThanOrEqual(100);
    done();
  });
});
