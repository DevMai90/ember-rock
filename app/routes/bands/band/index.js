import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandIndexRoute extends Route {
  @service router;

  // Remember that child rout receives parent route model by default!
  redirect(band) { // Receives route model.
    if (band.description) {
      this.router.transitionTo('bands.band.details');
    } else {
      this.router.transitionTo('bands.band.songs');
    }
  }
}
