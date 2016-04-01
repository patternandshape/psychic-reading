import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm(){
      this.set('editQuestionForm', true);
    },
    edit1(question){
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        notes: this.get('notes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit2', question, params);
    }
  }
});
