// console.log(window);  //

// //Браузерное окружение даёт нам возможность оживить интерфейс: добавление новых элементов и работа с ними

// const divElement = window.document.createElement('div') 
// divElement.style.width = '1000px'
// divElement.style.height = '1000px'
// divElement.style.border = '1px solid red'
// window.document.body.appendChild(divElement)

// // window.document.querySelector('div').remove()

// window.document.addEventListener('click', (event) => {
//     console.log('Координаты клика: ', `x: ${event.x}, y: ${event.y}`)
// })

// window.addEventListener('scroll', () => {
//     console.log('Координаты скрола: ', window.scrollY)
// })

// console.log(
//     'мой браузер:', window.navigator.userAgent
// )

// console.log(
//     'Высота окна браузера:', window.screen.height
// )

// console.log(
//     'Текущий URL-адрес вкладки браузера:', window.location.href
// )

// console.log(
//     'Длина "истории" текущей сессии браузера:', window.history.length
// )


//всё браузерное окружение
//console.log(window);  // window - главный объект с браузерным окружением


//Основной JS
//console.log(window.Math)
//console.log(window.Object)
//console.log(window.Number)
//console.log(window.Boolean)


//Browser Object Model
//console.log(window.navigator)  
//console.log(window.screen)
//console.log(window.location)
//console.log(window.history)
//console.log(window.frames)
// console.log(window.fetch) //для отправки запросов на сервер
// console.log(window.XMLHttpRequest)


//Document Object Model  позволяет нам работать с содержимом страницы в виде объекта
console.log(window.document)

console.dir(window.document)  // Найти свойство children, углубиться и найти Nodes





