# Generic Ember pagination

This is a regular ember-cli applicaiton, so all the goodies applies.

To use the generic pagination helper you must do the following steps.

### Extend your route from the PaginatedBase object

Also initiate your route calling _super with the intended model name to
be fetched and paginated.

```javascript
// please note that the path for the pagination dependency might be different
// according with the folder that the dependency will be requested from
// this assumes that the file is in the routes/ folder
import PaginationBase from './pagination-base';

export default PaginationBase.extend({
  init: function(){
    this._super('myModelName');
  }
  // continuation of your route
});
```

Note that with that you will not need to create the `model` hook yourself, but
if you need to extend it for some reason just call _super and receive the return of that.
Like so:

```javascript
  model: function(){
    myModel = this._super();
    // my extra logic

    return myModel;
  }
```

### Use the Paginated mixin in your controller

Also, create the total computed property for total, to be used to calculate the
total number of pages for your model data.

```javascript
// please note that the path for the pagination dependency might be different
// according with the folder that the dependency will be requested from
// this assumes that the file is in the controllers/ folder
import Paginated from '../mixins/paginated';

export default Ember.ArrayController.extend(Paginated, {
  total: function(){
    return this.store.metadataFor('yourModelName').total;
  }.property('model'),
  // continuation of your controller
});
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.
