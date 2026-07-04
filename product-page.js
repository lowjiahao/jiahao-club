import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase 配置
const firebaseConfig = {
    apiKey: "AIzaSyAdBU25c_gl9cTyTBX-5jg75ZCyYfV3m8U",
    authDomain: "jiahao-club-f3f73.firebaseapp.com",
    projectId: "jiahao-club-f3f73",
    storageBucket: "jiahao-club-f3f73.firebasestorage.app",
    messagingSenderId: "283492806975",
    appId: "1:283492806975:web:37bb262429dabfded4e38a"
};

// 初始化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 获取URL参数
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 加载商品
async function loadProduct() {

    if (!id) {
        alert("商品不存在！");
        return;
    }

    try {

        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            alert("找不到商品！");
            return;
        }

        const item = docSnap.data();

        document.getElementById("name").innerText = item.name;
        document.getElementById("price").innerText = "RM " + item.price;
        document.getElementById("description").innerText = item.description;

        // 以后上传图片后会自动显示
        if (item.image) {
            document.getElementById("image").src = item.image;
        }

    } catch (e) {

        console.error(e);
        alert("商品加载失败！");

    }

}

loadProduct();
