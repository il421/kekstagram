'use strict';

var filterControls = document.querySelector('.upload-filter-controls');
var controlDec = document.querySelector('.upload-resize-controls-button-dec');
var controlInc = document.querySelector('.upload-resize-controls-button-inc');

(function () {
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadFile = document.querySelector('.upload-file');
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
  var uploadFormSubmit = document.querySelector('.upload-form-submit');

  var showSetupElement = function () {
    uploadOverlay.classList.remove('invisible');
    document.addEventListener('keydown', window.utils.keydownHendler);
    uploadFile.setAttribute('aria-pressed', true);
    uploadFormCancel.setAttribute('aria-pressed', false);
  };
  var hideSetupElement = function () {
    uploadOverlay.classList.add('invisible');
    document.removeEventListener('keydown', window.utils.keydownHendler);
    uploadFile.setAttribute('aria-pressed', false);
    uploadFormCancel.setAttribute('aria-pressed', true);
  };
  var submitElement = function () {
    uploadOverlay.classList.add('invisible');
    uploadFormCancel.setAttribute('aria-pressed', true);
    uploadFormCancel.setAttribute('aria-pressed', false);
  };

  // OPEN FILTER
  uploadFile.addEventListener('click', function () {
    showSetupElement();
  });

  uploadFile.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      showSetupElement();
    }
  });

  // CLOSE FILTER
  uploadFormCancel.addEventListener('click', function () {
    hideSetupElement();
  });

  uploadFormCancel.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      hideSetupElement();
    }
  });

  // SUBMIT FILTER
  uploadFormSubmit.addEventListener('click', function () {
    submitElement();
  });

  uploadFormSubmit.addEventListener('keydown', function (evt) {
    if (window.utils.isActiavateEvent(evt)) {
      submitElement();
    }
  });
})();


// SELECT FILTER
filterControls.addEventListener('focus', window.initializeFilters, true);

filterControls.addEventListener('keydown', function (evt) {
  if (window.utils.isActiavateEvent(evt)) {
    window.initializeFilters(evt);
  }
}, true);

// CHANGE SCALE
var max = 100;
var min = 25;
var step = 25;

controlDec.addEventListener('click', function () {
  if (window.valueDefault > min) {
    window.valueDefault = (window.valueDefault - step);
    if (window.scale > 0.25) {
      window.scale = window.scale - 0.25;
    }
    window.createScale();
  }
});

controlInc.addEventListener('click', function () {
  if (window.valueDefault < max) {
    window.valueDefault = (window.valueDefault + step);
    if (window.scale < 1) {
      window.scale = window.scale + 0.25;
    }
    window.createScale();
  }
});
