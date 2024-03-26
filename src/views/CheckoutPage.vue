<template>
    <NavbarPage/>
    <div class="container">
        <h2 class="uppercase" style="text-align: center">
            <span style="font-size: 100%;font-family: 'times new roman', times, serif">
                <strong>THANH TOÁN</strong>
            </span>
        </h2>
        <div class="cart-page">
            <div class="row">
                <div class="col-md-7 order-md-1">
                    <div class="custom-padding">
                        <h3>THANH TOÁN VÀ GIAO HÀNG</h3>
                        <div class="mb-3">
                            <label for="fullName" class="form-label"><b>Họ và tên *</b></label>
                            <input type="text" class="form-control fullname" id="fullName" placeholder="Họ tên của bạn">
                        </div><br>
                        <div class="row">
                            <div class="col-6">
                                <label for="phoneNumber" class="form-label"><b>Số điện thoại *</b></label>
                                <input type="tel" class="form-control" id="phoneNumber" placeholder="Số điện thoại của bạn">
                            </div>
                            <div class="col-6">
                                <label for="email" class="form-label"><b>Địa chỉ email *</b></label>
                                <input type="email" class="form-control" id="email" placeholder="Email của bạn">
                            </div>
                        </div><br>
                        <div class="mb-3">
                            <label for="address" class="form-label"><b>Địa chỉ *</b></label>
                            <input type="text" class="form-control address" id="address" placeholder="Địa chỉ của bạn">
                        </div>
                        <div class="mb-3">
                            <label for="paymentMethod" class="form-label"><b>Phương thức thanh toán</b></label>
                            <div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="paymentMethod" id="cashOnDelivery" value="cash" @change="handlePaymentMethod">
                                    <label class="form-check-label" for="cashOnDelivery">
                                        Trả tiền mặt khi nhận hàng
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 order-md-2">
                    <h3>ĐƠN HÀNG CỦA BẠN</h3>
                    <table class="table">
                        <tbody>
                            <tr v-for="(cartItem, index) in cart" :key="index">
                                <td><img :src="cartItem.product.src" alt="Product Image" class="product-image"></td>
                                <td><b>{{ cartItem.product.name }}</b> x {{ cartItem.quantity }}</td>
                                <td>{{ formatPrice(cartItem.product.price * cartItem.quantity) }}</td>
                            </tr>
                            <tr>
                                <td colspan="2"><b>Tổng tiền cần thanh toán</b></td>
                                <td><b>{{ formatPrice(totalAmount) }}</b></td>     
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" class="btn btn" style="background-color: black; color: white;">ĐẶT HÀNG</button>
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
    
    computed: {
        cart() {
            return this.$store.state.cart;
        },
        totalAmount() {
            return this.cart.reduce((total, cartItem) => total + (cartItem.product.price * cartItem.quantity), 0);
        }
    },
    components: {
        NavbarPage,
        FooterPage
    },
    methods: {
        formatPrice(price) {
            const formattedPrice = (price / 1000).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return formattedPrice + 'đ';
        },
    }

};
</script>

<style scoped>
    .fullname {
        width: 100%;
        text-align: left;
    }

    .address {
        width: 100%;
        text-align: left;
    }
    
    .form-control {
        height: 40px;
    }

    input {
        border: 1px solid black;
    }

</style>
