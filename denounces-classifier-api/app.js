'use strict';
module.exports = function(app) {

  app.route('/api/v1/denounces-classifier/urgency')
    .post(function(request, response){

      var watson = require('watson-developer-cloud');
      
      var natural_language_classifier = 
        watson.natural_language_classifier({
          username: '3cc40663-ef24-4807-a599-f41f19153b04',
          password: 'zv2N38aRrMKA',
          version: 'v1'
        });

      natural_language_classifier.list({},
        function(err, res) {
          if (err) {
              console.log('error:', err);
          } else {
              res.classifiers.forEach(function(classifier) {
                if(classifier.name == 'Urgency') {
                  natural_language_classifier.classify({
                    text: request.body.text,
                    classifier_id: classifier.classifier_id },
                    function(err, res) {
                        if (err) {
                          response.send(err);
                          console.log('error:', err);
                        } else {
                          response.send({classification:res.top_class});
                          console.log(JSON.stringify(res, null, 2));
                        }
                    });
                  }
              });
          }
      });
        
  });

  app.route('/api/v1/denounces-classifier/severity')
    .post(function(request, response){

      var watson = require('watson-developer-cloud');
      
      var natural_language_classifier = 
        watson.natural_language_classifier({
          username: '3cc40663-ef24-4807-a599-f41f19153b04',
          password: 'zv2N38aRrMKA',
          version: 'v1'
        });

      natural_language_classifier.list({},
        function(err, res) {
          if (err) {
              console.log('error:', err);
          } else {
              res.classifiers.forEach(function(classifier) {
                if(classifier.name == 'Severity') {
                  natural_language_classifier.classify({
                    text: request.body.text,
                    classifier_id: classifier.classifier_id },
                    function(err, res) {
                        if (err) {
                          response.send(err);
                          console.log('error:', err);
                        } else {
                          response.send({classification:res.top_class});
                          console.log(JSON.stringify(res, null, 2));
                        }
                    });
                  }
              });
          }
      });
        
  });  

  app.route('/api/v1/denounces-classifier/relevance')
    .post(function(request, response){

      var watson = require('watson-developer-cloud');
      
      var natural_language_classifier = 
        watson.natural_language_classifier({
          username: '3cc40663-ef24-4807-a599-f41f19153b04',
          password: 'zv2N38aRrMKA',
          version: 'v1'
        });

      natural_language_classifier.list({},
        function(err, res) {
          if (err) {
              console.log('error:', err);
          } else {
              res.classifiers.forEach(function(classifier) {
                if(classifier.name == 'Relevance') {
                  natural_language_classifier.classify({
                    text: request.body.text,
                    classifier_id: classifier.classifier_id },
                    function(err, res) {
                        if (err) {
                          response.send(err);
                          console.log('error:', err);
                        } else {
                          response.send({classification:res.top_class});
                          console.log(JSON.stringify(res, null, 2));
                        }
                    });
                  }
              });
          }
      });
        
  });

};