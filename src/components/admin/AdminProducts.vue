<template>
    <div class="container">
        <div class="navbar">
            <h3>DANH SÁCH SẢN PHẨM</h3>
        </div>
        <button type="button" class="btn btn-primary">+ Thêm mới sản phẩm</button>
        <div class="product-list">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Thao tác</th>
                </tr>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td><img :src="product.src" alt="Product Image" class="product-image"></td>
                    <td>{{ product.name }}</td>
                    <td>{{ formatPrice(product.price) }}</td>
                    <td>
                        <button @click="editProduct(product.id)">Sửa</button>
                        <button @click="deleteProduct(product.id)">Xóa</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        computed: {
            ...mapState({
                products: state => state.products
            }),
            
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
    h3 {
        text-align: center;
        font-size: 20px;
    }

    .img {
        width: 50px;
        height: 50px;
        text-align: center;
        align-items: center;
    }

    .product-list {
        width: 1000px;
        padding-top: 10px;
    }

    .product-list table {
        width: 1100px;
        border-collapse: collapse;
        border: 1px solid black;
    }

    .product-list th, .product-list td {
        border: 1px solid black;
        padding: 5px;
        text-align: left;
    }

    .product-image {
        max-width: 80px;
    }

</style>