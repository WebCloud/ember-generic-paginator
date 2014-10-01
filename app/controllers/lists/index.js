import Ember from 'ember';
import Paginated from '../../mixins/paginated';

export default Ember.ArrayController.extend(Paginated, {
  total: function(){
    return this.store.metadataFor('list').total;
  }.property('model')
});
