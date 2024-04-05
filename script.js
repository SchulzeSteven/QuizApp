let questions = [
    {
        "question": "Was ist der stärkste Muskel des Menschen?",
        "answer_1": "Kaumuskel",
        "answer_2": "Augenmuskeln",
        "answer_3": "Gebärmuttermuskel",
        "answer_4": "Herzmuskel",
        "right_answer": 1
    },
    {
        "question": "Wer war die erste Disney-Prinzessin?",
        "answer_1": "Cinderella",
        "answer_2": "Schneewittchen",
        "answer_3": "Aurora (Dornröschen)",
        "answer_4": "Belle",
        "right_answer": 2
    },
    {
        "question": "Wie viele Punkte hat ein Würfel insgesamt?",
        "answer_1": "36",
        "answer_2": "38",
        "answer_3": "42",
        "answer_4": "44",
        "right_answer": 3
    },
    {
        "question": "Von wann bis wann dauerte der erste Weltkrieg?",
        "answer_1": "1914 - 1918",
        "answer_2": "1902 - 1906",
        "answer_3": "1926 - 1930",
        "answer_4": "1940 - 1945",
        "right_answer": 1
    },
    {
        "question": "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?",
        "answer_1": "Mesosphäre",
        "answer_2": "Stratosphäre",
        "answer_3": "Thermosphäre",
        "answer_4": "Troposphäre",
        "right_answer": 2
    },
    {
        "question": "Welches Vitamin wird mithilfe von Sonnenlicht im Körper gebildet?",
        "answer_1": "Vitamin A",
        "answer_2": "Vitamin B",
        "answer_3": "Vitamin C",
        "answer_4": "Vitamin D",
        "right_answer": 4
    },
    {
        "question": "Welcher Fluss hat am meisten Wasser auf der Welt?",
        "answer_1": "Nil",
        "answer_2": "Amazonas",
        "answer_3": "Rhein",
        "answer_4": "Kongo",
        "right_answer": 2
    },
    {
        "question": "Welche Wirkungs hat Aspirin nicht?",
        "answer_1": "schmerzstillend",
        "answer_2": "entzündungshemmend",
        "answer_3": "potenzsteigernd",
        "answer_4": "fiebersenkendr",
        "right_answer": 3
    },
    {
        "question": "Welches Land hat die meisten Fußballweltmeisterschaften gewonnen?",
        "answer_1": "Deutschland",
        "answer_2": "Argentinien",
        "answer_3": "Italien",
        "answer_4": "Brasilien",
        "right_answer": 4
    },
    {
        "question": "Wie viele Herzen hat ein Tintenfisch?",
        "answer_1": "Eins",
        "answer_2": "Zwei",
        "answer_3": "Drei",
        "answer_4": "Keins",
        "right_answer": 3
    },
];

let currentQuestion = 0;   // zeigt die Aktuelle Card an (erste Frage)


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;  // zeigt xx Frage on xx Fragen an (also x von 10) da in dr questions 10 JSON vorhanden sind

    showQuestion();
}


/* Zeigt die Karte an mit der Frage und dazugehörign Antworten */
function showQuestion() {
    let question = questions[currentQuestion];   // question ist die Variable für die Aktuelle JSON die Angezeigt werden soll --- questions ist die JSON von "let = questions"
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


/* Klickbare Antworten und Ausgabe ob Richtig oder Falsch */
function answer(selection) {   // selection beinhaltet jede onclick answer function (answer_01,answer_02,answer_03,answer_04)
    let question = questions[currentQuestion];
    console.log('Selected answer is ', selection);
    let selectedAnswerNumber = selection.slice(-1);  // selection ist die Variable von den onclick answers --- das .slice(-1) nimmt nur noch den letzten Buchstaben, also die gewählte answer_0x Zahl und übergibt dies an die Variable selectedQuestionNumber
    console.log('selected answer number is', selectedAnswerNumber) ; // ausgewählte Antwort Nummer
    console.log('Current question is ', question['right_answer']);

    if(selectedAnswerNumber == question['right_answer']) {   // Richtig oder Falsch Ausgabe und log überprüfung
        console.log('Richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');  // parentNode ist das überelement, bevor eine neue DIV erstellt wird
    } else {
        console.log('Falsche Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }
}