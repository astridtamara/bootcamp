import Emitter from '../EventEmitter';

it('should add and execute listeners', () => {
  let emitter = new Emitter();

  let count = 0;
  emitter.addListener('user_login', () => {
      count++;
  });

  emitter.addListener('user_login', () => {
      count++;
  });

  emitter.emit('user_login');
  expect(count).toEqual(2);

  emitter.emit('user_login');
  expect(count).toEqual(4);
});

it('should do nothing for non-existant event', () => {
  let emitter = new Emitter();

  let count = 0;
  emitter.addListener('user_login', () => {
      count++;
  });

  emitter.emit('asd');
  expect(count).toEqual(0);
});

// it('should remove listener by reference', () => {
//   let emitter = new Emitter();

//   let count = 0;
//   let userLoginHandler = () => {
//       count++;
//   }

//   emitter.addListener('user_login', userLoginHandler);
//   emitter.removeListener('user_login', userLoginHandler);

//   emitter.emit('user_login');
//   expect(count).toEqual(0);
// });

it('should remove listener using return value', () => {
  let emitter = new Emitter();

  let count = 0;
  let userLoginHandler = () => {
      count++;
  }

  let subscription = emitter.addListener('user_login', userLoginHandler);
  subscription.remove();
  
  emitter.emit('user_login');
  expect(count).toEqual(0);
});

it('should removeListenerByID', () => {
  let emitter = new Emitter();

  let count = 0;
  let userLoginHandler = () => {
      count++;
  }

  let {id} = emitter.addListener('user_login', userLoginHandler);
  emitter.removeListenerByID('user_login', id);
  
  emitter.emit('user_login');
  expect(count).toEqual(0);
});
