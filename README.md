SimpleLoader-Browserify

Browserify has to be able to statically analyze all of the require statements at build time so it can know what files it needs to include in the bundle. That requires that require can only be used with a string literal in the source code.
To organize loading js modules, there are many ways to do that.

My way is to make a lazy module loader which returns one object of modules that are needed to be instantiated one time only (Singleton Objects). This loader can be accessed in the global scope and it is very easy to use.

For more details: https://goodselects.com/organize-loading-js-modules-browserify-apps/
