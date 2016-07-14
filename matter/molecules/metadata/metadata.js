// metadata.js
//

import $ from 'jquery';

var $metadataDurations = $('.metadata .metadata__time');

function bindEvts() {
  $metadataDurations.on('click', toggleDurationsRelAbs);
}

function toggleDurationsRelAbs(e) {
  e.preventDefault();

  $(this, $metadataDurations)
    .find('.metadata__dur-rel')
    .toggle();

  $(this, $metadataDurations)
    .find('.metadata__dur-abs')
    .toggle();
}

function init() {
  bindEvts();
}

export default init;
