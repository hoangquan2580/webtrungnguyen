<template>
    <NavbarPage/>
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="../assets/banner/banner40.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../assets/banner/banner41.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="../assets/banner/banner42.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="container">
        <h2 class="uppercase" style="text-align: center">
            <span style="font-size: 25px;">
                <strong>THẺ KHÁCH HÀNG THÂN THIẾT</strong>
            </span>
        </h2>
        <div class="banner">
            <img src="../assets/banner/banner41.png" alt="">
        </div>
        <div class="banner">
            <img src="../assets/banner/banner42.png" alt="">
        </div>
        <div class="row customer">
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/banner/banner9.png" class="card-img-top image-size" alt="Image 1">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1em;"><b>CHÀO 8/3 – ƯU ĐÃI CÀ PHÊ CAPPUCCINO CHO PHÁI ĐẸP</b></h5>
                        <p class="card-text" style="font-family: 'Roboto', sans-serif;">Phụ nữ là để chiều chuộng và yêu thương! Nhân dịp 8/3 đang cận kề.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/banner/banner10.png" class="card-img-top image-size" alt="Image 2">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1em;"><b>SĂN SALE “02.02” – NHẬN NGAY ƯU ĐÃI KÉP</b></h5>
                        <p class="card-text" style="font-family: 'Roboto', sans-serif;">Hòa cùng không khí náo nhiệt của ngày hội săn sale 02.02.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/banner/banner11.png" class="card-img-top image-size" alt="Image 3">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1em;"><b>MUA 2 TẶNG 1 VÀ ƯU ĐÃI THÊM ĐẾN 65.000 VNĐ TRÊN BEFOOD</b></h5>
                        <p class="card-text" style="font-family: 'Roboto', sans-serif;">Nếu bạn quá bận rộn với công việc, học tập chưa thể trực tiếp đến quán để thưởng thức.</p>
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
    }
</script>
<style>
    .carousel-item img {
        width: 1067px;
        height: 700px;
    }

    h2 {
        padding-top: 15px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;     
        font-family: "Roboto", sans-serif;
    }

    .banner img {
        width: 100%;
        height: 100%;
    }

    .customer {
        padding-top: 30px;
    }

    .card {
        text-align: center;
        font-family: "Roboto", sans-serif;
    }

    .card:hover {
        border: 1px solid rgb(175, 172, 172);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
</style>