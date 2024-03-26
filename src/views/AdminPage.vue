<template>
    <div class="container">
        <div class="sidebar">
            <h2>Admin</h2>
            <div class="container navbar">
                <router-link to="/admin/users">Quản Lý Người Dùng</router-link><br>
                <router-link to="/admin/products">Quản Lý Sản Phẩm</router-link><br>
                <router-link to="/admin/orders">Quản Lý Đơn Hàng</router-link><br>
                <router-link to="/admin/statistics">Thống Kê</router-link><br>
                <a href="/" @click="handleLogout">Đăng xuất</a><br>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AdminPage',
    methods: {
        handleLogout() {
            this.$store.commit('setLoggedIn', false);
        },
    }
}
</script>
<style scoped>
    * {
        font-family: Arial, sans-serif;
    }

    .sidebar {
        text-align: left; 
    }

    .logout-button {
        width: 100px;
        background-color: white;
        color: black; 
        border: none; 
        cursor: pointer;     
    }

    h2 {
        padding-top: 20px;
    }

    .sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #000000;
        color: white;
        padding-top: 20px;
    }

    .content {
        margin-left: 110px;
        padding-top: 4px;
        height: 60px;
        width: 1162px;
        background-color: #ffffff;
        color: rgb(0, 0, 0);
    }

    .container.navbar {
        flex-direction: column;
        text-align: left; 
    }

    .container.navbar a {
        margin-bottom: 10px;
        text-decoration: none;
        font-size: 18px;
        color: white;
        text-align: left; 
    }
</style>
