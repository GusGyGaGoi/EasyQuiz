let count =  0; //เอาไว้นับคะแนนที่เลือกแล้วถูกต้อง


function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count++; // count = count + 1;

    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }
 
 function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'd') {
        result.textContent = "ถูกต้อง PIM ก่อตั้งเมื่อปี 2550";
        result.style.color = 'green';
        count++; // บวกคะแนนเพิ่มอีก 1 คะแนน
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }

 function checkAnswer3(answer) {
    const result = document.getElementById('result3');
    const result4 = document.getElementById('result4');

    if (answer === 'c') {
        result.textContent = "ถูกต้อง Counter Service ยังให้บริการตลอด 24 ชม. ด้วยน้า";
        result.style.color = 'green';
        count++; // บวกคะแนนเพิ่มอีก 1 คะแนน
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }

  result4.textContent = "คุณได้คะแนนทั้งหมด" + count + "คะแนน"
  count = 0;
 }

