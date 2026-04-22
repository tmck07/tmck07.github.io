// Osano Consent Object handler
// Docs: https://developers.osano.com/cmp/javascript-api/developer-documentation-consent-javascript-api

(function () {
  // Called whenever consent state is known or changes.
  // `consent` shape: { ANALYTICS: 'ACCEPT'|'DENY', MARKETING: 'ACCEPT'|'DENY',
  //                    PERSONALIZATION: 'ACCEPT'|'DENY', ESSENTIAL: 'ACCEPT'|'DENY',
  //                    OPT_OUT: 'ACCEPT'|'DENY', STORAGE: 'ACCEPT'|'DENY' }
  function handleConsent(consent) {
    if (!consent) return;

    if (consent.ANALYTICS === 'ACCEPT') {
      // Load or enable analytics scripts here.
      // Example: loadGoogleAnalytics();
    } else {
      // Disable or remove analytics scripts here.
    }

    if (consent.MARKETING === 'ACCEPT') {
      // Load or enable marketing scripts here.
    } else {
      // Disable or remove marketing scripts here.
    }

    if (consent.PERSONALIZATION === 'ACCEPT') {
      // Enable personalized features here.
    } else {
      // Disable personalized features here.
    }

    if (consent.STORAGE === 'ACCEPT') {
      // Safe to use localStorage / sessionStorage beyond essential data.
    } else {
      // Limit storage to strictly necessary data only.
    }
  }

  // Wait for Osano to be available, then attach listeners.
  function init() {
    if (!window.Osano || !window.Osano.cm) {
      return setTimeout(init, 50);
    }

    // osano-cm-initialized fires once on load (or immediately if already fired).
    window.Osano.cm.addEventListener('osano-cm-initialized', function (consent) {
      handleConsent(consent || window.Osano.cm.getConsent());
    });

    // osano-cm-consent-saved fires whenever the visitor updates their preferences.
    window.Osano.cm.addEventListener('osano-cm-consent-saved', function (consent) {
      handleConsent(consent);
    });
  }

  init();
})();
