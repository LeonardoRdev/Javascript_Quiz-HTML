function corrigir() {
    let score = 0;
    if (document.quiz.q1[2].checked) { // Se o documento forms de nome 'quiz' tiver o radio de nome 'q1' marcado:
        score += 1
    }
    if (document.quiz.q2[0].checked) {
        score += 1
    }
    if (document.quiz.q3[1].checked) {
        score += 1
    }
    alert("Você obteve " + score + "/3 pontos!")
}