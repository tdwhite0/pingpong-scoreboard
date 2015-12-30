var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'angular', "../../shared/PlayerNumber", "../../shared/Match"], function (require, exports, angular, PlayerNumber, Match) {
    require('angular-socket-io');
    require("./scoreboard.scss");
    var Scoreboard;
    (function (Scoreboard) {
        var templateUrl = require('ngtemplate!html!./scoreboard.html');
        var ScoreboardModule = angular.module('Scoreboard', ["btford.socket-io"]);
        var ScoreboardController = (function (_super) {
            __extends(ScoreboardController, _super);
            function ScoreboardController(mySocket) {
                var _this = this;
                _super.call(this);
                mySocket.on('one', function () {
                    _this.awardPoint(PlayerNumber.One);
                });
                mySocket.on('one-down', function () {
                    _this.subtractPoint(PlayerNumber.One);
                });
                mySocket.on('two', function () {
                    _this.awardPoint(PlayerNumber.Two);
                });
                mySocket.on('two-down', function () {
                    _this.subtractPoint(PlayerNumber.Two);
                });
            }
            return ScoreboardController;
        })(Match);
        var ScoreboardDirective = function () {
            return {
                templateUrl: templateUrl,
                controller: ScoreboardController,
                restrict: 'E',
                controllerAs: 'vm',
                bindToController: true
            };
        };
        ScoreboardModule.factory('mySocket', function (socketFactory) {
            return socketFactory();
        });
        ScoreboardModule.directive("scoreboard", ScoreboardDirective);
    })(Scoreboard = exports.Scoreboard || (exports.Scoreboard = {}));
});
//# sourceMappingURL=scoreboard.js.map