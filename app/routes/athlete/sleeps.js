import Route from "@ember/routing/route";
import RSVP from "rsvp";
export default class AthleteSleepRoute extends Route {
  model(params) {
    const { athlete_id } = params;

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
