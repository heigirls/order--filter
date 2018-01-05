var con = function ($scope, img) {
    $scope.name = 'zs';
    img.ajax('http://localhost:8008/index').then(function (results) {
        console.log(results);
        $scope.data = results;
    }, function (error) {
        console.log(error);
    });
    //排序
    $scope.order1 = 'qiu';
    $scope.order2 = '-';
    $scope.change = function (dians) {
        $scope.order1 = dians;
        if ($scope.order2 === '-') {
            $scope.order2 = "";
        } else {
            $scope.order2 = "-";
        }
    }
    //remove---按下标删除不合理----每次排序都会改变下标
    // $scope.remove = function (index) {
    //     $scope.data.splice(index, 1);
    // }
    //remove---按名字删
    $scope.remove = function (name) {
        if(name!== '') {
            var p = 0;
            for(var key in $scope.data) {
                p = $scope.data[key];
                if(p.name === name) {
                    // console.log(p);
                    $scope.data.splice(key, 1);
                }
            }
        }
    }
};
con.$inject = ['$scope', 'img']
app.controller('fromController', con);