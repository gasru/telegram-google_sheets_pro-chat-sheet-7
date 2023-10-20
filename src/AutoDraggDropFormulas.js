// автопротягивание формул. Протягивание скриптом относительно столбца
// OST https://qna.habr.com/user/oshliaer https://t.me/oshliaer https://t.me/google_sheets_pro
// https://developers.google.com/apps-script/guides/sheets/functions?hl=en
function AutoDraggDownFormulas() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const base = sheet.getRange('S14:S'); // относительно чего протягиваем формулы
  const colFormula01 = sheet.getRange('W14');
  draggDownOneFormula_(base, colFormula01);
  const colFormula02 = sheet.getRange('X14');
  draggDownOneFormula_(base, colFormula02);
  // const colFormula03 = sheet.getRange(''); draggDownOneFormula_(base, colFormula03);
  // const colFormula04 = sheet.getRange(''); draggDownOneFormula_(base, colFormula04);
  // const colFormula05 = sheet.getRange(''); draggDownOneFormula_(base, colFormula05);
  // const colFormula06 = sheet.getRange(''); draggDownOneFormula_(base, colFormula06);
  // const colFormula07 = sheet.getRange(''); draggDownOneFormula_(base, colFormula07);
  // const colFormula08 = sheet.getRange(''); draggDownOneFormula_(base, colFormula08);
  // const colFormula09 = sheet.getRange(''); draggDownOneFormula_(base, colFormula09);
  // const colFormula10 = sheet.getRange(''); draggDownOneFormula_(base, colFormula10);
}
function draggDownOneFormula_(base, colFormula) {
  const baseValues = base.getValues();
  const lastBase = baseValues.length - baseValues.reverse().findIndex((row) => row[0] !== '');
  const colFormulaFormula = colFormula.getFormula();
  colFormula
    .getSheet()
    .getRange(base.getRow(), colFormula.getColumn(), lastBase + 1)
    .setFormula(colFormulaFormula);
}

// /* exported base26ABCfrom10 */
// function base26ABCfrom10(number) {
//   let num = number;
//   let sfx = '';
//   while (num > 0) {
//     const cd = (num - 1) % 26;
//     sfx = String.fromCharCode(65 + cd) + sfx;
//     num = Math.floor((num - cd) / 26);
//   }
//   return sfx;
// }

// //////Рабочий шаблон, для авто протягивания на 1 столбец
// function run2() {
//   const sheet = SpreadsheetApp.getActiveSheet();
//   const base = sheet.getRange('S14:S');
//   const colFormula = sheet.getRange('W14');
//   draggDownOneFormula_(base, colFormula);
// }
//
// function draggDownOneFormula_(base, colFormula) {
//   const baseValues = base.getValues();
//   const lastBase =
//     baseValues.length - baseValues.reverse().findIndex(row => row[0] !== '');
//   const colFormulaFormula = colFormula.getFormula();
//   colFormula
//     .getSheet()
//     .getRange(base.getRow(), colFormula.getColumn(), lastBase + 1)
//     .setFormula(colFormulaFormula);
// }

// ////////// https://qna.habr.com/q/1082962
//  К сожалению, вам придется указывать каждый раз новые формулы для "протягивания"
//
// //просто одну под другой подставить colFormula не достаточно, надо что-то менять
//  function run() {
//    const sheet = SpreadsheetApp.getActiveSheet(); // пользовательские функции, тут все понятно
//    const base = sheet.getRange('I3:I'); //переменная Base получает диапазон в себя
//    const colFormula = sheet.getRange('J3'); //переменная colformula = диапазону J3
//    draggDownFormulas_(base, colFormula); // тянет на основе base (I3:I) столбец J3 c J3
//    const colFormula2 = sheet.getRange('K3');          // на количество указанное в I3:3
//    draggDownFormulas_(base, colFormula2);
//  }
//
//  Ну, или более продвинутый вариант
//
//  function runBulk() {
//    const formulasCells = ['J3', 'K3', 'M3']; // я думаю, надо что-то делать с этим
//    const sheet = SpreadsheetApp.getActiveSheet(); // пользовательские функции, тут все понятно
//    const base = sheet.getRange('I3:I'); // столбец, на основе которого протягивается
//    formulasCells.forEach((cell) => { //цикл forEach, также
//      const colFormula = sheet.getRange(cell); // получает диапазон ячеек
//      draggDownFormulas_(base, colFormula); // эта функция тянет вниз на основе 2 переменных
//    });
//  }

// //// ОСНОВНАЯ ФОРМУЛА. ЕЕ НУЖНО ПЕРЕДЕЛАТЬ. ВО 2-й ФУНКЦИИ ВСЕ НОРМАЛЬНО
// function run2() {
//   const sheet = SpreadsheetApp.getActiveSheet(); // пользовательские функции, тут все понятно
//   const base = sheet.getRange('S14:S'); // столбец, на основе которого протягивается
//   const colFormula = sheet.getRange('W14'); // кол формула, ну это количества формула
//   draggDownOneFormula_(base, colFormula); // эта функция тянет вниз на основе 2 переменных
// }
//
// //// Здесь отдельно обозначена draggDownOneFormula_ , дальше идет, что она в себя включает
// // В нее включены переменные base и colFormula
// function draggDownOneFormula_(base, colFormula) { // эта функция тянет вниз на основе 2 переменных
//   const baseValues = base.getValues();
//   const lastBase =
//     baseValues.length - baseValues.reverse().findIndex(row => row[0] !== '');
//   const colFormulaFormula = colFormula.getFormula();
//   colFormula
//     .getSheet() //получает лист
//     .getRange(base.getRow(), colFormula.getColumn(), lastBase + 1)
//     .setFormula(colFormulaFormula);
// }
// ////

// .getRange(base.getRow(), colFormula.getColumn(), lastBase + 1)
// получает диапазон
// 1) из переменной base - строку() - тут номер строки
// 2) colFormula - это или столбецФормула, ну да, в Query же Col1
//    ну и вот как-бы подформула получить Столбец.
// 3) lastBase - последняя переменная(с диапазоном-ячейкой) - Base +1 - протягивает на 1 строку вниз
// 4) SetFprmula - устанавливает, помещает в переменную colFormula Formula - результат

// Со второй функцией function draggDownOneFormula_ все в порядке. Со 2-й частью ее точно

// // 2 функция, первая часть
// function draggDownOneFormula_(base, colFormula) { // эта функция тянет вниз на основе 2 переменных
// const baseValues = base.getValues();
// const lastBase =
//    baseValues.length - baseValues.reverse().findIndex(row => row[0] !== '');
// const colFormulaFormula = colFormula.getFormula();

// тут помещаются переменные base и colFormula - формула колоонки и , а в base вроде строка, или ячейка
// объявляются перменные
// базаЧиселбазаЗначений = база.получитьЗначенияЧисла()
// еще 1 объявление перменной
// последняяБаза, или последнееБазовое
// базаЗначений.длина - база Значений,илиЧисел.обратный порядок().найтиНомер(строка больше, или = 0 и не равна пустоте)
// ну тут все про помещение. не думаю, что во 2й части что-то поломалось.

// разберем теперь первую часть
// это для 1 столбца функция
// function run2() {
//  const sheet = SpreadsheetApp.getActiveSheet(); // пользовательские функции, тут все понятно
//  const base = sheet.getRange('S14:S'); // столбец, на основе которого протягивается
//  const colFormula = sheet.getRange('W14'); // кол формула, ну это количества формула
//  draggDownOneFormula_(base, colFormula); // эта функция тянет вниз на основе 2 переменных
// }
//  переменная sheet - получаем текущий активный лист. одна из стандартных функций объявления
// в переменную base - помещаем sheet, дальше идет под диапазон ('S14:S')
// в переменную столбцаФормула. помещаем sheet и под Диапазон ('W14)

// объявить функцию можно где-угодно
// а чтобы запустить ее, надо прописать, где-угодно, можно до объявления
// в общем, запускаем ее

// надо посмотреть на выше примеры, то, что скидывал
// https://qna.habr.com/user/oshliaer https://t.me/oshliaer https://t.me/google_sheets_pro

//
//
// https://developers.google.com/apps-script/guides/sheets/functions?hl=en

// // Простая функция
//  function run() { //назвать можно как-угодно, главное чтобы не повторялось
//    const sheet = SpreadsheetApp.getActiveSheet(); // пользовательские функции, тут все понятно
//    const base = sheet.getRange('I3:I'); //переменная Base получает диапазон в себя
//    const colFormula = sheet.getRange('J3'); //переменная colformula = диапазону J3
//    draggDownFormulas_(base, colFormula); // тянет на основе base (I3:I) столбец J3 c J3
//    const colFormula2 = sheet.getRange('K3');          // на количество указанное в I3:3
//    draggDownFormulas_(base, colFormula2);
//  }

// здесь все то-же самое, просто зачем-то 2 раза запускается функция, хотя надо 1
// draggDownFormulas_
// ее объявляли ниже, помещали в нее, чтобы она работала. это отдельная функция.
// если мы ее прописываем где-либо -- запускаем.
//    const colFormula = sheet.getRange('J3'); //переменная colformula = диапазону J3
//    const colFormula2 = sheet.getRange('K3');
//    draggDownFormulas_(base, colFormula,colFormula2);   // тянет на основе base (I3:I) столбец J3 c J3
// на количество указанное в I3:3

// продвинутый вариант

//  function runBulk() {
//    const formulasCells = ['J3', 'K3', 'M3']; // я думаю, надо что-то делать с этим
//    const sheet = SpreadsheetApp.getActiveSheet(); // пользовательские функции, тут все понятно
//    const base = sheet.getRange('I3:I'); // столбец, на основе которого протягивается
//    formulasCells.forEach((cell) => { //цикл forEach, также, дляКаждого cell - ячейка
//      const colFormula = sheet.getRange(cell); // получает диапазон ячеек
//      draggDownFormulas_(base, colFormula); // эта функция тянет вниз на основе 2 переменных
//    });
//  }

// опять объявление перменных
// наверное квадратные скобки [] для обозначения группы
// {} - гугл таблицах массив
// объявление диапазонов, это все понятно

//    formulasCells.forEach((cell) => { //цикл forEach, также, дляКаждого cell - ячейка
//      const colFormula = sheet.getRange(cell); // получает диапазон ячеек
//      draggDownFormulas_(base, colFormula); // эта функция тянет вниз на основе 2 переменных
//    });
// в общем из formulasCells помещается каждый адрес ячейки, прописаный в [] и это все больше, или равно
// переменной colFormula столбцаФормула, которая
// = лист sheet.getRange(Cell) - тоже ошибка. должно быть.
// formulasCells.forEach((formulasCells) => { В общем, тут должно быть вот так
// formulasCells.forEach((cell) => { А не так
//
// draggDownFormulas_(base, colFormula);
// ну и в конце запускается с полученным столбцом шаблоном, основой для протягивания - base
// и в colFormula у нас значения Ячеек, только много в этот раз, а не 1
//
// в общем, вот, в итоге 2 скрипта щас исправлю
//
// ////Простой
// function AutoDown() {
//   const sheet = SpreadsheetApp.getActiveSheet();
//   const base = sheet.getRange('S14:S');
//   const colFormula = sheet.getRange('W14');
//   const colFormula2 = sheet.getRange('X14');
//   draggDownOneFormula_(base, colFormula, colFormula2);
// }
//
// function draggDownOneFormula_(base, colFormula) {
//   const baseValues = base.getValues();
//   const lastBase =
//     baseValues.length - baseValues.reverse().findIndex(row => row[0] !== '');
//   const colFormulaFormula = colFormula.getFormula();
//   colFormula
//     .getSheet()
//     .getRange(base.getRow(), colFormula.getColumn(), lastBase + 1)
//     .setFormula(colFormulaFormula);
// }
// ////Продвинутый

// function AutoDrop() { //пишет, что функция без названия. Наверное надо какие-то
//  const formulasCells = ['W14', 'X14'];   //переменные сюда поместить
//  const sheet = SpreadsheetApp.getActiveSheet();
//  const base = sheet.getRange('S14:S');
//  formulasCells.forEach((cell) => {
//    const colFormula = sheet.getRange(cell);
//    draggDownFormulas_(base, colFormula);
//  });
// }
//
// function draggDownOneFormula_(base, colFormula) {
//  const baseValues = base.getValues();
//  const lastBase =
//    baseValues.length - baseValues.reverse().findIndex(row => row[0] !== '');
//  const colFormulaFormula = colFormula.getFormula();
//  colFormula
//    .getSheet()
//    .getRange(base.getRow(), colFormula.getColumn(), lastBase + 1)
//    .setFormula(colFormulaFormula);
// }
// простой метод работает. там видимо проблема была в порядке объявления переменных, или названии функции,
// или в ;, незнаю, в общем. делить нельзя, функция должна запускаться целиком, друг за другом
