import EmberRouter from '@ember/routing/router';
import config from 'lod-challenge/config/environment';

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
  });
});
