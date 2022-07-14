var evt = require('events').EventEmitter;
// создаем обьект события
var emt = new evt();

// emt.setMaxListeners(20);

for (var index = 0; index < 10; index++) { // попробовать 11
    (function(){
        var current = index;
        emt.on('myEvent', function(){
            console.log(current);
        });    
    })();
}         

// функция возвразает количество зарегистрированных обработчиков указанного события
console.log('EMT has', emt.listenerCount('myEvent'), 'listeners.');

// Генерируем событие myEvent 
emt.emit('myEvent');

//по дефолту можна встановити 10 обробників, інакше буде попередження про витік пам'яті
//щоб встановити більше викор:
//emt.setMaxListeners(20);
