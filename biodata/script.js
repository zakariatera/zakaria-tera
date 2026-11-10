document.addEventListener('DOMContentLoaded',() => {
    const pages = document.querySelectorAll('.page');

    function showPage(pageld) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageld).classList.add('active');
    }

    // Login Form
    const LoginForm = document.getElementById('login-form');
    const loginErrorMassage = document.getElementById('login-error-message');
    const userNameSpan = document.getElementById('user-name');

    LoginForm.addEventListener('submit',(e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Contoh validasi sederhana
        if (username === 'user' && password === '123') {
            userNameSpan.textContent = username;
            showPage('menu-page');
            loginErrorMassage.textContent = '';
            LoginForm.reset();
        } else { 
            loginErrorMassage.textContent = 'Nama pengguna atau kata sandi salah.';

        }
    });

    

    // Menu page
    const showBIodataFormBtn = document.getElementById('show-biodata-form-btn');
    const logoutBtn = document.getElementById('logout-btn');

    showBIodataFormBtn.addEventListener('click',() => {
        showPage('biodata-form-page');
    });
    
    logoutBtn.addEventListener('click',() => {
        showPage('login-page');
    });



    // Biodata Form
    const biodataForm = document.getElementById('biodata-form');
    const displayNama = document.getElementById('display-nama');
    const displayNik = document.getElementById('display-nik');
    const displayAlamat = document.getElementById('display-alamat');
    const displayFoto = document.getElementById('display-foto');
    
    biodataForm.addEventListener('submit',(e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const nik = document.getElementById('nik').value;
        const alamat = document.getElementById('alamat').value;
        const fotoFile = document.getElementById('foto').files[0];

        displayNama.textContent = nama;
        displayNik.textContent = nik;
        displayAlamat.textContent = alamat;

        if (fotoFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                displayFoto.src = e.target.result;
            }
            reader.readAsDataURL(fotoFile);
        }

        showPage('display-biodata-page');
        biodataForm.reset();
    });

    // Display  Biodata Page
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    
    backToMenuBtn.addEventListener('click',() => {
        showPage('menu-page');
    });

});