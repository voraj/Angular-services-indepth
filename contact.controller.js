(function () {
    var module = angular.module("ContactApp");
    module.controller("ContactCtrl", contactCtrl);

    function contactCtrl(ContactDataSvc) {
        var self = this;

        ContactDataSvc.getContacts().then(function (data) {
                self.contacts= data;
            });

        this.selectContact = function(index){
            this.selectedContact = this.contacts[index];
        }
    }
}
)();
