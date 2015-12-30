define(["require", "exports", 'angular'], function (require, exports, angular) {
    require("angular-filter");
    var template = require('ngtemplate!html!./historyDisplay.html');
    var HistoryDisplayController = (function () {
        function HistoryDisplayController() {
            console.log(this);
        }
        return HistoryDisplayController;
    })();
    angular.module("MatchHistory", ["angular.filter"]);
    var MatchHistoryDirective = function () {
        return {
            templateUrl: template,
            controller: HistoryDisplayController,
            controllerAs: "vm",
            bindToController: true,
            scope: {
                entries: '='
            }
        };
    };
    angular.module("MatchHistory").directive("matchHistory", MatchHistoryDirective);
});
//# sourceMappingURL=historyDisplay.js.map