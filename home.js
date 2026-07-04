*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,sans-serif;
}

body{
    background:#f5f5f5;
    padding-bottom:80px;
}

/* 顶部 */

.header{
    background:#111;
    height:60px;
    display:flex;
    align-items:center;
    padding:0 15px;
}

.logo{
    color:white;
    font-size:22px;
    font-weight:bold;
}

.search{
    flex:1;
    margin:0 15px;
}

.search input{
    width:100%;
    height:38px;
    border:none;
    border-radius:20px;
    padding:0 15px;
    outline:none;
}

.menu{
    color:white;
    font-size:28px;
    cursor:pointer;
}

/* Banner */

.banner{
    width:100%;
    padding:12px;
}

.banner img{
    width:100%;
    height:180px;
    border-radius:15px;
    object-fit:cover;
}

/* 公告 */

.notice{
    margin:0 12px;
    background:white;
    padding:15px;
    border-radius:12px;
    color:#444;
    box-shadow:0 3px 10px rgba(0,0,0,.08);
}

/* 分类 */

.category{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:12px;
    padding:15px;
}

.item{
    background:white;
    border-radius:12px;
    text-align:center;
    padding:15px;
    box-shadow:0 3px 10px rgba(0,0,0,.08);
}

.item img{
    width:50px;
    height:50px;
}

.item p{
    margin-top:10px;
    font-size:14px;
}

/* 标题 */

.title{
    font-size:22px;
    font-weight:bold;
    padding:15px;
}

/* 商品 */

.products{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    gap:15px;
    padding:15px;
}

.card{
    background:white;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 5px 15px rgba(0,0,0,.08);
    transition:.3s;
}

.card:hover{
    transform:translateY(-5px);
}

.card img{
    width:100%;
    height:180px;
    object-fit:cover;
}

.card h3{
    padding:10px;
    font-size:16px;
}

.price{
    color:red;
    font-size:22px;
    font-weight:bold;
    padding:0 10px;
}

.card button{
    width:calc(100% - 20px);
    margin:10px;
    height:42px;
    border:none;
    background:#2F80FF;
    color:white;
    border-radius:8px;
    cursor:pointer;
}

/* 底部导航 */

footer{
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    height:65px;
    background:white;
    display:flex;
    justify-content:space-around;
    align-items:center;
    box-shadow:0 -2px 10px rgba(0,0,0,.1);
}

footer div{
    text-align:center;
    color:#666;
    font-size:13px;
    cursor:pointer;
}

footer .active{
    color:#2F80FF;
      }
