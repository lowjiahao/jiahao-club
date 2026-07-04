import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs
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

// 加载商品
async function loadProducts() {

    const products = document.getElementById("products");

    products.innerHTML = "<p>正在加载商品...</p>";

    try {

        const querySnapshot = await getDocs(collection(db, "products"));

        products.innerHTML = "";

        if (querySnapshot.empty) {

            products.innerHTML = "<p>暂无商品</p>";
            return;

        }

        querySnapshot.forEach((doc) => {

            const item = doc.data();

            products.innerHTML += `

            <div class="card">

                <img src="images/product.png" alt="商品图片">

                <h3>${item.name}</h3>

                <p class="price">
                    RM ${item.price}
                </p>

                <button onclick="openProduct('${doc.id}')">
                    查看商品
                </button>

            </div>

            `;

        });

    } catch (error) {

        console.error(error);

        products.innerHTML = "<p>商品加载失败！</p>";

    }

}

// 打开商品详情
window.openProduct = function(id){

    window.location.href = "product.html?id=" + id;

}

// 页面加载
loadProducts();
