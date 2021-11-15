import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { inject as service } from "@ember/service";

export default class AthleteSleepRoute extends Route {
  @service("athlete") athleteService;

  model() {
    let athlete_id;

    let sleeps = this.store
      .query("sleeps", {
        query: (ref) => ref.where("athleteDocRef", "==", athlete_id),
      })
      .then((sleeps) => sleeps.sortBy("startDateUTCMillis"));

    return RSVP.hash({
      sleeps,
      athlete_id,
    });
  }
}
