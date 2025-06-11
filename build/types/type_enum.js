"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFF";
    DesignColors["black"] = "#000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.black);
console.log(DesignColors.white);
console.log("=================");
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 1] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 2] = "USER";
    StatusPermission[StatusPermission["SUPORT"] = 3] = "SUPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
console.log(StatusPermission.SUPORT);
