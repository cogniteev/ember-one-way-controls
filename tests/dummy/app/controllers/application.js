import Ember from 'ember';

const { K, Controller, set } = Ember;

export default Controller.extend({
  committed: null,
  textCurrentValue: 'foo',

  autoFocusShown: false,

  actions: {
    noop: K,
    commit(value) {
      set(this, 'committed', value);
    },
    showAutoFocusInput() {
      set(this, 'autoFocusShown', true)
    }
  }
});
