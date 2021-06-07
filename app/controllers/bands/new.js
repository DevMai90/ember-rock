import Controller from '@ember/controller';
import { action } from '@ember/object';
import { dasherize } from '@ember/string';
import { tracking } from '@glimmer/tracking';
import { Band } from 'ember-rock/routes/bands'

export default class BandsNewController extends Controller {
  @tracked name;

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  saveBand() {
    new Band({ name: this.name, id: dasherize(this.name) })
  }
}
