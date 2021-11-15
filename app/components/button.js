import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ButtonComponent extends Component {
  @service router;

  @action
  goTo(route, model) {
    this.router.transitionTo(route, model);
  }
}
