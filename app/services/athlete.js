import Service from "@ember/service";

export default class AthleteService extends Service {
  //Reference to the selected athlete
  currentAthleteId;

  setAthleteId(id) {
    this.currentAthleteId = id;
  }
}
