var module = angular.module("ContactApp", []);
module.controller("ContactCtrl", contactCtrl);

function contactCtrl() {
    this.contacts=[
        {
            "gender":"male",
            "name":{
                "title":"mr",
                "first":"theodore",
                "last":"sims"
            },
            "location":{
                "street":"7109 miller ave",
                "city":"port macquarie",
                "state":"queensland",
                "postcode":5719
            },
            "email":"theodore.sims@example.com",
            "login":{
                "username":"purplegorilla770",
                "password":"install",
                "salt":"xKloOKfY",
                "md5":"3e75c8c5d6800950c4aa3a5869f09147",
                "sha1":"c62758232f562bf0efbe5ff2e8b328fa877c88ea",
                "sha256":"bf71db50e76b37bfa45ae8f763ab6d8f04355822ebe7299c7e3326e28302311d"
            },
            "dob":"1993-12-06 11:11:14",
            "registered":"2015-05-29 03:23:24",
            "phone":"08-2512-1742",
            "cell":"0491-434-380",
            "id":{
                "name":"TFN",
                "value":"763539201"
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/men/71.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/71.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/71.jpg"
            },
            "nat":"AU"
        },
        {
            "gender":"female",
            "name":{
                "title":"mrs",
                "first":"minnie",
                "last":"bowman"
            },
            "location":{
                "street":"1998 bollinger rd",
                "city":"bowral",
                "state":"new south wales",
                "postcode":4730
            },
            "email":"minnie.bowman@example.com",
            "login":{
                "username":"blackbird547",
                "password":"deborah",
                "salt":"0ATFBN7u",
                "md5":"29993c374545de371eaa50b2efa6f9a9",
                "sha1":"412883387bb6ae450e324640d4bb166ce3c9a9af",
                "sha256":"21cfe8db89647957f6c03c8678a2bc5887ee3bd0fc2da493a95bfbd270ca8ab0"
            },
            "dob":"1994-06-25 23:21:18",
            "registered":"2012-03-25 05:49:04",
            "phone":"05-6495-2421",
            "cell":"0427-191-508",
            "id":{
                "name":"TFN",
                "value":"819171822"
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/women/2.jpg",
                "medium":"https://randomuser.me/api/portraits/med/women/2.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/women/2.jpg"
            },
            "nat":"AU"
        },
        {
            "gender":"male",
            "name":{
                "title":"mr",
                "first":"justin",
                "last":"caron"
            },
            "location":{
                "street":"3436 rue abel-hovelacque",
                "city":"créteil",
                "state":"charente",
                "postcode":84062
            },
            "email":"justin.caron@example.com",
            "login":{
                "username":"tinyladybug556",
                "password":"penthous",
                "salt":"P9XSy1Zr",
                "md5":"ae0b59656e72403172bfa4d96ea54d29",
                "sha1":"1e104d81479b102757b2f1927f06d007cfc6f2a0",
                "sha256":"0c27feacd4cba1967966f3490cd940ebd9d8d6012f5181eadd10a5c1b9a940d0"
            },
            "dob":"1989-11-05 15:30:21",
            "registered":"2004-01-29 16:38:33",
            "phone":"01-78-45-27-66",
            "cell":"06-34-00-19-84",
            "id":{
                "name":"INSEE",
                "value":"1891056271534 07"
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/men/32.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/32.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/32.jpg"
            },
            "nat":"FR"
        },
        {
            "gender":"female",
            "name":{
                "title":"ms",
                "first":"laurie",
                "last":"smith"
            },
            "location":{
                "street":"9717 concession road 6",
                "city":"winfield",
                "state":"ontario",
                "postcode":71654
            },
            "email":"laurie.smith@example.com",
            "login":{
                "username":"lazybear133",
                "password":"tribe",
                "salt":"WUmgcCgz",
                "md5":"56fb1b2688532e08a2df9df920cc6ca2",
                "sha1":"d62ef7a5588eb5a8327aa200e399207784420625",
                "sha256":"4f8b762d2dc5c78da9fd39770cfbeec985ea7084f801dcf7684058969d2b3e39"
            },
            "dob":"1991-01-29 02:36:57",
            "registered":"2015-03-26 18:21:38",
            "phone":"204-554-7386",
            "cell":"626-841-0218",
            "id":{
                "name":"",
                "value":null
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/women/9.jpg",
                "medium":"https://randomuser.me/api/portraits/med/women/9.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/women/9.jpg"
            },
            "nat":"CA"
        },
        {
            "gender":"female",
            "name":{
                "title":"miss",
                "first":"chloe",
                "last":"harper"
            },
            "location":{
                "street":"3046 patrick street",
                "city":"newbridge",
                "state":"fingal",
                "postcode":43030
            },
            "email":"chloe.harper@example.com",
            "login":{
                "username":"crazybird992",
                "password":"ashleigh",
                "salt":"AsChlhja",
                "md5":"972bba812c52f23f7f4ba5e0571756a6",
                "sha1":"3f72267b36073d3cf9f8edc84b7201b5141a8412",
                "sha256":"1edce711f85a1ef30f9778f9986db2ea7412a919a449576d61cc418a35c3aa84"
            },
            "dob":"1975-11-09 17:05:37",
            "registered":"2016-03-16 14:25:41",
            "phone":"031-168-0967",
            "cell":"081-734-5750",
            "id":{
                "name":"PPS",
                "value":"0319094T"
            },
            "picture":{
                "large":"https://randomuser.me/api/portraits/women/17.jpg",
                "medium":"https://randomuser.me/api/portraits/med/women/17.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/women/17.jpg"
            },
            "nat":"IE"
        }
    ];
}