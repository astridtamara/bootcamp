// @flow

type Data = {[string]: mixed};

type IteratorFunction = (key: string, value: mixed) => void;

class DataStore {
  data: Data = {};

  set(key: string, value: mixed) {
    this.data[key] = value;
  }

  get(key: string) {
    return this.data[key];
  }
  forEach(fn: IteratorFunction) {
    for (let key of Object.keys(this.data)) {
      let value = this.data[key];
      fn(key, value);
    }
  }
}

let newData = new DataStore();

newData.set('Apple', 500);
newData.set('Banana', 1200);

newData.forEach((key, value) => {
  console.log(key, ':', value);
});

export {DataStore};
