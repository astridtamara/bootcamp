// @flow

type EventList = Map<number, Function>;
type EventMap = Map<string, EventList>;

type Subscription = {
  remove: () => void,
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Emitter {
  events: EventMap;

  constructor() {
    this.events = new Map();
  }

  addListener(eventName: string, eventListener: Function): Subscription {
    let id = getRandomInt(0, 100);
    let eventList = this.events.get(eventName);
    if (eventList == null) {
      eventList = new Map();
      eventList.set(id, eventListener);
      this.events.set(eventName, eventList);
    }
    eventList.set(id, eventListener);

    return {
      remove: () => {
        if (eventList) {
          eventList.delete(id);
        }
      },
      id: id,
    };
  }

  // removeListener(eventName: string, eventListener: Function) {
  //   let eventList = this.events.get(eventName);
  //   if (eventList) {
  //     eventList.delete(eventListener);
  //   }
  // }

  removeListenerByID(eventName: string, id: number) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      eventList.delete(id);
    }
  }

  emit(eventName: string) {
    let eventList = this.events.get(eventName);
    if (eventList) {
      for (let [id, eventHandler] of eventList) {
        eventHandler();
      }
    }
  }
}

export default Emitter;

// Built in
// import EventEmitter from 'events';

// let emitter = new EventEmitter();

// emitter.addListener('user_login', ()=>{
//     console.log('User has logged in');
// });

// emitter.addListener('user_login', ()=>{
//     console.log('Please check');
// });

// emitter.emit('user_login');
