import EmberRouter from "@ember/routing/router";
import config from "interview-project/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("athlete", { path: "/athlete/:athlete_id" }, function() {
    this.route('sleeps');
    this.route('wellness');
  });
});
