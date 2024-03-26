<template>
    <NavbarPage/>
    <div class="container">
        <div class="row">
            <h2 class="uppercase" style="text-align: center">
                <span style="font-size: 100%;font-family: 'times new roman', times, serif">
                    <strong>GIỎ HÀNG CỦA BẠN</strong>
                </span>
            </h2>
            <div class="cart-page">
                <div v-if="cart.length === 0" class="no-product">
                    <p>Không có sản phẩm nào trong giỏ hàng.</p>
                </div>
                <div v-else class="d-flex">
                    <div class="col-md-8">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tạm tính</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cartItem, index) in cart" :key="index">
                                    <td><img :src="cartItem.product.src" alt="Product Image" class="product-image"></td>
                                    <td>{{ cartItem.product.name }}</td>
                                    <td>{{ formatPrice(cartItem.product.price) }}</td>
                                    <div class="quantity-input">
                                        <span class="quantity-btn minus" @click="decrementQuantity(cartItem)">-</span>
                                        <input type="number" v-model="cartItem.quantity" @input="validateQuantity(cartItem)" min="1" class="short-input">
                                        <span class="quantity-btn plus" @click="incrementQuantity(cartItem)">+</span>
                                    </div>
                                    <td>{{ formatPrice(cartItem.product.price * cartItem.quantity) }}</td>
                                    <td><button type="button" class="btn btn-dark" @click="removeFromCart(cartItem.product.id)" style="background-color: black; color: white;">Xóa</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-4 total">
                        <div class="d-flex justify-content-between">
                            <p><strong>Tổng số lượng sản phẩm:</strong></p>
                            <p>{{ totalQuantity }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p><strong>Tổng tiền:</strong></p>
                            <p>{{ formatPrice(totalAmount) }}</p>
                        </div>
                        <router-link to="/checkout" class="btn btn-dark" @click="proceedToCheckout" style="background-color: black; color: white;">Tiến hành thanh toán</router-link>
                    </div>
                </div>
            </div> 
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
        computed: {
            cart() {
                return this.$store.state.cart;
            },
            totalQuantity() {
                return this.cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
            },
            totalAmount() {
                return this.cart.reduce((total, cartItem) => total + (cartItem.product.price * cartItem.quantity), 0);
            }
        },
        methods: {
            formatPrice(price) {
                const formattedPrice = (price / 1000).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                return formattedPrice + 'đ';
            },
            decrementQuantity(cartItem) {
                if (cartItem.quantity > 1) {
                    cartItem.quantity--;
                }
            },
            incrementQuantity(cartItem) {
                if (cartItem.quantity < 100) {
                    cartItem.quantity++;
                }
            },
            removeFromCart(productId) {
                this.$store.commit('removeProductFromCart', productId);
            },
            proceedToCheckout() {
                this.$store.dispatch('saveCartData', this.cart);
            },
            validateQuantity(cartItem) {
                if (cartItem.quantity < 1 || !Number.isInteger(cartItem.quantity)) {
                    cartItem.quantity = 1;
                }
            },
        }
    }
</script>
<style>

    .short-input {
        width: 50px;
        text-align: center;
    }

    h2 {
        padding-top: 150px;
        padding-bottom: 40px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    .centered-input {
        text-align: center;
    }


    .quantity-btn {
        display: inline-block;
        width: 20px; 
        height: 30px; 
        background-color: #ebe8e8;
        color: #000000;
        text-align: center;
        cursor: pointer;
        border: 1px solid rgb(226, 225, 225);
    }

    .quantity-btn:hover {
        background-color: #aaa;
    }


    .product-image {
        max-width: 100px; 
        max-height: 60px; 
    }
    
    .no-product {
        font-weight: bold;
        text-align: center;
    }

    .total {
        padding-top: 10px;
        padding-left: 10px;
    }
    
    .btn-dark {
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
        transition: background-color 0.3s, color 0.3s;
    }

    .btn-dark:hover {
        background-color: #000;
        color: #fff;
    }
</style>