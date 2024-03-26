<template>
    <NavbarPage/>
    <div class="container detail">
        <div class="row">
            <div class="col-6 images">
                <img :src="product.src" alt="Product Image">
            </div>
            <div class="col-6">
                <p class="title">{{ product.name }}</p>
                <p class="price">{{ formatPrice(product.price) }}</p>
                <p class="description">{{ product.description }}</p>
                <div class="quantity-input">
                    <span class="quantity-btn minus" @click="decrementQuantity">-</span>
                    <input type="number" v-model="quantity" @input="validateQuantity" min="1" max="100" class="centered-input">
                    <span class="quantity-btn plus" @click="incrementQuantity">+</span>
                </div><br>
                <div class="button-container">
                    <button class="btn btn-addtocart" @click="addToCart" style="background-color: black; color: white; font-weight: bold; border-radius: 10px;">Thêm vào giỏ hàng</button>
                    <button class="btn btn" style="background-color: #ffba00; color: white; font-weight: bold; border-radius: 10px;" @click="BuyNow">Mua ngay</button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <form>
                    <h4 class="uppercase" style="text-align: left">
                        <span style="font-size: 100%;font-family: 'times new roman', times, serif">
                            <strong>Mô Tả</strong>
                        </span>
                    </h4>
                    <p class="producthouse"><b>Nhà sản phẩm:</b>{{ product.producthouse }}</p>
                    <p><b>Thành phần:</b>{{ product.ingredient }}</p>
                    <p><b>Đặc tính:</b>{{ product.characteristic }}</p>
                    <p><b>Khối lượng:</b>{{ product.width }}</p>
                </form>             
            </div>
        </div>
    </div>
    <FooterPage />
</template>
<script>
import { mapMutations, mapActions, mapState  } from 'vuex';
import NavbarPage from '../components/NavbarPage.vue';
import FooterPage from "../components/FooterPage.vue";
export default {
    components: {
        NavbarPage,
        FooterPage
    },
    data() {
        return {
            quantity: 1,
            currentImage: null,
        };
    },
    computed: {
        ...mapState({
            products: state => state.products
        }),
        product() {
            return this.products.find(product => product.id === parseInt(this.$route.params.id));
        }
    },
    methods: {
        formatPrice(price) {
            const formattedPrice = (price / 1000).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            return formattedPrice + 'đ';
        },
        incrementQuantity() {
            if (this.quantity < 10) {
                this.quantity++;
            }
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        ...mapMutations(['ADD_TO_CART']),
        ...mapActions(['addToCartAction']),
        addToCart() {
            this.ADD_TO_CART({ product: this.product, quantity: this.quantity });
        },
        validateQuantity() {
            if (this.quantity < 1 || !Number.isInteger(this.quantity)) {
                this.quantity = 1;
            }
        }, 
        BuyNow() {
            this.addToCartAction({ product: this.product, quantity: this.quantity });
            this.$router.push('/checkout');
        },      
    },
    mounted() {
        this.$store.commit('clearSearchKeyword');
    }
}
</script>
<style>
    .centered-input {
        text-align: center;
    }

    .button-container {
        white-space: nowrap;
    }

    .button-container button {
        display: inline-block; 
        margin-right: 10px;
    }

    form {
        border: 1px solid #000;
        padding: 20px;
    }

    p {
        font-family: 'times new roman', times, serif;
    }
    
    .detail {
        padding-top: 190px;
    }

    .title {
        text-align: left;
        font-size: 30px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    .price {
        text-align: left;
        font-size: 20px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    .description {  
        font-family: 'times new roman', times, serif;
    }

    .btn {
        font-family: 'Muli', sans-serif;
        transition: all 0.2s linear;
        text-transform: uppercase;
        position: relative;
        font-size: 13px;
        padding: 7px 12px;
        display: inline-block;
        margin-bottom: 0;
        cursor: pointer;
        border: 2px solid #000000;
        border-radius: 4px;
        background-color: #ffffff;
        color: #000000;
        margin-bottom: 0;
    }

    .quantity-input {
        display: flex;
        align-items: center;
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

    input[type="text"] {
        width: 50px;
        height: 30px; 
        text-align: center;
    }

    .images img {
        max-width: 75%;
        max-height: 90%;
        display: inline-block;
        vertical-align: middle;
    }

    .product-tooltip img {
        width: 30%;
    }

    .product-tooltip {
        display: flex;
    }

</style>
