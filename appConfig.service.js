(function () {
    var module = angular.module("ContactApp");
    module.service("AppDataService", function (AppNameSvc){
        this.name = AppNameSvc;
        this.age = 20;
    });
}
)();