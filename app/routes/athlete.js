import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { inject as service } from "@ember/service";

export default class AthleteRoute extends Route {
  @service("athlete") athleteService;

  async model(params) {
    const { athlete_id } = await params;
    this.athleteService.setAthleteId(athlete_id);

    let athlete = this.store.findRecord("athlete", athlete_id);

    return RSVP.hash({
      athlete_id,
      athlete,
    });
  }
}
