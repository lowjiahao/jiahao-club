import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "你的apikey",
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

    const userCredential =
      await createUserWithEmailAndPassword(auth,email,password);

    await sendEmailVerification(userCredential.user);

    alert("注册成功，验证邮件已发送！");

  } catch(error){

    alert(error.code+"\n"+error.message);

  }

}

window.login = async function(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try{

    const userCredential =
      await signInWithEmailAndPassword(auth,email,password);

    if(!userCredential.user.emailVerified){

      alert("请先验证邮箱");

      return;

    }

    alert("登录成功！");

  }catch(error){

    alert(error.code+"\n"+error.message);

  }

}
