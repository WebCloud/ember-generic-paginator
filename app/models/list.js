import DS from 'ember-data';

var List = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr()
});

List.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'My list item...'
    },
    {
      id: 2,
      title: 'My list item...'
    },
    {
      id: 3,
      title: 'My list item...'
    },
    {
      id: 4,
      title: 'My list item...'
    },
    {
      id: 5,
      title: 'My list item...'
    },
    {
      id: 6,
      title: 'Page two, My list item...'
    },
    {
      id: 7,
      title: 'My list item...'
    },
    {
      id: 8,
      title: 'My list item...'
    },
    {
      id: 9,
      title: 'My list item...'
    },
    {
      id: 10,
      title: 'My list item...'
    },
    {
      id: 11,
      title: 'Page three, My list item...'
    },
    {
      id: 12,
      title: 'My list item...'
    },
    {
      id: 13,
      title: 'My list item...'
    },
    {
      id: 14,
      title: 'My list item...'
    },
    {
      id: 15,
      title: 'My list item...'
    },
    {
      id: 16,
      title: 'Page four, My list item...'
    },
    {
      id: 17,
      title: 'My list item...'
    },
    {
      id: 18,
      title: 'My list item...'
    },
    {
      id: 19,
      title: 'My list item...'
    },
    {
      id: 20,
      title: 'My list item...'
    },

  ]
});

export default List;
