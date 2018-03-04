(function () {
    var module = angular.module("ContactApp");
    module.controller("ContactCtrl", contactCtrl);


    function contactCtrl(ContactDataSvc) {
        this.contacts=ContactDataSvc.contacts;
        this.selectedContact = this.contacts[0];
        this.selectContact = function(index){
            this.selectedContact = this.contacts[index];
        }
    }
}
)();
