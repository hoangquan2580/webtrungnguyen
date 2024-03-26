<template>
    <NavbarPage/>
    <div class="form">
        <div class="form-header">
            <div class="title">Đăng Ký</div>
        </div>
        <div class="form-body">
            <ul>
                <li>
                    <input type="Phone" id="" name="" autocapitalize="none" placeholder="Nhập số điện thoại" maxlength="11"/>
                </li>
                <li>
                    <input type="email" id="" name="" autocapitalize="none" placeholder="Nhập email" maxlength="20"/>
                </li>
                <li>
                    <input name="" placeholder="Nhập mật khẩu" maxlength="20"/>
                    <i id="togglePassword"></i>
                </li>
                <li>
                    <button type="button">Đăng Ký</button>
                </li><br>
                <li>
                    Bạn đã có tài khoản?
                    <router-link :to="'/login'">
                        <b>Đăng nhập</b>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <FooterPage />
</template>
<script>
    import NavbarPage from '../components/NavbarPage.vue';
    import FooterPage from "../components/FooterPage.vue";

    export default {
        components: {
            NavbarPage,
            FooterPage
        },
    }
</script>


<style scoped>
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
    }

    .items {
        display: flex;
        justify-content: space-between;
    }

    .item {
        display: flex;
        align-items: center;
        color: #000; 
    }

    .item svg {
        margin-right: 5px;
        align-items: center;
    }

    .item.facebook {
        color: #3b5998;
    }

    .item.google {
        color: #dd4b39;
    }

    .form {
        background-color: white;
        width: 30%;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 5px 0px rgb(207, 207, 207);
        margin: 0 auto;
        margin-top: 150px;
        margin-bottom: 50px;
    }

    .form-header {
        overflow: hidden;
    }

    .form-header .title {
        float: center;
        font-size: 23px;
        text-align: center;
        font-family: "Roboto", sans-serif;
    }

    .error-message-show {
        padding: 6px;
        color: red;
        border: 0.5px solid rgb(250, 160, 160);
        background-color: rgb(255, 239, 239);
        margin-top: 25px;
        text-align: left;
    }

    .form-body {
        margin-bottom: 20px;
    }

    .form-body ul li {
        margin-top: 25px;
    }

    .form-body input {
        width: 100%;
        height: 40px;
        padding: 6px;
        border: 0.5px solid rgb(204, 204, 204);
    }

    #togglePassword {
        position: absolute;
        margin-left: -40px;
        margin-top: 10px;
        cursor: pointer;
    }

    .form-body button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 3px;
        color: white;
        background-color: black;
    }

    .form-body .password-forgot {
        float: left;
    }

    .form-body .items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 10px;
    }

    .form-body .items a {
        border: 0.5px solid rgb(204, 204, 204);
        border-radius: 3px;
        padding: 5px;
    }

    .form-body .items .item {
        display: inline-flex;
        padding-top: 5px;
    }

    .form-body a img {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    .form-body hr {
        margin-top: 40px;
        margin-bottom: 25px;
    }

    .form-body button:hover {
        background-color: gray;
        cursor: pointer;
    }

    .form-body .items a:hover {
        background-color: rgb(245, 245, 245);
    }
</style>
