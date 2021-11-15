import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { inject as service } from "@ember/service";

export default class AthleteWellnessRoute extends Route {
  @service("athlete") athleteService;

  async model() {
    //Get wellness data and sort in descending order.
    let wellnessLogs = await this.store
      .query("wellnessLogs", {
        query: (ref) =>
          ref.where(
            "athleteDocRef",
            "==",
            this.athleteService.currentAthleteId
          ),
      })
      .then((wellness) => wellness.sortBy("logDateUTCMillis").reverse());

    return RSVP.hash({
      wellnessLogs,
    });
  }
}
