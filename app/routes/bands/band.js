import Route from '@ember/routing/route';

export default class BandsBandRoute extends Route {
  model(params) {
    const bands = this.modelFor('bands'); // Looks into the parent route's model

    return bands.find((band) => band.id === params.id);
  }
}
