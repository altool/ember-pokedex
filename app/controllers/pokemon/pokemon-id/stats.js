'use strict';
import Ember from 'ember';

export default Ember.Controller.extend({
  stats: Ember.computed.filter('model.base.stats', function() { return true; }),

  stats_updated: Ember.computed.map('stats', function(stat){
    let stat_css_value = parseInt((stat.base_stat / 2).toFixed(0)),
        stat_css_color = '';

    if (stat_css_value > 74) {
      stat_css_color = 'very-high';
    } else if (stat_css_value > 49) {
      stat_css_color = 'high';
    } else if (stat_css_value > 24) {
      stat_css_color = 'medium';
    } else {
      stat_css_color = 'low';
    }

    let new_data = {
      'name': stat.stat.name,
      'value': stat.base_stat,
      'value_width': stat_css_value,
      'value_class': stat_css_color
    };

    return new_data;
  }),

  stats_reversed: Ember.computed('stats_updated', function() {
    return this.get('stats_updated').reverse();
  }),
});
