"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
function delay(milliseconds, count) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(count);
        }, milliseconds);
    });
}
// async function always returns a Promise
function dramaticWelcome() {
    return __awaiter(this, void 0, void 0, function () {
        var i, count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Hello");
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 5)) return [3 /*break*/, 4];
                    return [4 /*yield*/, delay(500, i)];
                case 2:
                    count = _a.sent();
                    console.log(count);
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("World!");
                    return [2 /*return*/];
            }
        });
    });
}
function go() {
    setInterval(function () {
        console.log("ping");
    }, 1000);
    dramaticWelcome();
}
window.document.addEventListener("DOMContentLoaded", function () {
    var btnGo = document.getElementById("go");
    btnGo.addEventListener("click", function (e) { return _this.go(); });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWIsaUJBa0NBO0FBaENBLGVBQWUsWUFBb0IsRUFBRSxLQUFhO0lBQzlDLE9BQU8sSUFBSSxPQUFPLENBQVMsVUFBQSxPQUFPO1FBQzFCLFVBQVUsQ0FBQztZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsMENBQTBDO0FBQzFDOzs7Ozs7b0JBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFWixDQUFDLEdBQUcsQ0FBQzs7O3lCQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFFSSxxQkFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFBOztvQkFBbEMsS0FBSyxHQUFVLFNBQW1CO29CQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7b0JBSEEsQ0FBQyxFQUFFLENBQUE7OztvQkFNMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Q0FDekI7QUFFRDtJQUNJLFdBQVcsQ0FBQztRQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1QsZUFBZSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFDakQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBTyxJQUFLLE9BQUEsS0FBSSxDQUFDLEVBQUUsRUFBRSxFQUFULENBQVMsQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5mdW5jdGlvbiBkZWxheShtaWxsaXNlY29uZHM6IG51bWJlciwgY291bnQ6IG51bWJlcik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNvdW50KTtcclxuICAgICAgICAgICAgfSwgbWlsbGlzZWNvbmRzKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLy8gYXN5bmMgZnVuY3Rpb24gYWx3YXlzIHJldHVybnMgYSBQcm9taXNlXHJcbmFzeW5jIGZ1bmN0aW9uIGRyYW1hdGljV2VsY29tZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAvLyBhd2FpdCBpcyBjb252ZXJ0aW5nIFByb21pc2U8bnVtYmVyPiBpbnRvIG51bWJlclxyXG4gICAgICAgIGNvbnN0IGNvdW50Om51bWJlciA9IGF3YWl0IGRlbGF5KDUwMCwgaSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiV29ybGQhXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnbygpOnZvaWQge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4geyBcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBpbmdcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIGRyYW1hdGljV2VsY29tZSgpO1xyXG59XHJcblxyXG53aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgbGV0IGJ0bkdvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb1wiKTtcclxuICAgIGJ0bkdvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTpFdmVudCkgPT4gdGhpcy5nbygpKTtcclxufSk7XHJcbiJdfQ==
