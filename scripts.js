// Механика 1: Сортировка списка. 
// При наличии списка задач, то есть если он не пустой, произвести сортировку списка. +
// При этом учитывать нужно сортировку как по алфавиту так и по числовым значениям. +
// Сортировка должна быть как по убыванию так и по возрастанию, переключается при повторном нажатии на кнопку (иконку). +
// Иконка должна меняться согласно макета. + 

// Механика 2: Перемещение строки. Drag and Drop.
// Пользователь может менять порядок строк, путем нажатия на кнопку с четерехточием и перетаскиванием (смещением) с зажатой кнопкой мыши. 
// Фон при процессе перетаскивания меняется на заданынй в макете (желтый).
// Возможное место для завершения процесса перетаскивания подсвечивается линией.
// Оставить перетаскиваемый элемент можно внутри списка в любой позиции. 
// Комментарий: припоритет самый низкий

// Механика 3: Удаление строки.
// Удаление выбранной строки путем нажатия на крестик. +
//При этом крестик подвечивается при наведении. +


// Механика 4: Создание новой строки.
// Ставим курсор мыши в поле прямоугольное и вписываем необходимый текст. +
// После нажатия клавиши "добавить" новая задача добавляется к ранее созданному списку задач. +
// А если списка нет то просто появляется над полем добавления. +
// Поле очищается после добавления записи в список. +
// Новая запись добавляется в низ списка (в конец). +
// Добавление происходит по нажатию на кнопку добавить мышью или нажатие Энтер с клавиатуры. +
// У поля добавления нету кнопок удаления и перетаскивания, они есть у эл-ов списка. +



// !!!! При нажатии ENter фокус не переходит на новое поле +

const addButton = document.querySelector('.addButton');
const newTask = document.querySelector('.delItem');
const taskValue = document.querySelector('.task');


const sortItem = document.querySelector('.sortItemButton');
const delItems = document.querySelectorAll('.delItem');

function newTaskEdit() {
  taskValue.innerText = taskValue.value;
  const rowItem = document.querySelector('.rowItem:last-child');
  rowItem.insertAdjacentHTML(
      'afterend', '<div class="rowItem"> <button class="dragItem"></button> <input class="task" type="text" placeholder="Введите Задачу"/> <button class="delItem" id="delItem"></button> </div>');
  
  const delItems = document.querySelectorAll('.delItem');
  delItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
    })
  })

  document.querySelector('.rowItem:last-child .task').focus();
}


document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
      newTaskEdit()
 }
    });


addButton.addEventListener('click', () => {
  newTaskEdit()
})
       
sortItem.addEventListener("click", () => {
  const tasksList = document.querySelectorAll(".rowItem:not(:last-child) .task");
  let tasksListSorted = [];
  (sortItem.classList.contains("reverse")) 
    ? tasksListSorted = [...tasksList].map((el) => el.value).sort() 
      : tasksListSorted = [...tasksList].map((el) => el.value).sort().reverse();
             
      tasksList.forEach((task, index) => {
          if (task !== "") {
            task.value = tasksListSorted[index];
          }
        });

sortItem.classList.toggle("reverse");
});
    
                       
    

delItems.forEach((item) => {
  item.addEventListener("click", () => {
  item.parentElement.remove();
  })
});
