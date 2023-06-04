function insert(num){
  var myString = document.form.screen.value;
  var lastChar = myString[myString.length - 1];
  if (myString.length < 30) {
   if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
    document.form.screen.value = myString + num;
   }else if(num != lastChar){
    document.form.screen.value = myString.replace(lastChar, num);
   }
  }
 }
 function equal(){
  var sum = document.form.screen.value;
  if (sum) {
   document.form.screen.value = eval(sum);
  }
 }
 function clean(){
  document.form.screen.value = '';
 }
 function back(){
  var exp = document.form.screen.value;
  document.form.screen.value = exp.substring(0,exp.length - 1);
 }
 