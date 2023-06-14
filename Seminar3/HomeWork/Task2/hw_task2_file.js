// 2️⃣‼️Создайте массив с произвольными элементами. Отсортируйте его в обратном порядке и 
//выведите в документе или консоли все данные из него. ‼️


var arr = []
var len = prompt('Введите количество элементов массива:')
function fillArray(arr, len) {
    for (let i = 0; i < len; i++) {
        arr.push(i * 2)
    }
}
fillArray(arr, len)
document.writeln(arr, '<br \/>')
document.writeln(arr.reverse())
