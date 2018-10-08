// سلسة من الالوان
var colors = [
  '#C94C24', //Orange
  '#268BD2', //Blue
  '#C4226F', //Pink
  '#859835', //Lime
  '#6D73C2', //Purple
  '#37A198', //Green
  '#DA3637', //Red
  "#F0AD4E" //Yellow
];

function makeBoxes(howMany) {
  // هذا المتحول يعبر عن طول سلسلة الارقام
  var colorAmt = colors.length;

  // يعبر هذا المتغير عن رقم اللون الحالي
  var currColor = 0;

  // متغير يعبر عن عقدة جديد والتي سنصنعها باستخدام جافاسكريبت
  var myElement;

  // متغير يعبر عن اول عقدة من العقد التي تحتوي على الصفة
  // boxes
  var myNode = document.querySelector('.boxes');


  for (var i = 0 ; i < howMany; i++){
      /* انشئ عنصرا من نوع
       div
       وعين له الصف
       box
       لكي يستفيد من صفات ملف
       style.css
       ثم عين لون خلفية
       واضفه تحت العقدة التي عيناها مسبقا
      */
      myElement = document.createElement('div');
      myElement.className = 'box';
      myElement.style = 'background-color: ' + colors[currColor%colorAmt];
      myNode.appendChild(myElement);
      currColor++;

  }
}

makeBoxes(20);
