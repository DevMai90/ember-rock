import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandRoute extends Route {
  @service catalog;

  model(params) {
    // const bands = this.modelFor('bands'); // Looks into the parent route's model

    // return bands.find((band) => band.id === params.id);

    // Use new catalog service instead of reaching into parent model.
    return this.catalog.find('band', (band) => band.id === params.id);
  }
}
