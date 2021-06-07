import EmberRouter from '@ember/routing/router';
import config from 'ember-rock/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('bands', function () {
    this.route('band', { path: ':id' }, function () {
      this.route('songs'); // We've created /bands/:id/songs
    });
    this.route('new');
  });
});
