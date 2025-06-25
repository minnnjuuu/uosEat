document.getElementById("addBtn").addEventListener("click", () => {
    const planText = document.getElementById("plan").value.trim();
    const scheduleList = document.getElementById("scheduleList");

    if (planText === '') {
        alert('일정을 입력해주세요!');
        return;
    }

    const div = document.createElement('div');
    div.className = 'schedule-item';
    div.textContent = planText;
    scheduleList.appendChild(div);

    document.getElementById("plan").value = '';
});
