import Service from '@ember/service';
// import { tracked } from '@glimmer/tracking';
// Using tracked-built-ins in order to track a specific object property
import { tracked } from 'tracked-built-ins';

export default class CatalogService extends Service {
  storage = {}; // storage is never tracked because we'll never change its value. We mutate one of its properties instead.

  constructor() {
    super(...arguments);

    this.storage.bands = tracked([]);
    this.storage.songs = tracked([]);
  }

  add(type, record) {
    let collection = type === 'band' ? this.storage.bands : this.storage.songs;

    collection.push(record);
  }

  get bands() {
    return this.storage.bands;
  }

  get songs() {
    return this.storage.songs;
  }

  find(type, filterFn) {
    let collection = type === 'band' ? this.bands : this.songs;
    return collection.find(filterFn);
  }
}
