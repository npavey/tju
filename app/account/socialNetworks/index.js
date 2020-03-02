define(function () {
    'use strict';

    var _instance = null;

    var _getAuthLink = function (courseTitle, authServiceUrl, socialNetwork) {
        return authServiceUrl + '/api/auth/' + socialNetwork +
            '?callbackLink=' + encodeURIComponent(window.location.href) +
            '&callbackTitle=' + encodeURIComponent(courseTitle);
    };

    function SocialNetworks(courseTitle, authServiceUrl) {
        if (_instance) {
			return _instance;
		}
        var getAuthLink = _getAuthLink.bind(this, courseTitle, authServiceUrl);
        this.facebookAuthLink = getAuthLink('facebook');
        this.linkedinAuthLink = getAuthLink('linkedin');
        this.googleAuthLink = getAuthLink('google');
    }

    return SocialNetworks;
});