// Механика 1: Сортировка списка. 
// При наличии списка задач, то есть если он не пустой, произвести сортировку списка. 
// При этом учитывать нужно сортировку как по алфавиту так и по числовым значениям.
// Сортировка должна быть как по убыванию так и по возрастанию, переключается при повторном нажатии на кнопку (иконку). 
// Иконка должна меняться согласно макета.

// Механика 2: Перемещение строки. Drag and Drop.
// Пользователь может менять порядок строк, путем нажатия на кнопку с четерехточием и перетаскиванием (смещением) с зажатой кнопкой мыши. 
// Фон при процессе перетаскивания меняется на заданынй в макете (желтый).
// Возможное место для завершения процесса перетаскивания подсвечивается линией.
// Оставить перетаскиваемый элемент можно внутри списка в любой позиции. 
// Комментарий: припоритет самый низкий

// Механика 3: Удаление строки.
// Удаление выбранной строки путем нажатия на крестик. При этом крестик подвечивается при наведении.


// Механика 4: Создание новой строки.
// Ставим курсор мыши в поле прямоугольное и вписываем необходимый текст. 
// После нажатия клавиши "добавить" новая задача добавляется к ранее созданному списку задач. 
// А если списка нет то просто появляется над полем добавления. 
// Поле очищается после добавления записи в список.
// Новая запись добавляется в низ списка (в конец).
// Добавление происходит по нажатию на кнопку добавить мышью или нажатие Энтер с клавиатуры.
// У поля добавления нету кнопок удаления и перетаскивания, они есть у эл-ов списка.

const addButton = document.querySelector('.addButton');
const newTask = document.querySelector('.delItem');
const taskValue = document.querySelector('.task');


const sortItem = document.querySelector('.sort-item-button');
const delItem = document.querySelector('.delItem');


addButton.addEventListener('click', () => {
    alert(taskValue.value);
    taskValue.innerText = taskValue.value;
    const rowItem = document.querySelector('.row-item:last-child');
    rowItem.insertAdjacentHTML(
        'afterend', '<div class="row-item"> <button class="dragItem"></button> <input class="task" type="text"/> <button class="delItem" id="delItem"></button> </div>');
console.log(taskValue.value[0]);
})

sortItem.addEventListener('click', () => {
    const taskList = document.querySelectorAll('.row-item .task');
    const myNewArray = [...taskList].map((el) => el.value);
    console.log(taskList);
    console.log(myNewArray);
    myNewArray.sort();
    console.log(myNewArray);

    const newTaskList = document.querySelectorAll('.row-item .task');
    console.log(newTaskList);
    newTaskList.innerHTML = `<input class="task" type="text" value="${myNewArray[1]}"/>`;
    console.log(newTaskList.innerHTML);
  
 
        })
         