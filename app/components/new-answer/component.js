import Ember from 'ember';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    answerFormShow() {
      this.set('newAnswer', true);
    },
    saveAnswer1() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question')
      };
      this.set('newAnswer', false);
      this.sendAction('saveAnswer2', params);
    }
  }
});
