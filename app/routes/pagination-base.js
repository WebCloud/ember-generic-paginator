/*
  Use this base object to whatever route needs pagination
  to set it up just customise your init function to look like this:
  init: ()->
    this._super('mydomain');
  to later retrive the model data on the controller for the route
  simply do model.data
*/

import Ember from 'ember';

export default Ember.Route.extend({
  init: function(domain){
    this._super();
    this.set('domain', domain);
  },
  offset: 0,
  limit: 10,
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model: function(params){
    var page;

    if(params.page){
      page = params.page;
      // avoid page numbers to be trolled i.e.: page=string, page=-1, page=1.23
      page = isNaN(page) ? 1 : Math.floor(Math.abs(page));
      // page=1 will result into offset 0, page=2 will result into offset 10 and so on
      this.set('offset', (page-1)*this.get('limit'));
    }

    if(params.query){
      this.set('query', params.query);
    }

    // Set's the metaForType manually, on your backend api you would have it
    // like it's documented: http://emberjs.com/guides/models/handling-metadata/
    // once you have the api in place just remove this bit
    this.store.find(this.get('domain')).then(function(that){
      return function(completeList){
        that.store.metaForType(that.get('domain'), {total:completeList.get('length')});
      };
    }(this));

    return this.store.find(this.get('domain'), {
      offset: this.get('offset'),
      limit: this.get('limit')
    });
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.setProperties({
      offset: this.get('offset'),
      limit: this.get('limit')
    });
  }
});
