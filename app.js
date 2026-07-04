import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "你的apiKey",
  authDomain: "你的authDomain",
  projectId: "你的projectId",
  storageBucket: "你的storageBucket",
  messagingSenderId: "你的messagingSenderId",
  appId: "你的appId"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(user.user);
    alert("注册成功！验证邮件已发送。");
  } catch (e) {
    alert(e.message);
  }
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    if (!user.user.emailVerified) {
      alert("请先验证邮箱！");
      return;
    }

    alert("登录成功！");
  } catch (e) {
    alert(e.message);
  }
};
