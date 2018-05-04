var position = 0;
var ans1, ans2, ans3, ans4;
var question;
var click = false;
var correctAnswers = 0;
var correct, easy, dumb;
var answers;
var text, container;
var quiz = [
    ["A frase 'A vingança nunca é plena, mata a alma e a envenena' foi dita por:","Seu Barriga","Seu Madruga","Chaves","Chapolin","Seu Madruga"],
    ["Quem disse a célebre frase: Para entender o francês necessito de três coisas: que falem devagar, em voz alta e em português.","Seu Madruga","Godinez","Chapolin","Alma Negra","Chapolin"],
    ["Qual o nome do desenho que Chaves dá ao pintar o quadro?","Vaca comendo no pasto","Tabuleiro de xadrez para principiantes","Pão com ovo","Chinforínfola","Chinforínfola"],
    ["Quando Chaves grita: Já se foi o disco voador, o que acontece?","Seu Barriga sai da vila","Nhonho sai da vila","Seu Madruga entra no banheiro","Quico ganha um disco voador","Seu Barriga sai da vila"],
    ["Qual o engenhoso sistema para se abrir a porta secreta?","Quando Pepe se levanta da cadeira","Quando se põe a vela no candelabro","Quando Chapolin bate no Pepe","Quando se grita: Pepe já tirei a vela","Quando se grita: Pepe já tirei a vela"],
    ["Segundo Chaves, como se chamam os animais que comem de tudo:","Carnívoros","Herbívoros","Onívoros","Ricos","Ricos"],
    ["Chapolin Colorado é sempre interrompido quando diz:","Sigam-me os bons","Eu acho","Palma Palma, não priemos cânico","Não contavam com minha astúcia","Eu acho"]
];
var questTotal = quiz.length;

function loadQuiz() {
    document.getElementById('text').innerHTML = "Carregando Quiz...";
    setTimeout('nextQuestion()', 2000)
}

function nextQuestion() {
    text = document.getElementById('text');
    container = document.getElementById('container');
   
    
    if (position >= questTotal) {
        position = 0;
        click = true;
        
        text.innerHTML = "Teste Finalizado!";
        container.innerHTML = "<h1 class='score'>Você acertou "+ correctAnswers +" de " + questTotal +"</h1>";
    } else {
        text.innerHTML = "Pergunta " + (position+1) + " de " + questTotal;
        question = quiz[position][0];
        ans1 = quiz[position][1];
        ans2 = quiz[position][2];
        ans3 = quiz[position][3];
        ans4 = quiz[position][4];
        
        container.innerHTML = "<h1 class='question'>"+ question +"</h1>";
        container.innerHTML += "<h2 class='answer' data-answer='"+ ans1 +"'>"+ ans1 +"</h2>";
        container.innerHTML += "<h2 class='answer' data-answer='"+ ans2 +"'>"+ ans2 +"</h2>";
        container.innerHTML += "<h2 class='answer' data-answer='"+ ans3 +"'>"+ ans3 +"</h2>";
        container.innerHTML += "<h2 class='answer' data-answer='"+ ans4 +"'>"+ ans4 +"</h2>";
        
        answers = document.getElementsByClassName('answer');
        for (var i=0; i<answers.length; i++) {
            var answer = answers[i];
            
            answer.addEventListener('click', function(){
                if (click == false) {
                    click = true;
                    checkAnswer(this);
                }
            }, false);
        }    
    }
}

function checkAnswer(ans) {
    correct = quiz[position][5];
    easy = document.getElementById('easy');
    dumb = document.getElementById('dumb');

    if (ans.dataset.answer === correct) {
        easy.play();
        ans.classList.add('correct');
        correctAnswers++;
    } else {
        dumb.play();
        ans.classList.add('wrong');
    }

    setTimeout(function() {
        position++;
        click = false;
        nextQuestion();
    }, 4000);
}

window.addEventListener("load", loadQuiz);