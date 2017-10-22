(function(){
    
        angular.module("turtleFacts").factory("DataService", DataFactory);

        function DataFactory(){
            var dataObj = {
                cricData: cricData,
                quizQuestions: quizQuestions
            };

            return dataObj;
        }

        var quizQuestions = [
                {
                    type: "text",
                    text: "Whats the highest score of virat?",
                    possibilities: [
                        {
                            answer: "180"
                        },
                        {
                            answer:"181"
                    
                        },
                        {
                            answer:"182"
                        },
                        {
                            answer:"183"
                        }

                    ],
                    selected: null,
                    correct:null
                },

                {
                        type: "text",
                        text: "Whats the highest score of virat?",
                        possibilities: [
                            {
                                answer: "180"
                            },
                            {
                                answer:"181"
                        
                            },
                            {
                                answer:"184"
                            },
                            {
                                answer:"183"
                            }
    
                        ],
                        selected: null,
                        correct:null
                    }
        ];

        var cricData = [
            {
                name: "Polly Umrigar",
                image_url: "https://images.search.yahoo.com/search/images;_ylt=AwrSbDjC.uZZJhAA_glXNyoA;_ylu=X3oDMTByNWU4cGh1BGNvbG8DZ3ExBHBvcwMxBHZ0aWQDBHNlYwNzYw--?p=cricket+images+url&fr=tightropetb#id=0&iurl=https%3A%2F%2Ficc-static-files.s3.amazonaws.com%2FICC%2Fphoto%2F2017%2F01%2F16%2F05501d20-8f91-44a5-932f-2b4a55672fe7%2FGettyImages-83617213_(1).jpg&action=click",
                era: "1948-1962",
                score: "8.3+8.4+8.4=25.1",
                desc: "One of the all-time legends of the Indian cricket, Polly Umrigar was no less than a hero in the late forties to the early sixties. He has in his name, some of the most important records-- most Tests, most runs and most hundreds. But his most significant achievement remains that he was the first Indian to score a Test Double Century!"
    
    
            },
    
            {
                name: "Pol Umrigar",
                image_url: "",
                era: "1948-1962",
                score: "8.3+8.4+8.4=25.1",
                desc: "One of the all-time legends of the Indian cricket, Polly Umrigar was no less than a hero in the late forties to the early sixties. He has in his name, some of the most important records-- most Tests, most runs and most hundreds. But his most significant achievement remains that he was the first Indian to score a Test Double Century!"
    
    
            },
    
            {
                name: "Poll Umrigar",
                image_url: "",
                era: "1948-1962",
                score: "8.3+8.4+8.4=25.1",
                desc: "One of the all-time legends of the Indian cricket, Polly Umrigar was no less than a hero in the late forties to the early sixties. He has in his name, some of the most important records-- most Tests, most runs and most hundreds. But his most significant achievement remains that he was the first Indian to score a Test Double Century!"
    
    
            }
        ];

    })();