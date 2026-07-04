import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
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

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.publishProduct = async function () {

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const oldPrice = document.getElementById("oldPrice").value;
    const stock = document.getElementById("stock").value;
    const description = document.getElementById("description").value.trim();

    if (name === "") {
        alert("请输入商品名称！");
        return;
    }

    if (category === "请选择分类") {
        alert("请选择商品分类！");
        return;
    }

    if (price === "") {
        alert("请输入商品价格！");
        return;
    }

    try {

        await addDoc(collection(db, "products"), {

            name: name,
            category: category,
            price: Number(price),
            oldPrice: Number(oldPrice),
            stock: Number(stock),
            description: description,
            createdAt: new Date()

        });

        alert("商品发布成功！");

    } catch (error) {

        alert(error.message);

    }

};
