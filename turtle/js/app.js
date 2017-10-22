(function(){
    angular.module("turtleFacts",[])
    .controller("listCtrl",ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        var vm = this;
        //this.dummyData="hello world";
        vm.quizMetrics = quizMetrics;
        vm.data = DataService.cricData;
        vm.activeCric = {};
        vm.changeActiveCric = changeActiveCric;
        vm.activateQuiz = activateQuiz;
        vm.search="";
        //vm.quizActive= false;

        function changeActiveCric(index){
            vm.activeCric=index;
        }

        function activateQuiz(){
            quizMetrics.changeState(true);
        }
    }

   
})();