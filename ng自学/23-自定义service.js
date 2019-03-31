//封装的方法
var m1 = angular.module('module1',[]);//插件引入方式

/*
m1.factory('myService',function () {
    return {
        name : 'hello',
        show :function () {
            return this.name + ':angular';

        }
    };
});*/

m1.provider('myService',function () {
    return {
        $get : function () {
            return {
                name : 'hello',
                show : function () {
                    return this.name + ':angular';

                }
            }
        }

    };
});