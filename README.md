# angular-templates

This package was extracted from the packages folder of angular-meteor (github repository https://github.com/Urigo/angular-meteor/tree/master/packages/angular-templates).

The major difference with this repo is that it returns the template as a string, instead of pushing it to the angular template cache. So, instead of doing this

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


> A big thank you goes to the angular-meteor team for creating the `angular-templates` Meteor package in the first place!