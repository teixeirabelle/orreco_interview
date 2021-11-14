import Route from "@ember/routing/route";

export default class AthleteRoute extends Route {
  model(params) {
    const { athlete_id } = params;
    return athlete_id;
  }
}
