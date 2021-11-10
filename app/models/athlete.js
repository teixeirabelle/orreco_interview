import Model, { attr } from '@ember-data/model';

export default class AthleteModel extends Model {

  @attr('string') firstName;
  @attr('string') lastName;

  // ...

}
