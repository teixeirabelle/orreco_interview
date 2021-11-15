import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default class IndexRoute extends Route {
  async model() {
    let athletes = await this.store.findAll("athlete");

    return RSVP.hash({
      athletes,
    });
  }
}
