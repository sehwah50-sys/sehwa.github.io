// 로그인 안 했으면 접근 차단
if (!localStorage.getItem('auth')) {
    location.href = '/login.html';
}

// 로그아웃 함수
function logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('role');
    location.href = '/login.html';
}
