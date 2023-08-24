let question = [
  [
    "太田の出身地はどこ？",
    "1.中国",
    "2.日本",
    "3.韓国",
    "2",
  ],
  [
    "李の出身地はどこ？",
    "1.中国",
    "2.日本",
    "3.韓国",
    "3",
  ],
  [
    "金の出身地はどこ？",
    "1.中国",
    "2.日本",
    "3.韓国",
    "1",
  ]
];

// console.log(question[1][3]);

let quiz = document.getElementById("question");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");

let correct = 0;
let quizCnt = 0;

function quizSet() {
  quiz.textContent  = question[quizCnt][0];
  ans1.textContent  = question[quizCnt][1];
  ans2.textContent  = question[quizCnt][2];
  ans3.textContent  = question[quizCnt][3];
}

quizSet();

function answerCheck(ans) {
  if (ans == question[quizCnt][4]){
    alert("正解!!");
    correct++;
  } else {
    alert("不正解");
  }
  quizCnt++;
  if (quizCnt == question.length) {
    quiz.textContent  = `正解数は${correct}問でした!`;
    ans1.textContent  = "";
    ans2.textContent  = "";
    ans3.textContent  = "";
  } else {
    quizSet();
  }

}

// answerCheck(ans1);