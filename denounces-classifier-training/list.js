var watson = require('watson-developer-cloud');

var natural_language_classifier = 
watson.natural_language_classifier({
    username: '3cc40663-ef24-4807-a599-f41f19153b04',
    password: 'zv2N38aRrMKA',
    version: 'v1'
});

natural_language_classifier.list(
    {},
    function(err, response) {
        if (err) {
            console.log('error:', err);
        } else {
            response.classifiers.forEach(
                function(classifier) {
                    console.log(JSON.stringify(classifier, null, 2));
                }
            );
        }
    }
);