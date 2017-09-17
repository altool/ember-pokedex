"use strict";



define('ember-pokedex/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var ApplicationAdapter = _emberData.default.JSONAPIAdapter.extend({
    host: 'http://pokeapi.co',
    namespace: 'api/v2',
    headers: {
      'Accept': 'application/json'
    }
  });

  exports.default = ApplicationAdapter;
});
define('ember-pokedex/app', ['exports', 'ember-pokedex/resolver', 'ember-load-initializers', 'ember-pokedex/config/environment', 'ember-pokedex/models/custom-inflector-rules'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-pokedex/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('ember-pokedex/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('ember-pokedex/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ember-pokedex/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('ember-pokedex/components/color-chip', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'span',
    classNames: ['epd-c-colorChip'],
    classNameBindings: ['chipColor'],

    chipColor: Ember.computed('color', function () {
      return 'epd-c-colorChip--' + this.get('color');
    })
  });
});
define('ember-pokedex/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('ember-pokedex/components/evolution-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['epd-c-evoCard__container', 'epd-l-evolution__stage'],
    classNameBindings: ['stage_class'],

    stage_class: Ember.computed('stage', function () {
      return 'epd-c-evoCard__container--stage-' + this.get('stage');
    }),

    container_class: Ember.computed('stage', function () {
      return 'epd-c-evoCard__container--stage-' + this.get('stage');
    }),

    evo_id: Ember.computed('data.species.url', function () {
      return String(this.get('data.species.url')).split('/')[6];
    }),

    evo_details: Ember.computed('data.evolution_details', function () {
      var data = this.get('data.evolution_details') ? this.get('data.evolution_details') : [];

      data.forEach(function (dataItem) {
        var evo_result = '';

        if (dataItem.trigger.name == 'level-up' && !dataItem.min_level) {
          evo_result += 'Level up ';
        }

        if (dataItem.min_level) {
          evo_result += 'Level ' + dataItem.min_level + ' ';
        }

        if (dataItem.trigger.name == 'trade') {
          evo_result += 'Trade ';
        }

        if (dataItem.item) {
          evo_result += 'Use ' + capitalize(dataItem.item.name) + ' ';
        }

        if (dataItem.trade_species) {
          evo_result += 'with ' + dataItem.trade_species.name + ' ';
        }

        if (dataItem.min_happiness) {
          evo_result += 'with max happiness ';
        }

        if (dataItem.min_beauty) {
          evo_result += 'with max beauty ';
        }

        if (dataItem.held_item) {
          evo_result += 'while holding ' + capitalize(dataItem.held_item.name) + ' ';
        }

        if (dataItem.time_of_day) {
          evo_result += 'during the ' + dataItem.time_of_day + 'time ';
        }

        if (dataItem.location) {
          evo_result += 'at ' + capitalize(dataItem.location.name) + ' ';
        }

        if (dataItem.gender) {
          evo_result += 'if ' + (dataItem.gender == 1 ? 'female' : 'male') + ' ';
        }

        if (dataItem.known_move) {
          evo_result += 'if knows ' + capitalize(dataItem.known_move.name) + ' ';
        }

        if (dataItem.known_move_type) {
          evo_result += 'if knows a ' + capitalize(dataItem.known_move_type.name) + ' move ';
        }

        if (dataItem.party_species) {
          evo_result += 'with ' + capitalize(dataItem.party_species.name) + ' in party ';
        }

        if (dataItem.min_affection) {
          evo_result += 'with ' + dataItem.min_affection + ' affection hearts ';
        }

        if (dataItem.turn_upside_down) {
          evo_result += 'with device upside-down ';
        }

        if (dataItem.needs_overworld_rain) {
          evo_result += 'in a rainy area ';
        }

        if (dataItem.relative_physical_stats || dataItem.relative_physical_stats === 0) {
          if (dataItem.relative_physical_stats == 1) {
            evo_result += 'with higher Attack than Defense ';
          } else if (dataItem.relative_physical_stats == -1) {
            evo_result += 'with higher Defense than Attack ';
          } else if (dataItem.relative_physical_stats === 0) {
            evo_result += 'with equal Attack and Defense ';
          }
        }

        Ember.set(dataItem, 'evo_result', evo_result.replace(/-/g, " "));
      });

      return data;
    })
  });


  var capitalize = function capitalize(string) {
    return string.toString().replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  };
});
define('ember-pokedex/components/head-content', ['exports', 'ember-pokedex/templates/head'], function (exports, _head) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    model: Ember.inject.service('head-data'),
    layout: _head.default
  });
});
define('ember-pokedex/components/head-layout', ['exports', 'ember-cli-head/templates/components/head-layout'], function (exports, _headLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    layout: _headLayout.default
  });
});
define('ember-pokedex/components/image-chip', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'span',
    classNames: ['epd-c-imageChip'],
    classNameBindings: ['chipColor'],

    chipImage: 'http://lorempixel.com/g/100/100',
    chipText: '',

    chipColor: Ember.computed('color', function () {
      return 'epd-c-imageChip--' + this.get('color');
    })
  });
});
define('ember-pokedex/components/paper-autocomplete-content', ['exports', 'ember-paper/components/paper-autocomplete-content'], function (exports, _paperAutocompleteContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteContent.default;
});
define('ember-pokedex/components/paper-autocomplete-dropdown', ['exports', 'ember-paper/components/paper-autocomplete-dropdown'], function (exports, _paperAutocompleteDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteDropdown.default;
});
define('ember-pokedex/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _paperAutocompleteHighlight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteHighlight.default;
    }
  });
});
define('ember-pokedex/components/paper-autocomplete-options', ['exports', 'ember-paper/components/paper-autocomplete-options'], function (exports, _paperAutocompleteOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteOptions.default;
    }
  });
});
define('ember-pokedex/components/paper-autocomplete-trigger-container', ['exports', 'ember-paper/components/paper-autocomplete-trigger-container'], function (exports, _paperAutocompleteTriggerContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTriggerContainer.default;
});
define('ember-pokedex/components/paper-autocomplete-trigger', ['exports', 'ember-paper/components/paper-autocomplete-trigger'], function (exports, _paperAutocompleteTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTrigger.default;
});
define('ember-pokedex/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _paperAutocomplete) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocomplete.default;
    }
  });
});
define('ember-pokedex/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _paperBackdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperBackdrop.default;
});
define('ember-pokedex/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _paperButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperButton.default;
});
define('ember-pokedex/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _paperCardActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardActions.default;
});
define('ember-pokedex/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _paperCardAvatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardAvatar.default;
});
define('ember-pokedex/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _paperCardContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardContent.default;
});
define('ember-pokedex/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _paperCardHeaderHeadline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderHeadline.default;
});
define('ember-pokedex/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _paperCardHeaderSubhead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderSubhead.default;
});
define('ember-pokedex/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _paperCardHeaderText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderText.default;
});
define('ember-pokedex/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _paperCardHeaderTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderTitle.default;
});
define('ember-pokedex/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _paperCardHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeader.default;
});
define('ember-pokedex/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _paperCardIconActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardIconActions.default;
});
define('ember-pokedex/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _paperCardImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardImage.default;
});
define('ember-pokedex/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _paperCardMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardMedia.default;
});
define('ember-pokedex/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _paperCardTitleMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleMedia.default;
});
define('ember-pokedex/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _paperCardTitleText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleText.default;
});
define('ember-pokedex/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _paperCardTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitle.default;
});
define('ember-pokedex/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _paperCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCard.default;
});
define('ember-pokedex/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _paperCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCheckbox.default;
});
define('ember-pokedex/components/paper-chips', ['exports', 'ember-paper/components/paper-chips'], function (exports, _paperChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperChips.default;
});
define('ember-pokedex/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-contact-chips'], function (exports, _paperContactChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContactChips.default;
});
define('ember-pokedex/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _paperContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContent.default;
});
define('ember-pokedex/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _paperDialogActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
define('ember-pokedex/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _paperDialogContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
define('ember-pokedex/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _paperDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
define('ember-pokedex/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _paperDialogInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
define('ember-pokedex/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _paperDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
define('ember-pokedex/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _paperDivider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperDivider.default;
});
define('ember-pokedex/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _paperForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperForm.default;
});
define('ember-pokedex/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _paperGridList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
define('ember-pokedex/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _paperGridTileFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
define('ember-pokedex/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _paperGridTile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
define('ember-pokedex/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _paperIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperIcon.default;
});
define('ember-pokedex/components/paper-ink-bar', ['exports', 'ember-paper/components/paper-ink-bar'], function (exports, _paperInkBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
define('ember-pokedex/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _paperInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperInput.default;
});
define('ember-pokedex/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _paperItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperItem.default;
});
define('ember-pokedex/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _paperList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperList.default;
});
define('ember-pokedex/components/paper-menu-content-inner', ['exports', 'ember-paper/components/paper-menu-content-inner'], function (exports, _paperMenuContentInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContentInner.default;
    }
  });
});
define('ember-pokedex/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _paperMenuContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContent.default;
    }
  });
});
define('ember-pokedex/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _paperMenuItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuItem.default;
    }
  });
});
define('ember-pokedex/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _paperMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenu.default;
    }
  });
});
define('ember-pokedex/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _paperOptgroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperOptgroup.default;
    }
  });
});
define('ember-pokedex/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _paperOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperOption.default;
});
define('ember-pokedex/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _paperProgressCircular) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
define('ember-pokedex/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _paperProgressLinear) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
define('ember-pokedex/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _paperRadioGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
define('ember-pokedex/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-proxiable'], function (exports, _paperRadioProxiable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
define('ember-pokedex/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _paperRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
define('ember-pokedex/components/paper-reset-button', ['exports', 'ember-paper/components/paper-reset-button'], function (exports, _paperResetButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
define('ember-pokedex/components/paper-select-content', ['exports', 'ember-paper/components/paper-select-content'], function (exports, _paperSelectContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectContent.default;
    }
  });
});
define('ember-pokedex/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _paperSelectHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectHeader.default;
    }
  });
});
define('ember-pokedex/components/paper-select-menu-inner', ['exports', 'ember-paper/components/paper-select-menu-inner'], function (exports, _paperSelectMenuInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenuInner.default;
    }
  });
});
define('ember-pokedex/components/paper-select-menu-trigger', ['exports', 'ember-paper/components/paper-select-menu-trigger'], function (exports, _paperSelectMenuTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelectMenuTrigger.default;
});
define('ember-pokedex/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _paperSelectMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenu.default;
    }
  });
});
define('ember-pokedex/components/paper-select-options', ['exports', 'ember-paper/components/paper-select-options'], function (exports, _paperSelectOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectOptions.default;
    }
  });
});
define('ember-pokedex/components/paper-select-search', ['exports', 'ember-paper/components/paper-select-search'], function (exports, _paperSelectSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectSearch.default;
    }
  });
});
define('ember-pokedex/components/paper-select-trigger', ['exports', 'ember-paper/components/paper-select-trigger'], function (exports, _paperSelectTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectTrigger.default;
    }
  });
});
define('ember-pokedex/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _paperSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelect.default;
});
define('ember-pokedex/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _paperSidenavContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
define('ember-pokedex/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _paperSidenavInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavInner.default;
});
define('ember-pokedex/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _paperSidenavToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavToggle.default;
});
define('ember-pokedex/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenav.default;
});
define('ember-pokedex/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _paperSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSlider.default;
});
define('ember-pokedex/components/paper-snackbar-text', ['exports', 'ember-paper/components/paper-snackbar-text'], function (exports, _paperSnackbarText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSnackbarText.default;
    }
  });
});
define('ember-pokedex/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _paperSubheader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSubheader.default;
});
define('ember-pokedex/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _paperSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSwitch.default;
});
define('ember-pokedex/components/paper-tab', ['exports', 'ember-paper/components/paper-tab'], function (exports, _paperTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
define('ember-pokedex/components/paper-tabs', ['exports', 'ember-paper/components/paper-tabs'], function (exports, _paperTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
define('ember-pokedex/components/paper-toast-inner', ['exports', 'ember-paper/components/paper-toast-inner'], function (exports, _paperToastInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
define('ember-pokedex/components/paper-toast-text', ['exports', 'ember-paper/components/paper-toast-text'], function (exports, _paperToastText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
define('ember-pokedex/components/paper-toast', ['exports', 'ember-paper/components/paper-toast'], function (exports, _paperToast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
define('ember-pokedex/components/paper-toaster', ['exports', 'ember-paper/components/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
define('ember-pokedex/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _paperToolbarTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbarTools.default;
});
define('ember-pokedex/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _paperToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbar.default;
});
define('ember-pokedex/components/paper-tooltip-inner', ['exports', 'ember-paper/components/paper-tooltip-inner'], function (exports, _paperTooltipInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
define('ember-pokedex/components/paper-tooltip', ['exports', 'ember-paper/components/paper-tooltip'], function (exports, _paperTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
define('ember-pokedex/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/components/paper-virtual-repeat-scroller'], function (exports, _paperVirtualRepeatScroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeatScroller.default;
});
define('ember-pokedex/components/paper-virtual-repeat', ['exports', 'ember-paper/components/paper-virtual-repeat'], function (exports, _paperVirtualRepeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeat.default;
});
define('ember-pokedex/components/pokemon-filter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    search_value: '',
    search_filter: '',
    sort_params: ['id:asc'],

    pokemon_data: Ember.computed.map('pokemon', function (pokemon) {
      var new_data = {
        "id": parseInt(String(pokemon.url).split('/')[6]),
        "name": pokemon.name,
        "url": pokemon.url,
        "is_hidden": pokemon.is_hidden
      };

      return new_data;
    }),

    filtered_pokemon: Ember.computed.filter('pokemon_data', function (pokemon) {
      var filter = this.get('search_filter').toLowerCase(),
          name = pokemon.name;

      return name.includes(filter) && pokemon.id < 722;
    }),

    sorted_pokemon: Ember.computed.sort('filtered_pokemon', 'sort_params'),

    clear_search: function () {
      this.set('search_value', '');
      this.set('search_filter', '');
    }.observes('pokemon_data'),

    actions: {
      update_search: function update_search(value) {
        this.set('search_value', value);
        this.set('search_filter', value);
        this.notifyPropertyChange('filtered_pokemon');
      }
    }
  });
});
define('ember-pokedex/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('ember-pokedex/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('ember-pokedex/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('ember-pokedex/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('ember-pokedex/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('ember-pokedex/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('ember-pokedex/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('ember-pokedex/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('ember-pokedex/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('ember-pokedex/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _transitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
define('ember-pokedex/components/virtual-each', ['exports', 'virtual-each/components/virtual-each/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('ember-pokedex/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-pokedex/controllers/ability/ability-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    pokemon_data: Ember.computed.map('model.pokemon', function (pokemon) {

      var new_data = {
        "name": pokemon.pokemon.name,
        "url": pokemon.pokemon.url,
        "is_hidden": pokemon.is_hidden
      };

      return new_data;
    })
  });
});
define('ember-pokedex/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    leftSideBarOpen: false,
    leftSideBarLockedOpen: false,

    spriteURL: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',

    actions: {
      toggle: function toggle(value) {
        return this.toggleProperty(value);
      }
    }
  });
});
define('ember-pokedex/controllers/generation/generation-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    title: Ember.computed(function () {
      var generation = this.get('model.name').split('-')[1].toUpperCase(),
          region = this.get('model.main_region.name');

      return 'Generation ' + generation + ' in the ' + capitalize(region) + ' region.';
    })
  });


  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
define('ember-pokedex/controllers/pokemon-color', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('ember-pokedex/controllers/pokemon-color/pokemon-color-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('ember-pokedex/controllers/pokemon-shape', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    shape_chips: Ember.computed.map('model', function (item) {
      var new_data = {
        name: item.name,
        id: item.id,
        url: '/assets/images/forms/' + item.name + '.png'
      };

      return new_data;
    })
  });
});
define('ember-pokedex/controllers/pokemon/pokemon-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    generation: Ember.computed('model.species.generation.name', function () {

      var numeral = String(this.get('model.species.generation.name')).split('-')[1];
      var gen_id = '';

      switch (numeral) {
        case 'i':
          gen_id = 1;
          break;
        case 'ii':
          gen_id = 2;
          break;
        case 'iii':
          gen_id = 3;
          break;
        case 'iv':
          gen_id = 4;
          break;
        case 'v':
          gen_id = 5;
          break;
        case 'vi':
          gen_id = 6;
          break;
        default:
          gen_id = 0;
      }

      var new_data = {
        "numeral": numeral,
        "id": gen_id
      };

      return new_data;
    }),

    genus: Ember.computed.filter('model.species.genera', function (entry) {
      return entry.language.name == 'en';
    }),

    growth_rate_id: Ember.computed('model.species.growth_rate', function () {
      var growth_rate_url = this.get('model.species.growth_rate.url');

      return String(growth_rate_url).split('/')[6];
    }),

    habitat_id: Ember.computed('model.species.habitat', function () {
      var habitat_url = this.get('model.species.habitat.url');

      return String(habitat_url).split('/')[6];
    }),

    evolution_id: Ember.computed('model.species.evolution_chain', function () {
      var evo_url = this.get('model.species.evolution_chain.url');

      return String(evo_url).split('/')[6];
    }),

    types_data: Ember.computed.map('model.base.types', function (type) {

      var new_data = {
        "name": type.type.name,
        "id": String(type.type.url).split('/')[6],
        "url": '/assets/images/types/' + type.type.name + '.png'
      };

      return new_data;
    }),

    abilities_data: Ember.computed.map('model.base.abilities', function (ability) {

      var new_data = {
        "name": ability.ability.name,
        "is_hidden": ability.is_hidden,
        "id": String(ability.ability.url).split('/')[6]
      };

      return new_data;
    }),

    abilitySorting: ['is_hidden'],
    sorted_abilities: Ember.computed.sort('abilities_data', 'abilitySorting')
  });
});
define('ember-pokedex/controllers/pokemon/pokemon-id/evolution/evolution-chain', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('ember-pokedex/controllers/pokemon/pokemon-id/moves', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    search_value: '',
    search_filter: '',

    lvlMoves: Ember.computed.filter('model.base.moves', function (move) {

      return move.version_group_details[0].move_learn_method.name == 'level-up';
    }),

    tmMoves: Ember.computed.filter('model.base.moves', function (move) {

      return move.version_group_details[0].move_learn_method.name == 'machine';
    }),

    recentMoves: Ember.computed('lvlMoves', function () {
      var moves = this.get('lvlMoves'),
          move_name = '',
          move_level = '',
          moves_result = [];

      moves.forEach(function (move) {
        move_name = move.move.name;

        move.version_group_details.forEach(function (version) {

          if (version.version_group.name == 'x-y') {
            move_level = version.level_learned_at;
          }
        });

        moves_result.push({
          'name': move_name.replace('-', ' '),
          'level': move_level
        });
      });

      return moves_result;
    }),

    sortProperties: ["level:asc"],

    sortedMoves: Ember.computed.sort("recentMoves", "sortProperties"),

    filtered_moves: Ember.computed.filter('sortedMoves', function (move) {
      var filter = this.get('search_filter').toLowerCase(),
          name = move.name;

      return name.includes(filter);
    }),

    filtered_tms: Ember.computed.filter('tmMoves', function (move) {
      var filter = this.get('search_filter').toLowerCase(),
          name = move.move.name;

      return name.includes(filter);
    }),

    clear_search: function () {
      this.set('search_value', '');
      this.set('search_filter', '');
    }.observes('recent_moves', 'tmMoves'),

    actions: {
      update_search: function update_search(value) {
        this.set('search_value', value);
        this.set('search_filter', value);
        this.notifyPropertyChange('filtered_moves');
        this.notifyPropertyChange('filtered_tms');
      }
    }
  });
});
define('ember-pokedex/controllers/pokemon/pokemon-id/pokedex', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    engDex: Ember.computed.filter('model.species.flavor_text_entries', function (entry) {
      return entry.language.name == 'en';
    }),

    engDex_reversed: Ember.computed('engDex', function () {
      return this.get('engDex').reverse();
    })
  });
});
define('ember-pokedex/controllers/pokemon/pokemon-id/stats', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    stats: Ember.computed.filter('model.base.stats', function () {
      return true;
    }),

    stats_updated: Ember.computed.map('stats', function (stat) {
      var stat_css_value = parseInt((stat.base_stat / 2).toFixed(0)),
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

      var new_data = {
        'name': stat.stat.name,
        'value': stat.base_stat,
        'value_width': stat_css_value,
        'value_class': stat_css_color
      };

      return new_data;
    }),

    stats_reversed: Ember.computed('stats_updated', function () {
      return this.get('stats_updated').reverse();
    })
  });
});
define('ember-pokedex/controllers/type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    type_chips: Ember.computed.map('model', function (item) {
      var new_data = {
        name: item.name,
        id: item.id,
        url: '/assets/images/types/' + item.name + '.png'
      };

      return new_data;
    })
  });
});
define('ember-pokedex/controllers/type/type-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    pokemon_data: Ember.computed.map('model.pokemon', function (pokemon) {

      var new_data = {
        "name": pokemon.pokemon.name,
        "url": pokemon.pokemon.url
      };

      return new_data;
    })
  });
});
define('ember-pokedex/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('ember-pokedex/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/app-version', ['exports', 'ember-pokedex/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-pokedex/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('ember-pokedex/helpers/cleanup-text', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cleanupText = cleanupText;
  function cleanupText(params) {
    var param = String(params).replace(/-/g, " "),
        capitalized = param.charAt(0).toUpperCase() + param.slice(1);

    return capitalized;
  }

  exports.default = Ember.Helper.helper(cleanupText);
});
define('ember-pokedex/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('ember-pokedex/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('ember-pokedex/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('ember-pokedex/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('ember-pokedex/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/next-poke', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nextPoke = nextPoke;
  function nextPoke(params /*, hash*/) {
    var id = parseInt(params);

    return id < 1000 ? id + 1 : null;
  }

  exports.default = Ember.Helper.helper(nextPoke);
});
define('ember-pokedex/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('ember-pokedex/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-pokedex/helpers/pokemon-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.pokemonId = pokemonId;
  function pokemonId(params) {
    return String(params).split('/')[6];
  }

  exports.default = Ember.Helper.helper(pokemonId);
});
define('ember-pokedex/helpers/prev-poke', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.prevPoke = prevPoke;
  function prevPoke(params /*, hash*/) {
    var id = parseInt(params);

    return id > 1 ? id - 1 : null;
  }

  exports.default = Ember.Helper.helper(prevPoke);
});
define('ember-pokedex/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-pokedex/helpers/sprite', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sprite = sprite;
  function sprite(id) {

    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + '.png';
  }

  exports.default = Ember.Helper.helper(sprite);
});
define('ember-pokedex/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('ember-pokedex/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('ember-pokedex/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-pokedex/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-pokedex/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-pokedex/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-pokedex/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('ember-pokedex/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-pokedex/initializers/export-application-global', ['exports', 'ember-pokedex/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-pokedex/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-pokedex/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-pokedex/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-pokedex/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("ember-pokedex/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-pokedex/instance-initializers/head-browser', ['exports', 'ember-pokedex/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = undefined;
  function _initialize(owner) {
    if (_environment.default['ember-cli-head'] && _environment.default['ember-cli-head']['suppressBrowserRender']) {
      return true;
    }

    // clear fast booted head (if any)
    var startMeta = document.querySelector('meta[name="ember-cli-head-start"]');
    var endMeta = document.querySelector('meta[name="ember-cli-head-end"]');
    if (startMeta && endMeta) {
      var el = startMeta.nextSibling;
      while (el && el !== endMeta) {
        document.head.removeChild(el);
        el = startMeta.nextSibling;
      }
      document.head.removeChild(startMeta);
      document.head.removeChild(endMeta);
    }

    var component = owner.lookup('component:head-layout');
    component.appendTo(document.head);
  }

  exports.initialize = _initialize;
  exports.default = {
    name: 'head-browser',
    initialize: function initialize() {
      if (typeof FastBoot === 'undefined') {
        _initialize.apply(undefined, arguments);
      }
    }
  };
});
define('ember-pokedex/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _transitionMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
define('ember-pokedex/models/ability', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    pokemon: _emberData.default.attr(),
    effect_entries: _emberData.default.attr()
  });
});
define('ember-pokedex/models/custom-inflector-rules', ['exports', 'ember-inflector'], function (exports, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var inflector = _emberInflector.default.inflector;

  inflector.irregular('type', 'type');
  inflector.irregular('ability', 'ability');
  inflector.irregular('pokemon', 'pokemon');
  inflector.irregular('generation', 'generation');
  inflector.irregular('growth-rate', 'growth-rate');
  inflector.irregular('pokemon-color', 'pokemon-color');
  inflector.irregular('pokemon-shape', 'pokemon-shape');
  inflector.irregular('pokemon-habitat', 'pokemon-habitat');
  inflector.irregular('pokemon-species', 'pokemon-species');
  inflector.irregular('evolution-chain', 'evolution-chain');

  // Meet Ember Inspector's expectation of an export
  exports.default = {};
});
define('ember-pokedex/models/evolution-chain', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    chain: _emberData.default.attr()
  });
});
define('ember-pokedex/models/generation', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    pokemon_species: _emberData.default.attr(),
    main_region: _emberData.default.attr({
      name: _emberData.default.attr('string')
    })
  });
});
define('ember-pokedex/models/growth-rate', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    pokemon_species: _emberData.default.attr({
      name: _emberData.default.attr('string'),
      url: _emberData.default.attr('url')
    })
  });
});
define('ember-pokedex/models/pokemon-color', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    pokemon_species: _emberData.default.attr(),
    results: _emberData.default.attr()
  });
});
define('ember-pokedex/models/pokemon-habitat', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    pokemon_species: _emberData.default.attr()
  });
});
define('ember-pokedex/models/pokemon-shape', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    pokemon_species: _emberData.default.attr()
  });
});
define('ember-pokedex/models/pokemon-species', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    base_happiness: _emberData.default.attr('number'),
    hatch_counter: _emberData.default.attr('number'),
    color: _emberData.default.attr({
      name: _emberData.default.attr('string'),
      url: _emberData.default.attr('string')
    }),
    shape: _emberData.default.attr({
      name: _emberData.default.attr('string'),
      url: _emberData.default.attr('string')
    }),
    habitat: _emberData.default.attr({
      name: _emberData.default.attr('string')
    }),
    generation: _emberData.default.attr({
      name: _emberData.default.attr('string')
    }),
    growth_rate: _emberData.default.attr({
      name: _emberData.default.attr('string')
    }),
    capture_rate: _emberData.default.attr('number'),
    evolution_chain: _emberData.default.attr(),
    genera: _emberData.default.attr(),
    flavor_text_entries: _emberData.default.attr(),

    color_id: Ember.computed(function () {
      return String(this.get('color.url')).split('/')[6];
    }),

    shape_id: Ember.computed(function () {
      return String(this.get('shape.url')).split('/')[6];
    }),

    shape_img_path: Ember.computed(function () {
      var shape = String(this.get('shape.name'));

      return '/assets/images/forms/' + shape + '.png';
    }),

    hatch_steps: Ember.computed('hatch_counter', function () {
      return (parseInt(this.get('hatch_counter')) + 1) * 255;
    })
  });
});
define('ember-pokedex/models/pokemon', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    weight: _emberData.default.attr('number'),
    height: _emberData.default.attr('number'),
    types: _emberData.default.attr(),
    sprites: _emberData.default.attr({
      back_default: _emberData.default.attr('url'),
      back_shiny: _emberData.default.attr('url'),
      front_default: _emberData.default.attr('url'),
      front_shiny: _emberData.default.attr('url')
    }),
    abilities: _emberData.default.attr(),
    moves: _emberData.default.attr(),
    stats: _emberData.default.attr(),

    weight_kg: Ember.computed('weight', function () {
      return this.get('weight') / 10 + ' kilograms';
    }),

    height_meters: Ember.computed('height', function () {
      return this.get('height') / 10 + ' meters';
    }),

    next_id: Ember.computed('id', function () {
      var id = parseInt(this.get('id'));

      return id < 1000 ? id + 1 : null;
    }),

    prev_id: Ember.computed('id', function () {
      var id = parseInt(this.get('id'));

      return id > 1 ? id - 1 : null;
    })
  });
});
define('ember-pokedex/models/type', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    pokemon: _emberData.default.attr(),

    damage_relations: _emberData.default.attr({
      half_damage_from: _emberData.default.attr(),
      no_damage_from: _emberData.default.attr(),
      half_damage_to: _emberData.default.attr(),
      double_damage_from: _emberData.default.attr(),
      no_damage_to: _emberData.default.attr(),
      double_damage_to: _emberData.default.attr()
    })
  });
});
define('ember-pokedex/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-pokedex/router', ['exports', 'ember-pokedex/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    title: 'FFF',
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('pokemon', function () {
      this.route('pokemon_id', {
        path: ':pokemon_id'
      }, function () {
        this.route('evolution', function () {
          this.route('evolution_chain', {
            path: ':evolution_chain'
          });
        });
        this.route('pokedex');
        this.route('moves');
        this.route('stats');
      });
    });
    this.route('type', function () {
      this.route('type-id', {
        path: ':type_id'
      });
    });
    this.route('ability', function () {
      this.route('ability_id', {
        path: ':ability_id'
      });
    });
    this.route('growth_rate', function () {
      this.route('growth_rate_id', {
        path: ':growth_rate_id'
      });
    });
    this.route('pokemon_color', function () {
      this.route('pokemon_color_id', {
        path: ':pokemon_color_id'
      });
    });
    this.route('pokemon_shape', function () {
      this.route('pokemon_shape_id', {
        path: ':pokemon_shape_id'
      });
    });
    this.route('generation', function () {
      this.route('generation_id', {
        path: ':generation_id'
      });
    });
    this.route('pokemon_habitat', function () {
      this.route('pokemon_habitat_id', {
        path: ':pokemon_habitat_id'
      });
    });
  });

  exports.default = Router;
});
define('ember-pokedex/routes/ability', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Abilities'
  });
});
define('ember-pokedex/routes/ability/ability-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('ability', params.ability_id);
    }
  });
});
define('ember-pokedex/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    title: function title(tokens) {
      tokens = Ember.makeArray(tokens);

      return tokens.length ? tokens.reverse().join(' | ') + ' | EmberDex' : 'EmberDex';
    }
  });
});
define('ember-pokedex/routes/generation', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Generations',

    model: function model() {

      return [{
        "name": "I",
        "id": 1
      }, {
        "name": "II",
        "id": 2
      }, {
        "name": "III",
        "id": 3
      }, {
        "name": "IV",
        "id": 4
      }, {
        "name": "V",
        "id": 5
      }, {
        "name": "VI",
        "id": 6
      }];
    }
  });
});
define('ember-pokedex/routes/generation/generation-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('generation', params.generation_id);
    }
  });
});
define('ember-pokedex/routes/growth-rate', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Growth Rates',

    model: function model() {
      return [{
        "id": 1,
        "name": "slow"
      }, {
        "id": 2,
        "name": "medium"
      }, {
        "id": 3,
        "name": "fast"
      }, {
        "id": 4,
        "name": "medium-slow"
      }, {
        "id": 5,
        "name": "slow-then-very-fast"
      }, {
        "id": 6,
        "name": "fast-then-very-slow"
      }];
    }
  });
});
define('ember-pokedex/routes/growth-rate/growth-rate-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('growth-rate', params.growth_rate_id);
    }
  });
});
define('ember-pokedex/routes/pokemon-color', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Colors',

    model: function model() {

      return [{
        "name": "black",
        "id": 1
      }, {
        "name": "blue",
        "id": 2
      }, {
        "name": "brown",
        "id": 3
      }, {
        "name": "gray",
        "id": 4
      }, {
        "name": "green",
        "id": 5
      }, {
        "name": "pink",
        "id": 6
      }, {
        "name": "purple",
        "id": 7
      }, {
        "name": "red",
        "id": 8
      }, {
        "name": "white",
        "id": 9
      }, {
        "name": "yellow",
        "id": 10
      }];
    }
  });
});
define('ember-pokedex/routes/pokemon-color/pokemon-color-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('pokemon-color', params.pokemon_color_id);
    }
  });
});
define('ember-pokedex/routes/pokemon-habitat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Habitats',

    model: function model() {
      return [{
        "id": 1,
        "name": "cave"
      }, {
        "id": 2,
        "name": "forest"
      }, {
        "id": 3,
        "name": "grassland"
      }, {
        "id": 4,
        "name": "mountain"
      }, {
        "id": 5,
        "name": "rare"
      }, {
        "id": 6,
        "name": "rough-terrain"
      }, {
        "id": 7,
        "name": "sea"
      }, {
        "id": 8,
        "name": "urban"
      }, {
        "id": 9,
        "name": "waters-edge"
      }];
    }
  });
});
define('ember-pokedex/routes/pokemon-habitat/pokemon-habitat-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('pokemon-habitat', params.pokemon_habitat_id);
    }
  });
});
define('ember-pokedex/routes/pokemon-shape', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Shapes',

    model: function model() {

      return [{
        'name': 'ball',
        'id': 1
      }, {
        'name': 'squiggle',
        'id': 2
      }, {
        'name': 'fish',
        'id': 3
      }, {
        'name': 'arms',
        'id': 4
      }, {
        'name': 'blob',
        'id': 5
      }, {
        'name': 'upright',
        'id': 6
      }, {
        'name': 'legs',
        'id': 7
      }, {
        'name': 'quadruped',
        'id': 8
      }, {
        'name': 'wings',
        'id': 9
      }, {
        'name': 'tentacles',
        'id': 10
      }, {
        'name': 'head',
        'id': 11
      }, {
        'name': 'humanoid',
        'id': 12
      }, {
        'name': 'bug-wings',
        'id': 13
      }, {
        'name': 'armor',
        'id': 14
      }];
    }
  });
});
define('ember-pokedex/routes/pokemon-shape/pokemon-shape-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('pokemon-shape', params.pokemon_shape_id);
    }
  });
});
define('ember-pokedex/routes/pokemon', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Pokemon'
  });
});
define('ember-pokedex/routes/pokemon/pokemon-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return {
        "base": this.get('store').findRecord('pokemon', params.pokemon_id),
        "species": this.get('store').findRecord('pokemon-species', params.pokemon_id)
      };
    }
  });
});
define('ember-pokedex/routes/pokemon/pokemon-id/evolution', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Evolution'
  });
});
define('ember-pokedex/routes/pokemon/pokemon-id/evolution/evolution-chain', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('evolution-chain', params.evolution_chain);
    }
  });
});
define('ember-pokedex/routes/pokemon/pokemon-id/moves', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Moves'
  });
});
define('ember-pokedex/routes/pokemon/pokemon-id/pokedex', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Pokedex'
  });
});
define('ember-pokedex/routes/pokemon/pokemon-id/stats', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    titleToken: 'Stats'
  });
});
define('ember-pokedex/routes/type', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {

      return [{
        'name': 'normal',
        'id': 1
      }, {
        'name': 'fighting',
        'id': 2
      }, {
        'name': 'flying',
        'id': 3
      }, {
        'name': 'poison',
        'id': 4
      }, {
        'name': 'ground',
        'id': 5
      }, {
        'name': 'rock',
        'id': 6
      }, {
        'name': 'bug',
        'id': 7
      }, {
        'name': 'ghost',
        'id': 8
      }, {
        'name': 'steel',
        'id': 9
      }, {
        'name': 'fire',
        'id': 10
      }, {
        'name': 'water',
        'id': 11
      }, {
        'name': 'grass',
        'id': 12
      }, {
        'name': 'electric',
        'id': 13
      }, {
        'name': 'psychic',
        'id': 14
      }, {
        'name': 'ice',
        'id': 15
      }, {
        'name': 'dragon',
        'id': 16
      }, {
        'name': 'dark',
        'id': 17
      }, {
        'name': 'fairy',
        'id': 18
      }];
    }
  });
});
define('ember-pokedex/routes/type/type-id', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(params) {

      return this.get('store').findRecord('type', params.type_id);
    }
  });
});
define('ember-pokedex/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({});
});
define('ember-pokedex/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ember-pokedex/services/constants', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service,
      inject = Ember.inject,
      computed = Ember.computed,
      EObject = Ember.Object;
  exports.default = Service.extend({

    sniffer: inject.service('sniffer'),

    webkit: computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty: function vendorProperty(name) {
      var prefix = this.get('sniffer.vendorPrefix').toLowerCase();
      return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
    },


    CSS: computed('webkit', function () {
      var webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
        ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: EObject.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
define('ember-pokedex/services/head-data', ['exports', 'ember-cli-head/services/head-data'], function (exports, _headData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _headData.default;
    }
  });
});
define('ember-pokedex/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
define('ember-pokedex/services/paper-toaster', ['exports', 'ember-paper/services/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
define('ember-pokedex/services/sniffer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service,
      computed = Ember.computed;


  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  var toInt = function toInt(str) {
    return parseInt(str, 10);
  };

  exports.default = Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var _document = document;
      var _window = window;

      this.setProperties({
        _document: _document,
        _window: _window
      });

      var bodyStyle = _document.body && _document.body.style;
      var vendorPrefix = void 0;
      var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      var transitions = false;
      var animations = false;
      var match = void 0;

      if (bodyStyle) {
        for (var prop in bodyStyle) {
          if (match = vendorRegex.exec(prop)) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
        animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }
  });
});
define('ember-pokedex/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('ember-pokedex/services/util', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service,
      $ = Ember.$;


  var Util = Service.extend({
    disableScrollAround: function disableScrollAround(element) {
      var util = this;
      var $document = $(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      var _$document$get = $document.get(0),
          body = _$document$get.body;

      var restoreBody = disableBodyScroll();
      var restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        var zIndex = 50;
        var scrollMask = $('<div class="md-scroll-mask" style="z-index: ' + zIndex + '">\n          <div class="md-scroll-mask-bar"></div>\n        </div>');
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav(e) {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        var htmlNode = body.parentNode;
        var restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        var restoreBodyStyle = body.getAttribute('style') || '';
        var scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        var clientWidth = body.clientWidth;


        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: -scrollOffset + 'px'
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (var key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling: function enableScrolling() {
      var method = this.disableScrollAround._enableScrolling;
      method && method();
    },
    supplant: function supplant(template, values, pattern) {
      pattern = pattern || /\{([^\{\}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        var p = b.split('.');
        var r = values;
        try {
          for (var s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },

    nextTick: function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    }(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports.default = Util;
});
define("ember-pokedex/templates/ability", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "798hnCjY", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/ability.hbs" } });
});
define("ember-pokedex/templates/ability/ability-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fgqwQJQK", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[11,\"h3\",[]],[13],[0,\"\\n    \"],[1,[33,[\"cleanup-text\"],[[28,[\"model\",\"name\"]]],null],false],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"model\",\"effect_entries\"]]],null,{\"statements\":[[0,\"    \"],[11,\"p\",[]],[13],[0,\"\\n      \"],[11,\"strong\",[]],[13],[0,\"tl;dr\"],[14],[0,\" - \"],[1,[28,[\"entry\",\"short_effect\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"p\",[]],[13],[0,\"\\n      \"],[11,\"strong\",[]],[13],[0,\"Full description\"],[14],[0,\" - \"],[1,[28,[\"entry\",\"effect\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[\"entry\"]},null],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[1,[33,[\"pokemon-filter\"],null,[[\"name\",\"pokemon\"],[[28,[\"model\",\"name\"]],[28,[\"pokemon_data\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/ability/ability-id.hbs" } });
});
define("ember-pokedex/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "415KQZhK", "block": "{\"statements\":[[6,[\"paper-sidenav-container\"],null,[[\"class\"],[\"inner-sidenav\"]],{\"statements\":[[0,\"\\n\"],[6,[\"paper-sidenav\"],null,[[\"class\",\"name\",\"open\",\"onToggle\"],[\"md-whiteframe-z2 md-sidenav-left epd-l-main__sidenav\",\"left2\",[28,[\"leftSideBarOpen\"]],[33,[\"action\"],[[28,[null]],[33,[\"mut\"],[[28,[\"leftSideBarOpen\"]]],null]],null]]],{\"statements\":[[6,[\"paper-toolbar\"],null,[[\"accent\",\"tall\",\"class\"],[true,true,\"epd-l-main__sidenav-header\"]],{\"statements\":[[0,\"      \"],[11,\"span\",[]],[15,\"class\",\"flex\"],[13],[14],[0,\"\\n      \"],[11,\"h1\",[]],[13],[0,\"\\n        EmberDex\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[6,[\"link-to\"],[\"type\"],null,{\"statements\":[[6,[\"paper-content\"],null,[[\"padding\"],[true]],{\"statements\":[[0,\"        Types\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"link-to\"],[\"pokemon_color\"],null,{\"statements\":[[6,[\"paper-content\"],null,[[\"padding\"],[true]],{\"statements\":[[0,\"        Colors\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"link-to\"],[\"pokemon_shape\"],null,{\"statements\":[[6,[\"paper-content\"],null,[[\"padding\"],[true]],{\"statements\":[[0,\"        Shapes\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"link-to\"],[\"pokemon_habitat\"],null,{\"statements\":[[6,[\"paper-content\"],null,[[\"padding\"],[true]],{\"statements\":[[0,\"        Habitats\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"link-to\"],[\"generation\"],null,{\"statements\":[[6,[\"paper-content\"],null,[[\"padding\"],[true]],{\"statements\":[[0,\"        Generations\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[6,[\"link-to\"],[\"growth_rate\"],null,{\"statements\":[[6,[\"paper-content\"],null,[[\"padding\"],[true]],{\"statements\":[[0,\"        Growth Rate\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"paper-card-content\"],null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"epd-l-main__content\"],[13],[0,\"\\n\"],[6,[\"paper-toolbar\"],null,null,{\"statements\":[[6,[\"paper-toolbar-tools\"],null,null,{\"statements\":[[6,[\"paper-button\"],null,[[\"iconButton\",\"onClick\",\"class\"],[true,[33,[\"action\"],[[28,[null]],\"toggle\",\"leftSideBarOpen\"],null],\"epd-l-main__sidenav-toggle\"]],{\"statements\":[[0,\"            \"],[1,[33,[\"paper-icon\"],[\"menu\"],null],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"          \"],[11,\"h2\",[]],[13],[0,\"\\n            Welcome to the EmberDex!\\n          \"],[14],[0,\"\\n          \"],[11,\"span\",[]],[15,\"class\",\"flex\"],[13],[14],[0,\"\\n\"],[6,[\"paper-button\"],null,[[\"iconButton\",\"href\",\"target\"],[true,\"https://github.com/maxx1128/ember-pokedex\",\"_blank\"]],{\"statements\":[[0,\"            \"],[1,[33,[\"paper-icon\"],[\"code\"],null],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"epd-l-main__body\"],[13],[0,\"\\n        \"],[1,[26,[\"outlet\"]],false],[0,\"\\n      \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/application.hbs" } });
});
define("ember-pokedex/templates/color", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wUywKqDM", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/color.hbs" } });
});
define("ember-pokedex/templates/components/color-chip", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WxsQUEpS", "block": "{\"statements\":[[1,[26,[\"chipText\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/components/color-chip.hbs" } });
});
define("ember-pokedex/templates/components/evolution-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GV75NvLk", "block": "{\"statements\":[[6,[\"link-to\"],[\"pokemon.pokemon_id\",[28,[\"evo_id\"]]],[[\"class\"],[\"epd-c-evoCard__link\"]],{\"statements\":[[0,\"  \"],[11,\"img\",[]],[16,\"src\",[34,[[33,[\"sprite\"],[[28,[\"evo_id\"]]],null]]]],[15,\"alt\",\"\"],[15,\"class\",\"md-avatar epd-c-evoCard__img\"],[13],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"epd-c-evoCard__meta\"],[13],[0,\"\\n    \"],[11,\"h3\",[]],[15,\"class\",\"epd-c-evoCard__name\"],[13],[0,\"\\n      \"],[1,[28,[\"data\",\"species\",\"name\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"evo_details\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"evolve\",\"evo_result\"]]],null,{\"statements\":[[0,\"          \"],[11,\"li\",[]],[15,\"class\",\"epd-c-evoCard__method\"],[13],[1,[28,[\"evolve\",\"evo_result\"]],false],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"evolve\"]},null],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/components/evolution-card.hbs" } });
});
define("ember-pokedex/templates/components/image-chip", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J7k316BH", "block": "{\"statements\":[[11,\"img\",[]],[15,\"class\",\"epd-c-imageChip__img\"],[16,\"src\",[34,[[26,[\"chipImage\"]]]]],[13],[14],[0,\"\\n\\n\"],[11,\"small\",[]],[15,\"class\",\"epd-c-imageChip__text\"],[13],[0,\"\\n  \"],[1,[26,[\"chipText\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/components/image-chip.hbs" } });
});
define("ember-pokedex/templates/components/pokemon-filter", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iqh22nF5", "block": "{\"statements\":[[6,[\"paper-list\"],null,[[\"class\"],[\"list-flex-layout__container\"]],{\"statements\":[[6,[\"paper-subheader\"],null,null,{\"statements\":[[0,\"    \"],[11,\"h2\",[]],[13],[0,\"\\n      \"],[1,[33,[\"cleanup-text\"],[[28,[\"name\"]]],null],false],[0,\"\\n    \"],[14],[0,\"\\n\\n    \"],[1,[33,[\"paper-input\"],null,[[\"class\",\"label\",\"value\",\"onChange\"],[\"flex-50\",\"Name\",[28,[\"search_value\"]],[33,[\"action\"],[[28,[null]],\"update_search\"],null]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokeFilter__container\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"sorted_pokemon\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"pokemon.pokemon_id\",[28,[\"pokemon\",\"id\"]]],[[\"class\"],[\"list-flex-layout__item epd-l-pokeFilter__item\"]],{\"statements\":[[6,[\"paper-item\"],null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"          \"],[11,\"img\",[]],[16,\"src\",[34,[\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/\",[33,[\"pokemon_id\"],[[28,[\"pokemon\",\"url\"]]],null],\".png\"]]],[15,\"alt\",\"\"],[15,\"class\",\"md-avatar epd-l-pokeFilter__image\"],[13],[14],[0,\"\\n          \"],[11,\"div\",[]],[15,\"class\",\"md-list-item-text\"],[13],[0,\"\\n            \"],[11,\"h3\",[]],[13],[0,\"#\"],[1,[28,[\"pokemon\",\"id\"]],false],[0,\": \"],[1,[33,[\"cleanup-text\"],[[28,[\"pokemon\",\"name\"]]],null],false],[0,\" \"],[6,[\"if\"],[[28,[\"pokemon\",\"is_hidden\"]]],null,{\"statements\":[[11,\"strong\",[]],[13],[0,\"(hidden)\"],[14]],\"locals\":[]},null],[14],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[\"pokemon\"]},null],[0,\"  \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/components/pokemon-filter.hbs" } });
});
define("ember-pokedex/templates/components/transition-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Pvul+l+5", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/components/transition-group.hbs" } });
});
define("ember-pokedex/templates/generation", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zaPVo7MN", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"\\n  Generations!\\n\"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"generation.generation_id\",[28,[\"gen\",\"id\"]]],null,{\"statements\":[[6,[\"paper-button\"],null,[[\"primary\",\"class\"],[true,\"epd-l-pokeFilter__button\"]],{\"statements\":[[0,\"      Gen \"],[1,[28,[\"gen\",\"name\"]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[\"gen\"]},null],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/generation.hbs" } });
});
define("ember-pokedex/templates/generation/generation-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pj0QCB9d", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[1,[33,[\"pokemon-filter\"],null,[[\"name\",\"pokemon\"],[[28,[\"title\"]],[28,[\"model\",\"pokemon_species\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/generation/generation-id.hbs" } });
});
define("ember-pokedex/templates/generation/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KJwOIxw4", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[11,\"h4\",[]],[13],[0,\"\\n    See all the Pokemon that were released at specific generations, and filter them down further by name.\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/generation/index.hbs" } });
});
define("ember-pokedex/templates/growth-rate", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Wr2j6YPb", "block": "{\"statements\":[[11,\"h3\",[]],[13],[0,\"\\n  Growth rates!\\n\"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"growth_rate.growth_rate_id\",[28,[\"rate\",\"id\"]]],null,{\"statements\":[[6,[\"paper-button\"],null,[[\"primary\",\"class\"],[true,\"epd-l-pokeFilter__button\"]],{\"statements\":[[0,\"      \"],[1,[33,[\"cleanup-text\"],[[28,[\"rate\",\"name\"]]],null],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[\"rate\"]},null],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/growth-rate.hbs" } });
});
define("ember-pokedex/templates/growth-rate/growth-rate-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DD4TDrSG", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[1,[33,[\"pokemon-filter\"],null,[[\"name\",\"pokemon\"],[[28,[\"model\",\"name\"]],[28,[\"model\",\"pokemon_species\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/growth-rate/growth-rate-id.hbs" } });
});
define("ember-pokedex/templates/growth-rate/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "dOHBM+OT", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[11,\"h4\",[]],[13],[0,\"\\n    See all Pokemon that level up at certain rates, some fast and some slow, and filter them down further by name.\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/growth-rate/index.hbs" } });
});
define("ember-pokedex/templates/head", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3w8ZTVMj", "block": "{\"statements\":[[0,\"\\n\"],[11,\"title\",[]],[13],[0,\"GGGGG\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/head.hbs" } });
});
define("ember-pokedex/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JpmHrw9j", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"\\n  Hello there!\\n\"],[14],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  EmberDex is a small side-project of mine for using the \"],[11,\"a\",[]],[15,\"href\",\"https://pokeapi.co/\"],[15,\"target\",\"_blank\"],[13],[0,\"Pokemon API\"],[14],[0,\" with the Ember App framework with \"],[11,\"a\",[]],[15,\"href\",\"https://miguelcobain.github.io/ember-paper/\"],[15,\"target\",\"_blank\"],[13],[0,\"Ember Paper\"],[14],[0,\". It's made for simple browsing around different categories of Pokemon and viewing their basic info, like their stats and pokedex entries. Check out some of the categories in the side navigation!\\n\"],[14],[0,\"\\n\\n\"],[11,\"p\",[]],[13],[0,\"\\n  You can see the \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/maxx1128/ember-pokedex\"],[15,\"target\",\"_blank\"],[13],[0,\"source code on Github\"],[14],[0,\", or just visit \"],[11,\"a\",[]],[15,\"href\",\"http://maxwellantonucci.com/\"],[15,\"target\",\"_blank\"],[13],[0,\"my own website\"],[14],[0,\" if you're a nice person.\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/index.hbs" } });
});
define("ember-pokedex/templates/pokemon-color", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tzdQH74q", "block": "{\"statements\":[[11,\"h3\",[]],[13],[0,\"\\n  Colors!\\n\"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"pokemon_color.pokemon_color_id\",[28,[\"color\",\"id\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"color-chip\"],null,[[\"chipText\",\"color\"],[[28,[\"color\",\"name\"]],[28,[\"color\",\"name\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"color\"]},null],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-color.hbs" } });
});
define("ember-pokedex/templates/pokemon-color/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uNwZoTaB", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[11,\"h4\",[]],[13],[0,\"\\n    Select a color to see all the pokemon in that color (fully or partially), and filter them down further by name.\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-color/index.hbs" } });
});
define("ember-pokedex/templates/pokemon-color/pokemon-color-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DLM7VmDr", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[1,[33,[\"pokemon-filter\"],null,[[\"name\",\"pokemon\"],[[28,[\"model\",\"name\"]],[28,[\"model\",\"pokemon_species\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-color/pokemon-color-id.hbs" } });
});
define("ember-pokedex/templates/pokemon-habitat", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jhhgTibO", "block": "{\"statements\":[[11,\"h3\",[]],[13],[0,\"\\n  Habitats!\\n\"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"pokemon_habitat.pokemon_habitat_id\",[28,[\"habitat\",\"id\"]]],null,{\"statements\":[[6,[\"paper-button\"],null,[[\"primary\",\"class\"],[true,\"epd-l-pokeFilter__button\"]],{\"statements\":[[0,\"      \"],[1,[33,[\"cleanup-text\"],[[28,[\"habitat\",\"name\"]]],null],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[\"habitat\"]},null],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-habitat.hbs" } });
});
define("ember-pokedex/templates/pokemon-habitat/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Tpy56X2v", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[11,\"h4\",[]],[13],[0,\"\\n    Select a habitat to see all the Pokemon that reside in it, and filter them down further by name.\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-habitat/index.hbs" } });
});
define("ember-pokedex/templates/pokemon-habitat/pokemon-habitat-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZAOC3Nx6", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[1,[33,[\"pokemon-filter\"],null,[[\"name\",\"pokemon\"],[[28,[\"model\",\"name\"]],[28,[\"model\",\"pokemon_species\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-habitat/pokemon-habitat-id.hbs" } });
});
define("ember-pokedex/templates/pokemon-shape", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SDPQqlVl", "block": "{\"statements\":[[11,\"h3\",[]],[13],[0,\"\\n  Shapes!\\n\"],[14],[0,\"\\n\\n\"],[6,[\"each\"],[[28,[\"shape_chips\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"pokemon_shape.pokemon_shape_id\",[28,[\"shape\",\"id\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"image-chip\"],null,[[\"chipText\",\"color\",\"chipImage\"],[[28,[\"shape\",\"name\"]],\"shape\",[28,[\"shape\",\"url\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"shape\"]},null],[0,\"\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-shape.hbs" } });
});
define("ember-pokedex/templates/pokemon-shape/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hg6HW7nQ", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[11,\"h4\",[]],[13],[0,\"\\n    Select a shape to see all pokemon with the same (or at least vaguely similar) shape, and filter them down further by name.\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-shape/index.hbs" } });
});
define("ember-pokedex/templates/pokemon-shape/pokemon-shape-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1i/FL/Dp", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[1,[33,[\"pokemon-filter\"],null,[[\"name\",\"pokemon\"],[[28,[\"model\",\"name\"]],[28,[\"model\",\"pokemon_species\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon-shape/pokemon-shape-id.hbs" } });
});
define("ember-pokedex/templates/pokemon", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wS02ED/X", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__container\"],[13],[0,\"\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon.hbs" } });
});
define("ember-pokedex/templates/pokemon/pokemon-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EqMsh2Ck", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__intro\"],[13],[0,\"\\n\"],[6,[\"paper-card\"],null,null,{\"statements\":[[6,[\"component\"],[[28,[\"card\",\"title\"]]],null,{\"statements\":[[6,[\"component\"],[[28,[\"title\",\"text\"]]],null,{\"statements\":[[0,\"        \"],[6,[\"component\"],[[28,[\"text\",\"headline\"]]],[[\"class\"],[\"epd-l-pokemon__introName\"]],{\"statements\":[[0,\"#\"],[1,[28,[\"model\",\"base\",\"id\"]],false],[0,\": \"],[1,[28,[\"model\",\"base\",\"name\"]],false]],\"locals\":[]},null],[0,\"\\n\"]],\"locals\":[\"text\"]},null]],\"locals\":[\"title\"]},null],[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__introSprites\"],[13],[0,\"\\n      \"],[11,\"img\",[]],[16,\"src\",[34,[[28,[\"model\",\"base\",\"sprites\",\"front_default\"]]]]],[16,\"alt\",[34,[\"Front sprite for \",[28,[\"model\",\"base\",\"name\"]]]]],[13],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"model\",\"base\",\"sprites\",\"front_shiny\"]]],null,{\"statements\":[[0,\"        \"],[11,\"img\",[]],[16,\"src\",[34,[[28,[\"model\",\"base\",\"sprites\",\"front_shiny\"]]]]],[16,\"alt\",[34,[\"Front shiny sprite for \",[28,[\"model\",\"base\",\"name\"]]]]],[13],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\"]],\"locals\":[\"card\"]},null],[14],[0,\"\\n\\n\"],[6,[\"paper-card\"],null,[[\"class\"],[\"epd-l-pokemon__basics\"]],{\"statements\":[[0,\"  \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__basicInfo\"],[13],[0,\"\\n    \"],[11,\"ul\",[]],[13],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"generation.generation_id\",[28,[\"generation\",\"id\"]]],null,{\"statements\":[[0,\"          \"],[11,\"strong\",[]],[13],[0,\"Generation \"],[11,\"span\",[]],[15,\"class\",\"epd-h-uppercase\"],[13],[1,[28,[\"generation\",\"numeral\"]],false],[14],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"genus\"]]],null,{\"statements\":[[0,\"        \"],[11,\"li\",[]],[13],[1,[28,[\"genus\",\"genus\"]],false],[0,\" Pokemon\"],[14],[0,\"\\n\"]],\"locals\":[\"genus\"]},null],[0,\"      \"],[11,\"li\",[]],[13],[0,\"Height: \"],[1,[28,[\"model\",\"base\",\"height_meters\"]],false],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"Weight: \"],[1,[28,[\"model\",\"base\",\"weight_kg\"]],false],[14],[0,\"\\n\"],[6,[\"if\"],[[28,[\"model\",\"species\",\"habitat\",\"name\"]]],null,{\"statements\":[[0,\"        \"],[11,\"li\",[]],[13],[0,\"Habitat:\\n\"],[6,[\"link-to\"],[\"pokemon_habitat.pokemon_habitat_id\",[28,[\"habitat_id\"]]],null,{\"statements\":[[0,\"            \"],[1,[33,[\"cleanup-text\"],[[28,[\"model\",\"species\",\"habitat\",\"name\"]]],null],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"        \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[11,\"li\",[]],[13],[0,\"Capture Rate: \"],[1,[28,[\"model\",\"species\",\"capture_rate\"]],false],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"Growth Rate: \\n\"],[6,[\"link-to\"],[\"growth_rate.growth_rate_id\",[28,[\"growth_rate_id\"]]],null,{\"statements\":[[0,\"          \"],[1,[33,[\"cleanup-text\"],[[28,[\"model\",\"species\",\"growth_rate\",\"name\"]]],null],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"      \"],[14],[0,\"\\n      \"],[11,\"li\",[]],[13],[0,\"Hatch Rate: \"],[1,[28,[\"model\",\"species\",\"hatch_steps\"]],false],[0,\" steps\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__basicAbilities\"],[13],[0,\"\\n    \"],[11,\"h4\",[]],[13],[0,\"\\n      Abilities:\\n    \"],[14],[0,\"\\n\\n    \"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"sorted_abilities\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"ability.ability_id\",[28,[\"ability\",\"id\"]]],null,{\"statements\":[[0,\"          \"],[11,\"li\",[]],[13],[0,\"\\n            \"],[1,[33,[\"cleanup-text\"],[[28,[\"ability\",\"name\"]]],null],false],[6,[\"if\"],[[28,[\"ability\",\"is_hidden\"]]],null,{\"statements\":[[0,\" (hidden)\"]],\"locals\":[]},null],[0,\"\\n          \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"ability\"]},null],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__basicTags\"],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__basicTagGroup\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"pokemon_shape.pokemon_shape_id\",[28,[\"model\",\"species\",\"shape_id\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"image-chip\"],null,[[\"chipText\",\"color\",\"chipImage\"],[[28,[\"model\",\"species\",\"shape\",\"name\"]],\"shape\",[28,[\"model\",\"species\",\"shape_img_path\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__basicTagGroup\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"types_data\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"type.type-id\",[28,[\"type\",\"id\"]]],null,{\"statements\":[[0,\"          \"],[1,[33,[\"image-chip\"],null,[[\"chipText\",\"color\",\"chipImage\"],[[28,[\"type\",\"name\"]],[28,[\"type\",\"name\"]],[28,[\"type\",\"url\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"type\"]},null],[0,\"    \"],[14],[0,\"\\n\\n    \"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__basicTagGroup\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"pokemon_color.pokemon_color_id\",[28,[\"model\",\"species\",\"color_id\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"color-chip\"],null,[[\"chipText\",\"color\"],[[28,[\"model\",\"species\",\"color\",\"name\"]],[28,[\"model\",\"species\",\"color\",\"name\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null],[0,\"    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"\\n\"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__tabs\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"pokemon.pokemon_id.pokedex\",[28,[\"model\",\"base\",\"id\"]]],[[\"class\"],[\"epd-l-pokemon__tabLink\"]],{\"statements\":[[6,[\"paper-button\"],null,[[\"primary\",\"class\",\"raised\"],[true,\"epd-l-pokemon__tabButton\",true]],{\"statements\":[[0,\"      Pokedex\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"link-to\"],[\"pokemon.pokemon_id.stats\",[28,[\"model\",\"base\",\"id\"]]],[[\"class\"],[\"epd-l-pokemon__tabLink\"]],{\"statements\":[[6,[\"paper-button\"],null,[[\"primary\",\"class\",\"raised\"],[true,\"epd-l-pokemon__tabButton\",true]],{\"statements\":[[0,\"      Stats\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"link-to\"],[\"pokemon.pokemon_id.moves\",[28,[\"model\",\"base\",\"id\"]]],[[\"class\"],[\"epd-l-pokemon__tabLink\"]],{\"statements\":[[6,[\"paper-button\"],null,[[\"primary\",\"class\",\"raised\"],[true,\"epd-l-pokemon__tabButton\",true]],{\"statements\":[[0,\"      Moves\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"link-to\"],[\"pokemon.pokemon_id.evolution.evolution_chain\",[28,[\"model\",\"base\",\"id\"]],[28,[\"evolution_id\"]]],[[\"class\"],[\"epd-l-pokemon__tabLink\"]],{\"statements\":[[6,[\"paper-button\"],null,[[\"primary\",\"class\",\"raised\"],[true,\"epd-l-pokemon__tabButton\",true]],{\"statements\":[[0,\"      Evolution\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[14],[0,\"\\n\\n\"],[11,\"div\",[]],[15,\"class\",\"epd-l-pokemon__tabWindow\"],[13],[0,\"\\n  \"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[6,[\"paper-list\"],null,[[\"class\"],[\"epd-l-pokemon__footer\"]],{\"statements\":[[6,[\"link-to\"],[\"pokemon.pokemon_id\",[28,[\"model\",\"base\",\"prev_id\"]]],null,{\"statements\":[[6,[\"paper-item\"],null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"      \"],[11,\"img\",[]],[16,\"src\",[33,[\"sprite\"],[[28,[\"model\",\"base\",\"prev_id\"]]],null],null],[15,\"class\",\"md-avatar\"],[13],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"md-list-item-text\"],[13],[0,\"\\n        \"],[11,\"h3\",[]],[13],[0,\"Previous Pokemon\"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null],[0,\"\\n\"],[6,[\"link-to\"],[\"pokemon.pokemon_id\",[28,[\"model\",\"base\",\"next_id\"]]],null,{\"statements\":[[6,[\"paper-item\"],null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"      \"],[11,\"img\",[]],[16,\"src\",[33,[\"sprite\"],[[28,[\"model\",\"base\",\"next_id\"]]],null],null],[15,\"class\",\"md-avatar\"],[13],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"md-list-item-text\"],[13],[0,\"\\n        \"],[11,\"h3\",[]],[13],[0,\"Next Pokemon\"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon/pokemon-id.hbs" } });
});
define("ember-pokedex/templates/pokemon/pokemon-id/evolution", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rl8TjgG+", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon/pokemon-id/evolution.hbs" } });
});
define("ember-pokedex/templates/pokemon/pokemon-id/evolution/evolution-chain", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Oiwq6eaL", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"epd-l-evolution__container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"epd-l-evolution__column\"],[13],[0,\"\\n    \"],[1,[33,[\"evolution-card\"],null,[[\"data\",\"stage\"],[[28,[\"model\",\"chain\"]],\"1\"]]],false],[0,\"\\n  \"],[14],[0,\"\\n\\n\"],[6,[\"if\"],[[28,[\"model\",\"chain\",\"evolves_to\"]]],null,{\"statements\":[[0,\"    \"],[11,\"div\",[]],[15,\"class\",\"epd-l-evolution__arrow\"],[13],[14],[0,\"\\n    \\n    \"],[11,\"div\",[]],[15,\"class\",\"epd-l-evolution__column\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\",\"chain\",\"evolves_to\"]]],null,{\"statements\":[[0,\"        \"],[1,[33,[\"evolution-card\"],null,[[\"data\",\"stage\"],[[28,[\"stage_1\"]],\"2\"]]],false],[0,\"\\n\"]],\"locals\":[\"stage_1\"]},null],[0,\"    \"],[14],[0,\"\\n\\n\"]],\"locals\":[]},null],[0,\"  \\n\"],[6,[\"if\"],[[28,[\"model\",\"chain\",\"evolves_to\"]]],null,{\"statements\":[[6,[\"each\"],[[28,[\"model\",\"chain\",\"evolves_to\"]]],null,{\"statements\":[[6,[\"if\"],[[28,[\"stage_1\",\"evolves_to\"]]],null,{\"statements\":[[0,\"        \"],[11,\"div\",[]],[15,\"class\",\"epd-l-evolution__arrow\"],[13],[14],[0,\"\\n        \\n        \"],[11,\"div\",[]],[15,\"class\",\"epd-l-evolution__column\"],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"stage_1\",\"evolves_to\"]]],null,{\"statements\":[[0,\"            \"],[1,[33,[\"evolution-card\"],null,[[\"data\",\"stage\"],[[28,[\"stage_2\"]],\"3\"]]],false],[0,\"\\n\"]],\"locals\":[\"stage_2\"]},null],[0,\"        \"],[14],[0,\"\\n\\n\"]],\"locals\":[]},null]],\"locals\":[\"stage_1\"]},null]],\"locals\":[]},null],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon/pokemon-id/evolution/evolution-chain.hbs" } });
});
define("ember-pokedex/templates/pokemon/pokemon-id/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RvKF6T8c", "block": "{\"statements\":[[11,\"h3\",[]],[13],[0,\"\\n  Choose a tab for more info on this Pokemon!\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon/pokemon-id/index.hbs" } });
});
define("ember-pokedex/templates/pokemon/pokemon-id/moves", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1hUDP6qb", "block": "{\"statements\":[[1,[33,[\"paper-input\"],null,[[\"class\",\"label\",\"value\",\"onChange\"],[\"flex-50\",\"Search moves\",[28,[\"search_value\"]],[33,[\"action\"],[[28,[null]],\"update_search\"],null]]]],false],[0,\"\\n\\n\"],[11,\"table\",[]],[15,\"class\",\"rtable\"],[13],[0,\"\\n  \"],[11,\"thead\",[]],[13],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"th\",[]],[15,\"scope\",\"col\"],[13],[0,\"Name\"],[14],[0,\"\\n      \"],[11,\"th\",[]],[15,\"scope\",\"col\"],[15,\"width\",\"15%\"],[13],[0,\"Method\"],[14],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"tbody\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"filtered_moves\"]]],null,{\"statements\":[[0,\"      \"],[11,\"tr\",[]],[13],[0,\"\\n        \"],[11,\"td\",[]],[15,\"data-label\",\"Name\"],[13],[1,[33,[\"cleanup-text\"],[[28,[\"move\",\"name\"]]],null],false],[14],[0,\"\\n        \"],[11,\"td\",[]],[15,\"data-label\",\"Method\"],[13],[0,\"Lvl \"],[1,[28,[\"move\",\"level\"]],false],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[\"move\"]},null],[6,[\"each\"],[[28,[\"filtered_tms\"]]],null,{\"statements\":[[0,\"      \"],[11,\"tr\",[]],[15,\"class\",\"rtable__secondaryRow\"],[13],[0,\"\\n        \"],[11,\"td\",[]],[15,\"data-label\",\"Name\"],[13],[1,[33,[\"cleanup-text\"],[[28,[\"move\",\"move\",\"name\"]]],null],false],[14],[0,\"\\n        \"],[11,\"td\",[]],[15,\"data-label\",\"Method\"],[13],[0,\"Machine\"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[\"move\"]},null],[0,\"  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon/pokemon-id/moves.hbs" } });
});
define("ember-pokedex/templates/pokemon/pokemon-id/pokedex", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TdwLEs5n", "block": "{\"statements\":[[6,[\"paper-list\"],null,null,{\"statements\":[[6,[\"each\"],[[28,[\"engDex_reversed\"]]],null,{\"statements\":[[6,[\"paper-item\"],null,[[\"class\"],[\"md-3-line md-long-text\"]],{\"statements\":[[0,\"      \"],[11,\"img\",[]],[16,\"src\",[34,[\"/assets/images/games/\",[28,[\"entry\",\"version\",\"name\"]],\".jpg\"]]],[15,\"class\",\"md-avatar\"],[13],[14],[0,\"\\n      \"],[11,\"div\",[]],[15,\"class\",\"md-list-item-text\"],[13],[0,\"\\n        \"],[11,\"h3\",[]],[13],[0,\"\\n          \"],[11,\"strong\",[]],[13],[0,\"\\n            Pokemon \"],[1,[33,[\"cleanup-text\"],[[28,[\"entry\",\"version\",\"name\"]]],null],false],[0,\"\\n          \"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"p\",[]],[13],[0,\"\\n          \"],[1,[28,[\"entry\",\"flavor_text\"]],false],[0,\"\\n        \"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"entry\"]},null]],\"locals\":[]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon/pokemon-id/pokedex.hbs" } });
});
define("ember-pokedex/templates/pokemon/pokemon-id/stats", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sZJawOwg", "block": "{\"statements\":[[6,[\"each\"],[[28,[\"stats_reversed\"]]],null,{\"statements\":[[0,\"  \"],[11,\"h4\",[]],[15,\"class\",\"epd-statBar__name\"],[13],[0,\"\\n    \"],[1,[33,[\"cleanup-text\"],[[28,[\"stat\",\"name\"]]],null],false],[0,\"\\n  \"],[14],[0,\"\\n\\n  \"],[11,\"div\",[]],[16,\"class\",[34,[\"epd-statBar__container epd-statBar__container--\",[28,[\"stat\",\"value_class\"]]]]],[16,\"style\",[34,[\"width: \",[28,[\"stat\",\"value_width\"]],\"%;\"]]],[13],[0,\"\\n    \"],[11,\"span\",[]],[15,\"class\",\"epd-statBar__value\"],[13],[0,\"\\n      \"],[1,[28,[\"stat\",\"value\"]],false],[0,\"\\n    \"],[14],[0,\"\\n  \"],[14],[0,\"\\n\"]],\"locals\":[\"stat\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/pokemon/pokemon-id/stats.hbs" } });
});
define("ember-pokedex/templates/type", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hGZl4HTq", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"\\n  Types\\n\"],[14],[0,\"\\n\\n\"],[11,\"ul\",[]],[13],[0,\"\\n\"],[6,[\"each\"],[[28,[\"type_chips\"]]],null,{\"statements\":[[6,[\"link-to\"],[\"type.type-id\",[28,[\"type\",\"id\"]]],null,{\"statements\":[[0,\"    \"],[1,[33,[\"image-chip\"],null,[[\"chipText\",\"color\",\"chipImage\"],[[28,[\"type\",\"name\"]],[28,[\"type\",\"name\"]],[28,[\"type\",\"url\"]]]]],false],[0,\"\\n\"]],\"locals\":[]},null]],\"locals\":[\"type\"]},null],[14],[0,\"\\n\\n\"],[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/type.hbs" } });
});
define("ember-pokedex/templates/type/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CXySGb8W", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[11,\"h4\",[]],[13],[0,\"\\n    Select a type to see all the pokemon in it, and filter them down further by name.\\n  \"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/type/index.hbs" } });
});
define("ember-pokedex/templates/type/type-id", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xyBE+Ekl", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"flex-100\"],[13],[0,\"\\n  \"],[1,[33,[\"pokemon-filter\"],null,[[\"name\",\"pokemon\"],[[28,[\"model\",\"name\"]],[28,[\"pokemon_data\"]]]]],false],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-pokedex/templates/type/type-id.hbs" } });
});
define('ember-pokedex/utils/clamp', ['exports', 'ember-paper/utils/clamp'], function (exports, _clamp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});


define('ember-pokedex/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-pokedex';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-pokedex/app")["default"].create({"name":"ember-pokedex","version":"0.0.0+2c516099"});
}
//# sourceMappingURL=ember-pokedex.map
