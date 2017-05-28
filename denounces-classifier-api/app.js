'use strict';
module.exports = function (app) {
  app.route('/api/v1/denounces-classifier').post(
    function (request, response) {

      var Promise = require('bluebird');

      var watson = require('watson-developer-cloud');

      var classifier =
        watson.natural_language_classifier({
          username: '3cc40663-ef24-4807-a599-f41f19153b04',
          password: 'zv2N38aRrMKA',
          version: 'v1'
        });

      function listAsync() {
        return new Promise(function (resolve, reject) {
          classifier.list({}, function (error, data) {
            if (error) {
              reject(error);
            } else {
              resolve(data)
            }
          });
        });
      }

      function classifyAsync(object) {
        return new Promise(function (resolve, reject) {
          classifier.classify(object, function (error, data) {
            if (error) {
              reject(error);
            } else {
              resolve(data)
            }
          });
        });
      }

      listAsync().then(function (list) {
        var grau = ['', 'Very Low','Low','Medium','High','Very High'];
        var result = {};
        if (list.classifiers) {
          classifyAsync({
            text: request.body.text,
            classifier_id: list.classifiers[0].classifier_id
          }).then(function (data) {
            result['Denounce'] = data.text;
            result['Classification'] = data.top_class;
            result[list.classifiers[0].name] = grau[data.top_class];
          }).then(function () {
            classifyAsync({
              text: request.body.text,
              classifier_id: list.classifiers[1].classifier_id
            }).then(function (data) {
              result['Classification'] *= data.top_class;
              result[list.classifiers[1].name] = grau[data.top_class];
            }).then(function () {
              classifyAsync({
                text: request.body.text,
                classifier_id: list.classifiers[2].classifier_id
              }).then(function (data) {
                result['Classification'] *= data.top_class;
                result[list.classifiers[2].name] = grau[data.top_class];
              }).then(function () {
                console.log(JSON.stringify(result, null, 2));
                response.send(result);
              });
            });
          });
        }
      });

    });
}