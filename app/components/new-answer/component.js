import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer1(){
      var params = {
        author: this.get('author'),
        body: this.get('body')
      };
      this.sendAction('saveAnswer2', params);
    }
  }
});
