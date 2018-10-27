var ML = {
    objects: []
    //get instance
    gI: function (objectClassName) {
            try {
                if (!this.objects[objectClassName])
                {
                    switch (objectClassName)
                    {
                        case 'SampleModule1':
                            this.objects[objectClassName] = require('./SampleModule1.js');
                            break;
			case 'SampleModule2':
				this.objects[objectClassName] = require('./SampleModule2.js');
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
