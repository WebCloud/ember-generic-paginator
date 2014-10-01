import PaginationBase from '../pagination-base';

export default PaginationBase.extend({
  init: function(){
    this._super('list');
  },
  // I wanted to overwrite the default limit of 10 to have more pages
  limit: 5
});
