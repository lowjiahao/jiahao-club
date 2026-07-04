window.publishProduct = function () {

    const name = document.getElementById("name").value.trim();
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const oldPrice = document.getElementById("oldPrice").value;
    const stock = document.getElementById("stock").value;
    const description = document.getElementById("description").value.trim();
    const image = document.getElementById("image").files[0];

    // 检查商品名称
    if (name === "") {
        alert("请输入商品名称！");
        return;
    }

    // 检查分类
    if (category === "请选择分类") {
        alert("请选择商品分类！");
        return;
    }

    // 检查价格
    if (price === "") {
        alert("请输入商品价格！");
        return;
    }

    // 检查图片
    if (!image) {
        alert("请选择商品图片！");
        return;
    }

    // 测试输出
    console.log("商品名称：", name);
    console.log("分类：", category);
    console.log("价格：", price);
    console.log("原价：", oldPrice);
    console.log("库存：", stock);
    console.log("介绍：", description);
    console.log("图片：", image.name);

    alert("商品发布成功！（测试版）");

};
