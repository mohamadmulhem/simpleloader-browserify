(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var ML = {
    objects: [],
    /**
     * Gets the needed object
     * @param {String} objectClassName 
     */
    gI: function (objectClassName) {
            try {
                if (!this.objects[objectClassName])
                {
                    switch (objectClassName)
                    {
                        case 'SampleModule':
                            this.objects[objectClassName] = require('./SampleModule.js');
                            break;
                    }
                }
                return this.objects[objectClassName];

            } catch (err)
            {
                throw new Error(err);
                return;
            }
    }
}
module.exports = ML;

},{"./SampleModule.js":2}],2:[function(require,module,exports){
var SampleModule = {
    printMessage: function(){
        alert("New message printed and fetched using SimplaLoader");
    }
};
module.exports = SampleModule;
},{}],3:[function(require,module,exports){
(function (global){
global.ML = require('./js/ModulesLoader');

//gets instance which is only one
ML.gI('SampleModule').printMessage();
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./js/ModulesLoader":1}]},{},[3]);
