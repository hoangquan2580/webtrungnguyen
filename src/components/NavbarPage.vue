<template>
    <header class="container-fluid" style="background-color: rgb(255, 255, 255);">
        <menu class="row menu">
            <div class="col-lg-2">
                <img src="../assets/logo.png" alt="" width="70px" height="70px">
            </div>
            <div class="col-lg-3 d-flex align-items-center">
            </div>
            <div class="col-lg-3 d-flex align-items-center">
                <div class="center-button">
                    <div class="search-bar">
                        <input type="text" class="form-control" v-model="searchKeyword" placeholder="Tìm kiếm sản phẩm..." @input="updateSearchKeyword">
                        <ul class="product-list">
                            <li v-for="product in filteredProducts" :key="product.id">
                                <router-link :to="'/productdetail/' + product.id"> 
                                    <div class="product">
                                        <img :src="product.src" alt="Product Image">
                                        <div class="product-details">
                                            <h3 style="font-size: 16px;">{{ product.name }}</h3>
                                            <p>{{ formatPrice(product.price) }}</p>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 align-items-center" style="padding-top: 15px;">
                <div class="cart ms-3">
                    <div class="auth-links ml-3">  
                        <div class="login">
                            <router-link v-if="!isLoggedIn" to="/login">Đăng nhập</router-link>
                            <router-link v-else to="" class="logout" @click="handleLogout">Đăng xuất</router-link>
                        </div>
                        <router-link to="/cart" class="cart-item">
                            <i class="uil uil-shopping-bag"></i>
                            <span class="notification-counter">{{ cartItemCount }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </menu>
        <nav class="navbar navbar-expand-lg">
            <div class="container-xxl">
                <div class="navbar-collapse" id="navbarNav">
                    <div class="">
                        <router-link to="/">
                            <a class="nav-link">TRANG CHỦ</a>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/about">
                            <a class="nav-link">VỀ CHÚNG TÔI</a>
                        </router-link>
                    </div>
                    <div class="">
                        <router-link to="/product">
                            <a class="nav-link">SẢN PHẨM</a>
                        </router-link>
                    </div>
                    <div class="">
                        <router-link to="/promotion">
                            <a class="nav-link">ƯU ĐÃI</a>
                        </router-link>
                    </div>
                    <div class="">
                        <router-link to="/customer">
                            <a class="nav-link">THẺ KHÁCH HÀNG THÂN THIẾT</a>
                        </router-link>
                    </div>
                    <div class="">
                        <router-link to="/lifestyle">
                            <a class="nav-link">LỐI SỐNG CÀ PHÊ</a>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/recruitment">
                            <a class="nav-link">TUYỂN DỤNG</a>
                        </router-link>
                    </div>                   
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
import { mapGetters } from 'vuex';

    export default {
        computed: {
            cartItemCount() {
                return this.$store.getters.cartItemCount;
            },
            isLoggedIn() {
                return this.$store.state.isLoggedIn; 
            },
            ...mapGetters(['filteredProducts']),
            searchKeyword: {
                get() {
                    return this.$store.state.searchKeyword;
                },
                set(value) {
                    this.$store.commit('setSearchKeyword', value);
                }
            },
        },
        methods: {
            handleLogout() {
                this.$store.dispatch('handleLogout');
            },  
            formatPrice(price) {
                const formattedPrice = (price / 1000).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                return formattedPrice + 'đ';
            },  
            updateSearchKeyword(event) {
                const keyword = event.target.value;
                this.$store.commit('setSearchKeyword', keyword);
            },
        }
    }
</script>
<style scoped>
    h2 {
        padding-top: 25px;
        padding-bottom: 40px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }
    
    .search-bar {
        position: fixed;
        top: 10px; 
        left: 50%;
        transform: translateX(-50%);
        background-color: #ffffff;
        padding: 10px;
        border-radius: 5px;
    }

    .product-details {
        display: flex;
        flex-direction: column;
    }

    .product-details h3 {
        margin: 0;
    }

    .product-details p {
        margin: 5px 0;
    }

    .product-list {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: 10px;
        z-index: 999;
        list-style-type: none;
    }

    .product img {
        max-width: 100%;
        height: 60px;
        margin-right: 10px;
    }

    .product {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .form-control {
        width: 300px;
    }

    .center-button {
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .center-button input {
        width: 400px;
        height: 35px;
        padding: 8px;
        border: 2px solid #000000;
        border-radius: 5px;
        text-align: left;
        flex: 1;
    }

    .login {
        margin-left: 80px;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
    }

    .menu {
        height: 60px;
    }

    a {
        color: #000000;
        font-weight: bold;
        font-size: 15px;
        font-family: "Roboto", sans-serif;
        padding: 10px 25px;
        text-decoration: none; 
    }

    a:hover {
        color: #ffba00;
    }

    .auth-links {
        display: flex;
    }
  
    .auth-links a {
        justify-content: space-between;
    }

    .btn {
        font-family: 'Muli', sans-serif;
        transition: all 0.2s linear;
        text-transform: uppercase;
        overflow: hidden;
        position: relative;
        font-size: 13px;
        padding: 7px 12px;
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 12px;
        cursor: pointer;
        border: 2px solid #000000;
        border-radius: 30px;
        background-color: #ffffff;
        color: #000000;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .btn-default {
        color: #000000;
        background-color: #ffffff;
    }

    .btn-default:hover {
        color: #ffffff;
        background-color: #000000;
    }

    .center-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #ffffff;
        color: #000000;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        width: 100%;
        height: 40px;
        padding: 0 20px;
    }

    .nav-link {
        color: #000000;
        font-family: "Roboto", sans-serif;
        cursor: pointer;
        margin-right: 20px;
    }
    

    @media (max-width: 767px) {
        .menu {
            height: 60px;
        }       
        nav {
            align-items: flex-start;
            padding: 10px;
        }     
        .nav-link {
            margin: 10px 0;
        }
    }

    .login {
        padding-top: 8px;
    }

    .register {
        padding-top: 8px;
    }

    .cart-item {
        position: fixed;
        top: 12px;
        right: 130px; 
        background-color: #ffffff; 
        padding: 10px;
        border-radius: 50%; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 18px;  
    }

    .notification-counter {
        background-color: red; 
        color: white; 
        border-radius: 50%;
        padding: 3px 6px;
        font-size: 10px; 
        position: absolute;
        top: -5px; 
       right: -5px;
    }
</style>