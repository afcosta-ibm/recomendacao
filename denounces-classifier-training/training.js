var watson = require('watson-developer-cloud');
var fs     = require('fs');

var natural_language_classifier = 
    watson.natural_language_classifier({
        username: '3cc40663-ef24-4807-a599-f41f19153b04',
        password: 'zv2N38aRrMKA',
        version: 'v1'
    });

natural_language_classifier.create(
    {
        language: 'pt-br',
        name: 'Relevance',
        training_data: fs.createReadStream('./data_train/relevance.csv')
    },
    function(err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    }
);

natural_language_classifier.create(
    {
      language: 'pt-br',
      name: 'Urgency',
      training_data: fs.createReadStream('./data_train/urgency.csv')
    },
    function(err, response) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    }
);

natural_language_classifier.create(
    {
      language: 'pt-br',
      name: 'Severity',
      training_data: fs.createReadStream('./data_train/severity.csv')
    },
    function(err, response){
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(response, null, 2));
    }
);