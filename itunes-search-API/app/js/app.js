
'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', ['ngResource']);

phonecatApp.controller('PhoneListCtrl', function($scope,$resource) {
    var k =  $resource('https://itunes.apple.com/search?term=query',{query:'@query'}, {search:{
        method: 'JSONP',
        params: {
            limit: 10,
            callback: 'JSON_CALLBACK'
        }
    }});
    k.search(function func(data){
        $scope.results = data;
        console.log($scope.results);

    });
    $scope.orderprop = 'artistName';
    $scope.queryPlace = 'Input what you want';
});
phonecatApp.filter('queryName', function(){
    return function(input){
        var out = "";
        for (var i = 0; i < input.length; i++) {
            out =  out+ input.charAt(i);
        }
        // условная часть для необязательного аргумента

            out = out.toUpperCase();

        return out;
    }
});
	