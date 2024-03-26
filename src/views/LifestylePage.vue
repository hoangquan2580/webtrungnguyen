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
                <img src="../assets/banner/banner43.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/banner/banner44.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="../assets/banner/banner45.png" class="d-block w-100" alt="...">
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
        <h2 class="uppercase" style="text-align: center; font-family: 'times new roman', times, serif">
            <span style="font-family: 'times new roman', times, serif; font-size: 25px;">
                <strong>3 NỀN VĂN MINH CÀ PHÊ</strong>
            </span>
        </h2>
        <div class="col-inner text-center">
            <p style="text-align: left">
                <span style="font-family: 'times new roman', times, serif">Với mong muốn đưa ngành cà phê Việt Nam lên một tầm cao mới, nâng cao giá trị cà phê không chỉ là một thức uống thông thường mà còn ở tầm mức cà phê văn hóa, cà phê nghệ thuật, cà phê tinh thần… đến cà phê triết đạo, xứng đáng với vị thế của cường quốc cà phê của thế giới.</span>
            </p>
            <p style="text-align: left">
                <span style="font-family: 'times new roman', times, serif">Tập đoàn Trung Nguyên Legend đã dành thời gian và tâm huyết trong nhiều năm để nghiên cứu lịch sử, văn hóa, nghệ thuật… cà phê trong mọi lĩnh vực đời sống của nhân loại để cà phê trở thành “Cà Phê Triết Đạo” và cho ra mắt show thưởng lãm cà phê kết hợp công nghệ, nghệ thuật trình diễn đặc biệt theo 3 Nền Văn Minh Cà Phê duy nhất tại không gian Trung Nguyên Legend Café.</span>
            </p>
            <p style="text-align: left">
                <span style="font-family: 'times new roman', times, serif">Lần đầu tiên trên thế giới, 3 nền văn minh cà phê điển hình, đặc biệt nhất được hội tụ!</span>
            </p>
        </div>
        <div class="image-container">
            <img src="../assets/banner/banner6.png" alt="">
            <img src="../assets/banner/banner7.png" alt="">
            <img src="../assets/banner/banner8.png" alt="">
        </div><br>
        <h2 class="uppercase" style="text-align: center; font-family: 'times new roman', times, serif">
            <span style="font-family: 'times new roman', times, serif; font-size: 25px;">
                <strong>PHỤNG SỰ CỘNG ĐỒNG</strong>
            </span>
        </h2>
        <div class="row promotion">
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/banner/banner46.png" class="card-img-top image-size" alt="Image 1">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1em;"><b>Thông báo lịch nghỉ Lễ Quốc Khánh <br>2/9</b></h5>
                        <p class="card-text">Kính gửi Quý khách hàng, Hệ thống không gian Trung Nguyên Legend xin thông báo [...]</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/banner/banner47.png" class="card-img-top image-size" alt="Image 2">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1em;"><b>Hành Trình Từ Trái Tim – Kiến tạo Khát vọng Khởi nghiệp</b></h5>
                        <p class="card-text">Những cuốn sách nền tảng đổi đời do Chủ tịch Trung Nguyên Đặng Lê Nguyên [...]</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="../assets/banner/banner48.png" class="card-img-top image-size" alt="Image 3">
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 1em;"><b>Đồng hành cùng Bộ LĐ-TB&XH thúc đẩy tinh thần khởi nghiệp</b></h5>
                        <p class="card-text">Ngày 28-5, Tập đoàn Trung Nguyên Legend và Tổng cục Giáo dục nghề nghiệp [...]</p>
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
        padding-top: 25px;
        padding-bottom: 40px;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
    }

    .image-container {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding-top: 10px;
    }

    .image-container img {
        width: 350px;
        height: auto;
    }

    .image-container img:hover {
        border: 1px solid rgb(175, 172, 172);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .promotion {
        padding-top: 30px;
    }

    .image-size {
        width: 300px; 
        height: 200px; 
        object-fit: cover;
    }
</style>