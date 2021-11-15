import Model, { attr } from "@ember-data/model";

export default class WellnessLogsModel extends Model {
  @attr("string") athleteDocRef;
  @attr("number") energy;
  @attr("number") logDateUTCMillis;
  @attr("number") happiness;
  @attr("number") muscleSoreness;
  @attr("number") sleep;
  @attr("number") stress;
}
