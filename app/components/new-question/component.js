import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes'),
      };
      this.sendAction('save2', params);
    }
  }
});
