import Ember from 'ember';
import fetch from "ember-network/fetch";
export default Ember.Route.extend({
  model: function() {

    // Which commit to display data from (needed for rawgit CDN)
    var commit = "a0ab82807796553588892dd0e285b5f62aaf2f45";

    // Just grab the reviews, no Ember Data
    return fetch("https://cdn.rawgit.com/alexking/reviews/" + commit + "/dist/reviews.json").then(function(response) {
      return response.json();
    });
  }
});
