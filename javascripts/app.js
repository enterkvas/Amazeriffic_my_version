                            // Интерактивность(стр 142)

    // Проверяем работу js в консоли F12:

        var main = function() {
            "use strict";
            console.log("hello, world!");
        }
        $(document).ready(main);

                        // Работа вкладок
    // Подключаем вкладки:

        // var main = function() {
        //     "use strict";            
        //     $('.tabs a:nth-child(1)').on("click", function() {
        //         // делаем все вкладки неактивными:
        //         $('.tabs span').removeClass('active');
        //         // делаем активной первую вкладку:
        //         $('.tabs a:nth-child(1)').addClass('.active');
        //         // очищаем основное содержание, чтобы переопределить его:
        //         $('main .content').empty();
        //         // возвращается false, так как мы не переходим по ссылке:
        //         return false;
        //     });
        //     $('.tabs a:nth-child(2)').on("click", function() {
        //         $('.tabs span').removeClass('.active');
        //         $('.tabs a:nth-child(2)').addClass('.active');
        //         $('main .content').empty();
        //         return false;
        //     });
        //     $('.tabs a:nth-child(3)').on("click", function() {
        //         $('.tabs span').removeClass('.active');
        //         $('.tabs a:nth-child(3)').addClass('.active');
        //         $('main .content').empty();
        //         return false;
        //     });
        // }
        // $(document).ready(main);

    // Далее: для соблюдения принципа DRY: переведем некоторое кол-во кода в АБСТРАКЦИИ.
// для этого применим ф-цию, в кач. аргумента которой используем Номер вкладки:

                            // Преобразование кода с помощью ФУНКЦИИ

    // Мои неуспешные попытки избежать в дальнейшем DRY в нашем коде:
// 1-я попытка:

    // var main = function() {
    //     "use strict";        
    //     var $removeActive = $('.tabs span').removeClass('.active');
    //     var $emptyMain = $('main .content').empty();
    //     var $addActive_1 = $('.tabs a:ntf-child(1)').addClass('.active');
    //     var $addActive_2 = $('.tabs a:ntf-child(2)').addClass('.active');
    //     var $addActive_3 = $('.tabs a:ntf-child(3)').addClass('.active');
    //     $('.tabs a:nth-child(1)').on("click", function() {
    //         $removeActive;
    //         $addActive_1;
    //         $emptyMain;
    //         return false;
    //     });
    //     $('.tabs a:nth-child(2)').on("click", function() {
    //         $removeActive;
    //         $addActive_2;
    //         $emptyMain;
    //         return false;
    //     });
    //     $('.tabs a:nth-child(3)').on("click", function() {
    //         $removeActive;
    //         $addActive_3;
    //         $emptyMain;
    //         return false;
    //     });
        
    // }
    // $(document).ready(main);

// 2-я попытка:

    // var main = function() {
    //     "use strict";
    //     var numberAdd = function(num) {
    //         $('.tabs a:nth-child(num)').on("click", function() {
    //             $('.tabs span').removeClass('.active');
    //             $('.tabs a:nth-child(num)').addClass('.active');
    //             $('main .content').empty();
    //             return false;
    //         });
    //     }
    //     numberAdd(1);
    //     numberAdd(2);
    //     numberAdd(3);
    // }
    // $(document).ready(main);

// А теперь: как надо(из учебника, включая т.ж. МОИ дальнейшие попытки):

        // var main = function() {
        //     "use strict";
            // var makeTabActive = function(tabNumber) {
            //     // конструируем селектор из tabNumber:
            //     var tabSelector = '.tabs a:nth-child(" + tabNumber + ") span';
            //     $('.tabs span').removeClass('active');
            //     $(tabSelector).addClass('active');
            // }
        //     // далее - опять неуспешная попытка самостоятельно закончить код:
        //     // makeTabActive(1);
        //     // $('.main .content').empty();
        //     // return false;
        //     // теперь: как правильно из учебника:
        //     $('.tabs a:nth-child(1)').on("click", function() {
        //         makeTabActive(1);
        //         // обратно попытка самостийности:
        //         // $('.main .content').empty();
        //         // return false;
        //         // а теперь - правильно(из учебника):
        //         return false;
        //     });
        //     $('.tabs a:nth-child(2)').on("click", function() {
        //         makeTabActive(2);
        //         return false;
        //     });
        //     $('.tabs a:nth-child(3)').on("click", function() {
        //         makeTabActive(3);
        //         return false;
        //     });
        // }
        // $(document).ready(main);
    
                    // Переработка кода с помощью ЦИКЛА for
                // (то же решение, но еще одним(2-м) вариантом)

    // Обратим внимание на то, как мы пометили вкладки: с пом цифр 1,2,3.
    // Если мы преобразуем их в цикл for, который будет перебирать все эти номера,
// то сможем настроить слушатели совсем просто!
    // Таким образом мы даже избавимся от необходимости использования функции 
// makeTabActive, так как поместим важные строки кода непосредственно в цикл:
        
        // var main = function() {
        //     "use strict";
        //     var tabNumber;
        //     for(tabNumber=1; tabNumber <= 3; tabNumber++) {
        //         var tabSelector = '.tabs a:nth-child(" + tabNumber + ") span';
        //         $(tabSelector).on("click", function() {
        //             $('.tabs span').removeClass('active');
        //             $(this).addClass('active');
        //             return false;
        //         });                
        //     }
        // }
        // $(document).ready(main);

                    // Переработка кода с помощью ЦИКЛА forEach
                // (то же решение, но еще одним(3-м) вариантом)

    // есть еще одно решение! jQuery позволяет создать набор элементов, а затем 
// перебрать их через массив. В этом упрощении мы переберем все элементы span 
// внутри вкладок, создав обработчик щелчков (click) для каждой:

        // var main = function() {
        //     "use strict";
        //     $('.tabs a span').toArray().forEach(function(element) {
        //         // создаем обработчик щелчков для этого элемента:
        //         $(element).on("click", function() {
        //             $('tabs a span').removeClass('active');
        //             $(element).addClass('active');
        //             $('main .content').empty();
        //             return false;
        //         });
        //     });
        // }
        // $(document).ready(main);

                        // Управление СОДЕРЖИМЫМ(стр 145)

    // проверим, является ли предок объекта jQuery $me
// первым потомком своего собственного предка
// Просто пример:

        // var main = function() {
        //     "use strict";           
        //     if ($me.parent().is(":first-child")) {
        //         console.log("МОЙ ПРЕДОК — ПЕРВЫЙ ПОТОМОК!!");
        //     } else {
        //     console.log("Мой предок не является первым потомком.");
        //     }
        // }
        // $(document).ready(main);

    // Мы можем использовать этот паттерн и селектор :nth-child, чтобы определить 
// необходимые действия для примера с вкладками:

        // var main = function() {
        //     "use strict";
        //     $('.tabs a span').toArray().forEach(function(element) {
        //         // создаем обработчик щелчков для этого элемента:
        //         $(element).on("click", function() {
        //             // поскольку мы используем версию элемента jQuery,
        //             // нужно создать временную переменную,
        //             // чтобы избежать постоянного обновления:
        //             var $element = $(element);
        //             $('tabs a span').removeClass('active');
        //             $element.addClass('active');
        //             $('main .content').empty();
        //             if ($element.parent().is(":nth-child(1)")) {
        //                 console.log("Щелчок на первой вкладке!");
        //             } else if ($element.parent().is(":nth-child(2)")) {
        //                 console.log("Щелчок на второй вкладке!");
        //             } else if ($element.parent().is(":nth-child(3)")) {
        //                 console.log("Щелчок на третьей вкладке!");
        //             }
        //             return false;
        //         });
        //     });
        // }
        // $(document).ready(main);

                            // Настройка содержимого вкладки

            // var main = function() {
            //     "use strict";
            //     $('.tabs a span').toArray().forEach(function(element) {
            //         // создаем обработчик щелчков для этого элемента:
            //         $(element).on("click", function() {
            //             // поскольку мы используем версию элемента jQuery,
            //             // нужно создать временную переменную,
            //             // чтобы избежать постоянного обновления:
            //             var $element = $(element);
            //             $('tabs a span').removeClass('active');
            //             $element.addClass('active');
            //             $('main .content').empty();
            //             if ($element.parent().is(":nth-child(1)")) {
            //                 $();
            //             } else if ($element.parent().is(":nth-child(2)")) {
            //                 console.log("Щелчок на второй вкладке!");
            //             } else if ($element.parent().is(":nth-child(3)")) {
            //                 console.log("Щелчок на третьей вкладке!");
            //             }
            //             return false;
            //         });
            //     });
            // }
            // $(document).ready(main);

            