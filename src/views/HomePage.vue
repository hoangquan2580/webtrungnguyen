<template>
    <NavbarPage/>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/banner/banner.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/banner/banner1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/banner/banner2.png" class="d-block w-100" alt="...">
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
            <span style="font-size: 100%; font-family: 'times new roman', times, serif;">
            <strong>TRUNG NGUYÊN LEGEND CAFÉ</strong>
            </span>
        </h2>
        <p>
            <span style="text-align: center; font-family: 'times new roman', times, serif;font-size: 105%">Không gian Trung Nguyên Legend là điểm hẹn văn hóa của những người yêu và đam mê cà phê. Đến với Trung Nguyên Legend Café, bạn được thưởng thức những ly cà phê năng lượng tuyệt hảo bên những cuốn sách nền tảng đổi đời được chọn lọc từ tinh hoa tri thức nhân loại. Cùng với năng lượng thực dưỡng từ ổ bánh mì ngon nhất thế gian đem đến nguồn năng lượng hài hòa, giúp thanh lọc và cân bằng cơ thể.</span>
        </p><br>
        <div class="center-button" style="padding-top: 10px;">
            <router-link to="/checkout" class="btn btn-default">
                <b>THÔNG TIN HỢP TÁC KINH DOANH</b>
            </router-link>
        </div>
    </div><br><br>
    <div class="container">
        <div class="banner">
            <img src="../assets/banner/banner3.png" alt="">
        </div>
        <h2 class="uppercase" style="text-align: center; padding-top: 40px;">
            <span style="font-size: 100%;font-family: 'times new roman', times, serif">
                <strong>THẾ GIỚI CÀ PHÊ</strong>
            </span>
        </h2>
        <p>
            <span style="text-align: center; font-family: 'times new roman', times, serif;font-size: 105%">Với tình yêu và niềm đam mê của các chuyên gia cà phê số 1, Tập Đoàn Trung Nguyên Legend tuyển chọn khắt khe những nguồn nguyên liệu tốt nhất thế giới Brazil, Colombia, Ethiopia, Jamaica, Việt Nam, kết hợp với bí quyết huyền bí Phương Đông và công nghệ rang xay hiện đại hàng đầu thế giới để tạo những tuyệt phẩm cà phê năng lượng tuyệt ngon, tuyệt mỹ.</span><br>
        </p>
        <div class="banner">
            <img src="../assets/banner/banner5.png" alt="">
        </div><br>
        <h2 class="uppercase" style="text-align: center; padding-top: 40px;">
            <span style="font-size: 100%;font-family: 'times new roman', times, serif">
                <strong>SHOW TRẢI NGHIỆM 3 NỀN VĂN MINH CÀ PHÊ</strong>
            </span>
        </h2>
        <p>
            <span style="text-align: center; font-family: 'times new roman', times, serif;font-size: 105%">Tập đoàn Trung Nguyên Legend đã dành thời gian và tâm huyết trong nhiều năm để nghiên cứu lịch sử, văn hóa, nghệ thuật… cà phê trong mọi lĩnh vực đời sống của nhân loại để cà phê trở thành “Cà Phê Triết Đạo” và cho ra mắt show thưởng lãm cà phê kết hợp công nghệ, nghệ thuật trình diễn đặc biệt theo 3 Nền Văn Minh Cà Phê duy nhất tại không gian Trung Nguyên Legend.Lần đầu tiên trên thế giới, 3 nền văn minh cà phê điển hình, đặc biệt nhất được hội tụ!</span><br>
        </p><br>
        <div class="image-container">
            <img src="../assets/banner/banner6.png" alt="">
            <img src="../assets/banner/banner7.png" alt="">
            <img src="../assets/banner/banner8.png" alt="">
        </div><br>
        <div class="center-button">
            <button type="button" class="btn btn-default" style="width: 500px;">ĐẶT VÉ NGAY</button>
        </div>
        <h2 class="uppercase" style="text-align: center">
            <span style="font-size: 100%;font-family: 'times new roman', times, serif">
                <strong>SỰ KIỆN NỔI BẬT</strong>
            </span>
        </h2>
        <div class="row">
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
    </div><br>
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
    .banner img {
        width: 100%;
        height: 100%;
    }
    .carousel-item {
        transition: opacity 1s;
    }

    .carousel-item.active {
        opacity: 1;
    }

    .carousel-item:not(.active) {
        opacity: 0;
    }

    .image-container {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    .image-container img {
        width: 350px;
        height: auto;
    }

    .image-container img:hover {
        border: 1px solid rgb(175, 172, 172);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .carousel-item img {
        width: 1067px;
        height: 700px;
        object-fit: cover;
    }

    h2 {
        padding-top: 25px;
        padding-bottom: 40px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
    }

    p {
        text-align: center;
        margin: 0 auto;
        font-family: 'times new roman', times, serif;
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

    .center-button {
        display: flex;
        justify-content: center;
        align-items: center;
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
  