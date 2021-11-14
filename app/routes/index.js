import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default class IndexRoute extends Route {
  model() {
    let athletes = this.store.findAll("athlete");

    return RSVP.hash({
      athletes,
    });
  }
}
