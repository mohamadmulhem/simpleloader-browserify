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
            }
    }
}
module.exports = ML;
