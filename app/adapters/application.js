import DS from 'ember-data';

export default DS.FixtureAdapter.extend({
  queryFixtures: function(fixtures, query){
    var properties;

    properties = Object.keys(query);
    fixtures = fixtures.filter(function(item){
      var queryProperties, accepted;

      queryProperties = properties.reject(function(property){
        return property === 'offset' || property === 'limit';
      });
      // if the queryProperties object doesn't have anything is because we won't need to filter
      // so the item is accepted by default
      accepted = !queryProperties.length;

      queryProperties.forEach(function(property){
        // if the item property is undefined we don't care about it's value
        // TODO: make this work with relationships categories: [1,2,3] (where we will have category:1)
        accepted = (item[property] === undefined ||
                    item[property]
                      .toString()
                      .toLocaleLowerCase()
                      .match(
                        query[property]
                        .toString()
                        .toLocaleLowerCase()
                    ));
      });
      return accepted;
    });
    // adding pagination support
    if(properties.contains('offset')){
      fixtures = fixtures.slice(query.offset, query.offset+query.limit);
    }

    return fixtures;
  }
});
