import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandSongsRoute extends Route {
  /**
   * The default implementation of the model hook is to RETURN THE MODEL OF THE PARENT ROUTE.
   * Therefore, we do not need to use the model hook if this is all is needed!
   */

  // model() {
  //   const band = this.modelFor('bands.band');

  //   return band.songs;
  // }

  // setupController(controller) {
  //   super.setupController(...arguments);
  //   controller.set('band', this.modelFor('bands.band'));
  // }

  @service catalog;

  queryParams = {
    sortBy: {
      as: 's'
    },
    searchTerm: {
      as: 'q'
    }
  }

  async model() {
    let band = this.modelFor('bands.band');

    await this.catalog.fetchRelated(band, 'songs');
    
    return band;
  }

  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}