var MatchHistory = (function () {
    function MatchHistory() {
        this.points = new Array();
    }
    MatchHistory.prototype.logPoint = function (point) {
        this.points.push(point);
    };
    return MatchHistory;
})();
module.exports = MatchHistory;
//# sourceMappingURL=MatchHistory.js.map