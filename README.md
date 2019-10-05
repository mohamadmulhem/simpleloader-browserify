# SimpleLoader-Browserify

![](https://img.shields.io/badge/node-passed-brightgreen)

Lazy module loader which returns one object of modules that are needed to be instantiated one time only (Singleton Objects). This loader can be accessed in the global scope and it is very easy to use.

## Demo

You reach demo through this [link](https://rawcdn.githack.com/mohamadmulhem/simpleloader-browserify/45b01abfe5ceedfb674d3c137da120f4c67a100b/demo/index.html)



## Requirements

1. install latest Node JS version by going to https://nodejs.org/

2. install Browserify

   ```
   npm install -g browserify
   ```

## Usage

1. Configure your new modules in ModulesLoader.js by adding a new Switch case

```javascript
case 'SampleModule':
this.objects[objectClassName] = require('./SampleModule.js');
break;
```

2. Load the ModulesLoader to a global variable like the following

```javascript
global.ML = require('./js/ModulesLoader');
```

3. Now you can call the new module methods wherever you need by using "gI" which stands for "get instance"

```javascript
//gets instance which is only one
ML.gI('SampleModule').printMessage();
```

4. Bundle the new JS file using Browserify in terminal

```bash
$browserify main.js -o bundle.js
```

5. inject bundle.js in your website html

```html
<script src="bundle.js"></script>
```

That's it! did you like it?

If you need more details, you can view the source code of the demo.

## Related Article

Related Article:  https://goodselects.com/organize-loading-js-modules-browserify-apps/

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)