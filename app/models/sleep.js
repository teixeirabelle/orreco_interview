import Model, { attr } from "@ember-data/model";

export default class SleepModel extends Model {
  @attr("string") athleteDocRef;
  @attr("number") startDateUTCMillis;

  // ...
}
