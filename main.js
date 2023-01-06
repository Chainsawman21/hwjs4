// это вариант 1

let iam = prompt('Ваше имя')
let birthday = prompt('Год рождения')
let year = prompt('Нынешний год')


function sul(year, birthday) {

let sum = (year - birthday)
return sum  
}
console.log(sul(year,birthday));
alert(iam + ' , ' + 'Ваш возраст ' + ( year - birthday ))

// это вариант 2

 function rand(min,max) {
     return Math.floor(Math.random() * (max - min) + min )
 }

 let kol = +prompt('Введите количество примеров');

 for(let i = 1;i <= kol;i++){
     let one = rand(50,100)
     let two = rand(10,40)
     let may = rand(1,5)

     if(may === 1) {
         let prime = +prompt(one + ' + ' + two + ' =')
         let primal = (one + two) == prime ? 'Ваш ответ верный - ' + prime : 'Ваш ответ не верный - ' + prime + ". Правильный ответ - " + one + two + '!';
         alert(one + ' + ' + two + ' = ' + (one + two) + ' Ваш ответ ' + prime + ', ' + primal)
         console.log(primal);
     }else if(may === 2) {
         let prime = +prompt(one + ' - ' + two + ' =')
         let primal = (one - two) == prime ? 'Ваш ответ верный - ' + prime : 'Ваш ответ не верный - ' + prime + ". Правильный ответ - " + one - two + '!';
         alert(one + ' - ' + two + ' = ' + (one - two) + ' Ваш ответ ' + prime + ', ' + primal)
         console.log(primal);
     }else if(may === 3) {
         let prime = +prompt(one + ' * ' + two + ' =')
         let primal = (one * two) == prime ? 'Ваш ответ верный - ' + prime : 'Ваш ответ не верный - ' + prime + ". Правильный ответ - " + one * two + '!';
         alert(one + ' * ' + two + ' = ' + (one * two) + ' Ваш ответ ' + prime + ', ' + primal)
         console.log(primal);
     }else {
         let prime = +prompt(one + ' / ' + two + ' =')
         let primal = (one / two) == prime ? 'Ваш ответ верный - ' + prime : 'Ваш ответ не верный - ' + prime + ". Правильный ответ - " + one / two + '!';
         alert(one + ' / ' + two + ' = ' + (one / two) + ' Ваш ответ ' + prime + ', ' + primal)
         console.log(primal);
     }
    }