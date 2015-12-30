define(["require", "exports"], function (require, exports) {
    var Point = (function () {
        function Point(pointWinner, isRemoval) {
            this.pointWinner = pointWinner;
            this.isRemoval = isRemoval;
        }
        Object.defineProperty(Point.prototype, "pointWinner", {
            set: function (pointWinner) {
                this._pointWinner = pointWinner.name;
            },
            enumerable: true,
            configurable: true
        });
        return Point;
    })();
    return Point;
});
//# sourceMappingURL=Point.js.map