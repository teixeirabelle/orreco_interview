import Model, { attr } from "@ember-data/model";

export default class AthleteModel extends Model {
  @attr("string") firstName;
  @attr("string") lastName;
  @attr("number") age;
  @attr("number") heightCm;
  @attr("string") heightFeet;
  @attr("string") lastName;
  @attr("string") sport;
  @attr("number") weightKg;
  @attr("number") weightLbs;
  @attr("string") photoUrl;
  @attr("string") tour;
  @attr("string") team;

  get fullName() {
    return `${this.firstName} ${this.lastName} `;
  }

  get height() {
    return this.heightCm ? this.heightCm : this.heightFeet;
  }

  get heightMeasure() {
    return this.heightCm ? "cm" : "feet";
  }

  get weight() {
    return this.weightKg ? this.weightKg : this.weightLbs;
  }

  get weightMeasure() {
    return this.weightKg ? "kg" : "lbs";
  }
}
