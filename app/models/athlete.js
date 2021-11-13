import Model, { attr } from "@ember-data/model";

export default class AthleteModel extends Model {
  @attr("string") firstName;
  @attr("string") lastName;
  @attr("number") age;
  @attr("number") heightCm;
  @attr("string") lastName;
  @attr("string") sport;
  @attr("number") weightKg;
  @attr("number") photoUrl;
  @attr("string") tour;
  @attr("number") team;

  get fullName() {
    return `${this.firstName} ${this.lastName} `;
  }
}
