import { createCounter } from '../counter'
it('should start at zero', () => {
    let counter = createCounter();
    expect(counter.getCount()).toEqual(0);
  });
  
  it('should increment', () => {
    let counter = createCounter();
    counter.inc();
    counter.inc();
    expect(counter.getCount()).toEqual(2);
  });
  
  it('should decrement', () => {
    let counter = createCounter();
    counter.inc();
    counter.dec();
    expect(counter.getCount()).toEqual(0);
  });
  