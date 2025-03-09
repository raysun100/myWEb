document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表單預設提交行為

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // 在這裡進行帳號密碼驗證 (實際應用中應從伺服器端驗證)
    if (username === 'test' && password === '1234') {
        // 登入成功
        errorMessage.textContent = ''; // 清空錯誤訊息
        window.location.href = 'success.html'; // 跳轉到成功頁面
    } else {
        // 登入失敗
        errorMessage.textContent = '帳號或密碼錯誤';
    }
});
