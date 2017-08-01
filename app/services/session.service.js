"use strict";
var SessionService = (function () {
    function SessionService() {
    }
    SessionService.prototype.get = function (sessionName) {
        return JSON.parse(localStorage.getItem(sessionName));
    };
    SessionService.prototype.set = function (sessionName, value) {
        var jsonObj = JSON.stringify(value);
        localStorage.setItem(sessionName, jsonObj);
    };
    SessionService.prototype.clear = function () {
        localStorage.clear();
    };
    SessionService.prototype.remove = function (sessionName) {
        localStorage.removeItem(sessionName);
    };
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map