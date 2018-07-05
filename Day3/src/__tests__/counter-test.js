import { createCounter } from '../counter'
it('should start at zero', () => {
    let counter = createCounter(2);
    expect(counter.getCount()).toEqual(2);
  });

  it('should increment', () => {
    let counter = createCounter(1);
    counter.inc(2);
    counter.inc();
    expect(counter.getCount()).toEqual(4);
  });

  it('should decrement', () => {
    let counter = createCounter();
    counter.inc(1);
    counter.dec(2);
    expect(counter.getCount()).toEqual(-1);
  });
