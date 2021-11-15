import Route from "@ember/routing/route";
import RSVP from "rsvp";
import { inject as service } from "@ember/service";

export default class AthleteRoute extends Route {
  @service("athlete") athleteService;

  model(params) {
    const { athlete_id } = params;
    this.athleteService.setAthleteId(athlete_id);

    return RSVP.hash({
      athlete_id,
    });
  }
}
