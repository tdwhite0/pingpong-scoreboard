define(["require", "exports"], function (require, exports) {
    var MatchHistory = (function () {
        function MatchHistory() {
            this.points = new Array();
        }
        MatchHistory.prototype.logPoint = function (point) {
            this.points.push(point);
        };
        return MatchHistory;
    })();
    return MatchHistory;
});
//# sourceMappingURL=MatchHistory.js.map