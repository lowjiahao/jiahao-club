import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyAdBU25c_gl9cTyTBX-5jg75ZCyYfV3m8U",
  authDomain: "jiahao-club-f3f73.firebaseapp.com",
  projectId: "jiahao-club-f3f73",
  storageBucket: "jiahao-club-f3f73.firebasestorage.app",
  messagingSenderId: "283492806975",
  appId: "1:283492806975:web:37bb262429dabfded4e38a"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 注册
window.register = async function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await sendEmailVerification(userCredential.user);

        alert("注册成功！验证邮件已发送，请前往邮箱验证。");

    } catch (error) {
        alert(error.code + "\n" + error.message);
    }
};

// 登录
window.login = async function () {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        if (!userCredential.user.emailVerified) {
            alert("请先验证邮箱！");
            return;
        }

        alert("登录成功！");
window.location.href = "home.html";
        // window.location.href = "home.html";

    } catch (error) {
        alert(error.code + "\n" + error.message);
    }
};
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// 自动检测登录状态
onAuthStateChanged(auth, (user) => {

    if (user) {

        // 已登录
        window.location.href = "home.html";

    } else {

        console.log("用户未登录");

    }

});
