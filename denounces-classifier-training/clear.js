var watson = require('watson-developer-cloud');
var fs     = require('fs');

var natural_language_classifier = 
    watson.natural_language_classifier({
        username: '3cc40663-ef24-4807-a599-f41f19153b04',
        password: 'zv2N38aRrMKA',
        version: 'v1'
    });

natural_language_classifier.list(
    {},
    function(err, res) {
        if (err) {
              console.log('error:', err);
        } else {
            res.classifiers.forEach(
                function(classifier) {
                    console.log(JSON.stringify(classifier, null, 2));
                    natural_language_classifier.remove(
                        {classifier_id: classifier.classifier_id },
                        function(err, response) {
                            if (err) {
                                console.log('error:', err);
                            } else {
                                console.log(JSON.stringify(response, null, 2));
                            }
                        }
                    );
                }
            )
        }
    }
);

