import EmberRouter from '@ember/routing/router';
import config from 'lod-challenge/config/environment';
import metisFallbackRoute from 'metis/utils/fallback-route';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('participate', function() {
    this.route('discover');
    this.route('explore');
    this.route('propose');
    this.route('how-to-sparql');
    this.route('submissions');
  });
  this.route('how-to-sparql');

  this.route('sparql');
  metisFallbackRoute(this);
  this.route('challenge');
  this.route('submissions');
});
