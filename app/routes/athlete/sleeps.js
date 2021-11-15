import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { inject as service } from "@ember/service";

export default class AthleteSleepRoute extends Route {
  @service("athlete") athleteService;

  model() {
    //Get sleeps data and sort in descending order.
    let sleeps = this.store
      .query("sleep", {
        query: (ref) =>
          ref.where(
            "athleteDocRef",
            "==",
            this.athleteService.currentAthleteId
          ),
      })
      .then((sleeps) => sleeps.sortBy("startDateUTCMillis").reverse());

    return RSVP.hash({
      sleeps,
    });
  }
}
