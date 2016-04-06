# angular-templates for Meteor 1.3

This package compiles your html files and makes them available within Meteor 1.3 to be imported with the ES6 `import ... from ""` syntax.

> The code in this package was extracted from the packages folder of angular-meteor (github repository https://github.com/Urigo/angular-meteor/tree/master/packages/angular-templates) and modified to deliver the new functionality.
 A big thank you goes to the angular-meteor team for creating the `angular-templates` Meteor package in the first place!

The major difference with this repo is that it returns the template HTML as a string, instead of pushing the HTML string into the AngularJs template cache. So, instead of doing this

```js
@Component({
    selector: 'app',
    templateUrl: 'imports/client/app.html'
})
```

You can do this

```js
import appTemplate from './app.html'

@Component({
    selector: 'app',
    template: appTemplate
})
```

In this way this package can be used with either AngularJS or Angular2 (or anything else that you might want to use it with).

## Changelog

#### 2016-04-06 Initial version 1.3.0

The reason this package starts with version 1.3.0 is to signify that it meant for Meteor 1.3 or higher. It may work with older versions of Meteor, if you provide the appropriate module loaders, but not actual testing has been performed to confirm this hypothesis.