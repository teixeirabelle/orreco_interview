import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class ApplicationRoute extends Route {

  model() {
    let athleteDocRef = 'PMgxRcGJrkEmrmDepgZM';
    let athlete = this.store.findRecord('athlete', athleteDocRef);

    // example query
    let sleeps = this.store.query('sleep', {
      query: ref => ref.where('athleteDocRef', '==', athleteDocRef)
    });

    return RSVP.hash({
      athlete,
      sleeps
    });
  }

}
