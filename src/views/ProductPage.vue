<template>
    <NavbarPage/>
    <h2 class="uppercase" style="text-align: center">
        <span style="font-size: 25px;">
            <strong>SẢN PHẨM NỔI BẬT</strong>
        </span>
    </h2>
    <div class="container">
  <div class="row">
    <div class="col-md-3 custom-col" v-for="product in products" :key="product.id">
      <div class="card">
        <img :src="product.src" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h3 class="card-title">{{ product.name }}</h3>
          <p class="card-text"><b>{{ formatPrice(product.price) }}</b></p>
          <button @click="goToProductDetail(product.id)" class="btn btn-default">Xem chi tiết</button>
        </div>
      </div>
    </div>
  </div>
</div>
    <FooterPage />
</template>

<script>
    import { mapState } from 'vuex';
    import NavbarPage from '../components/NavbarPage.vue';
    import FooterPage from "../components/FooterPage.vue";

    export default {
        components: {
            NavbarPage,
            FooterPage
        },
        computed: {
            ...mapState({
                products: state => state.products
            })
        },
        methods: {
            formatPrice(price) {
                const formattedPrice = (price / 1000).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                return formattedPrice + 'đ';
            },
            goToProductDetail(productId) {
                this.$router.push({ path: `/productdetail/${productId}` });
            },
        }
    }
</script>

<style scoped>
    .filtration-products {
        align-items: center;
        padding-left: 110px;
        padding-bottom: 40px;
    }

    .filtration-products label {
        margin-right: 20px; 
        margin-left: 22px; 
    }

    .filtration-products input {
        flex: 1;
        border: 1px solid #000000;
    }
    
    h2 {
        padding-top: 85px;
        padding-bottom: 40px;
        font-size: 24px;
        text-align: center;
        font-family: "Roboto", sans-serif;
    }

    .card-title {
        font-size: 18px;
        font-family: 'times new roman', times, serif;
    }

    .card-text {
        font-size: 18px;
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
        cursor: pointer;
        border: 2px solid #000000;
        border-radius: 4px;
        background-color: #ffffff;
        color: #000000;
    }

    .btn-default {
        color: #000000;
        background-color: #ffffff;
    }

    .btn-default:hover {
        color: #ffffff;
        background-color: #000000;
    }

    .custom-col {
        padding: 10px;
    }

    .card-top-img {
        max-width: 75%;
        max-height: 90%;
        display: inline-block;
        vertical-align: middle;
    }
</style>
  