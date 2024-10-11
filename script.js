document.getElementById('submit-btn').addEventListener('click', function() {
    let score = 0;
    const totalQuestions = 5; // 總問題數

    // 檢查第一題的答案
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer && q1Answer.value === 'A') {
        score++;
    }

    // 檢查第二題的答案
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer && q2Answer.value === 'A') {
        score++;
    }

    // 檢查第三題的答案
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    if (q3Answer && q3Answer.value === 'B') {
        score++;
    }

    // 檢查第四題的答案
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    if (q4Answer && q4Answer.value === 'B') {
        score++;
    }

    // 檢查第五題的答案
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    if (q5Answer && q5Answer.value === 'A') {
        score++;
    }

    // 顯示結果
    const resultText = `你的分數是：${score} / ${totalQuestions}`;
    document.getElementById('result').innerText = resultText;
});
