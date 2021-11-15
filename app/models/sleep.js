import Model, { attr } from "@ember-data/model";

export default class SleepModel extends Model {
  @attr("string") athleteDocRef;
  @attr("number") startDateUTCMillis;
  @attr("number") deepSleepDuration;
  @attr("number") lightSleepDuration;
  @attr("number") remSleepDuration;
  @attr("number") totalSleepDuration;
}
