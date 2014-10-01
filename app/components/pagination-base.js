import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: 'btn btn-default'.w(),
  attributeBindings: ['disabled'],
  // the enabled property will easily toggle the disabled attribute for the element
  // in case there's no more items to iterate
  enabled: true,
  disabled: Ember.computed.not('enabled'),
  action: null,
  click: function(){
    this.sendAction();
  }
});
