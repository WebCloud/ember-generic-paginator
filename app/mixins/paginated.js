import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['page'],
  page: 1,
  offset: 0,
  hasPreviousPage: function(){
    return this.get('offset') !== 0;
  }.property('offset'),
  hasNextPage: function(){
    return (this.get('offset') + this.get('limit')) < this.get('total');
  }.property('offset', 'limit', 'total'),

  actions: {
    previousPage: function(){
      // Just a small tweak to the previous button
      // if by any chance the user hits a url that
      // has a page that is higher than the actual total pages (this is only possible manually)
      // as he tries to come back to the previous page
      // he will get the last possible page number
      var totalPages = Math.ceil(this.get('total')/this.get('limit'));
      if(this.decrementProperty('page') > totalPages){
        this.set('page', totalPages);
      }

      this.transitionToRoute({
        queryParams: {
          page: this.get('page')
        }
      });
    },
    nextPage: function(){
      this.transitionToRoute({
        queryParams: {
          page: this.incrementProperty('page')
        }
      });
    }
  }
});
