// contributor.js
//

import $ from 'jquery';

var $contributorAvatars = $('.contributor__avatar img');

function bindEvts() {
  $contributorAvatars.on('click', spinAvatar);
}

function spinAvatar(e) {
  e.preventDefault();

  $({ degrees: 0 }).animate(
    {
      degrees: 360,
    },
    {
      duration: 400,
      easing: 'swing',
      step: function (now, fx) {
        $contributorAvatars.css('transform', 'rotate(' + now + 'deg)');
      },
    }
  );
}

function init() {
  bindEvts();
}

export default init;
