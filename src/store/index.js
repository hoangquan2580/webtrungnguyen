import { createStore } from 'vuex';
import router from "@/router"; 

export default createStore({
  state: {
    products: [
      {
        "id": 1,
        "name": "Cà Phê Chế Phin 1",
        "price": 123000,
        "description": "Là những sản phẩm được phối trộn từ những hạt cà phê ngon nhất theo bí quyết riêng không thể sao chép của Trung Nguyên. Mỗi tuyệt phẩm cà phê CHẾ PHIN sở hữu hương thơm và vị đặc trưng, làm rung động các giác quan của những người sành cà phê và đặc biệt tạo gu riêng biệt cho mỗi quán cà phê tùy theo mỗi sản phẩm mà họ lựa chọn",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Chế biến từ những hạt cà phê Culi Robusta hảo hạng.",
        "characteristic": "Nước pha có màu nâu cánh gián đậm - Mùi thơm dịu nhẹ - Vị đậm đà - Hàm lượng Caffeine: khoảng 2.5%.",
        "width": "Bịch 500gr",
        src: require("@/assets/products/img1.png"),
      },
      {
        "id": 2,
        "name": "Cà Phê Chế Phin 2",
        "price": 141000,
        "description": "Là những sản phẩm được phối trộn từ những hạt cà phê ngon nhất theo bí quyết riêng không thể sao chép của Trung Nguyên. Mỗi tuyệt phẩm cà phê CHẾ PHIN sở hữu hương thơm và vị đặc trưng, làm rung động các giác quan của những người sành cà phê và đặc biệt tạo gu riêng biệt cho mỗi quán cà phê tùy theo mỗi sản phẩm mà họ lựa chọn",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Chế biến từ những hạt cà phê Robusta và Arabica ngon nhất thế giới.",
        "characteristic": "Nước pha có màu nâu cánh gián nhạt - Mùi thơm nhẹ - Vị đắng êm, đậm đà - Hàm lượng Caffeine: khoảng 2.0% - Ngon nhất khi uống nóng.",
        "width": "Bịch 500gr",
        src: require("@/assets/products/img2.png"),
      },
      {
        "id": 3,
        "name": "Cà Phê Chế Phin 3",
        "price": 166000,
        "description": "Là những sản phẩm được phối trộn từ những hạt cà phê ngon nhất theo bí quyết riêng không thể sao chép của Trung Nguyên. Mỗi tuyệt phẩm cà phê CHẾ PHIN sở hữu hương thơm và vị đặc trưng, làm rung động các giác quan của những người sành cà phê và đặc biệt tạo gu riêng biệt cho mỗi quán cà phê tùy theo mỗi sản phẩm mà họ lựa chọn",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Chế biến từ những hạt cà phê Arabica.",
        "characteristic": "Nước pha màu nâu cánh gián nhạt - Mùi thơm nồng - Vị đắng hơi chua, thể chất nhẹ vừa phải - Hàm lượng Caffeine: khoảng 1.7% - Ngon nhất khi uống với sữa.",
        "width": "Bịch 500gr",
        src: require("@/assets/products/img3.png"),
      },
      {
        "id": 4 ,
        "name": "Cà Phê Chế Phin 4",
        "price": 197000,
        "description": "Là những sản phẩm được phối trộn từ những hạt cà phê ngon nhất theo bí quyết riêng không thể sao chép của Trung Nguyên. Mỗi tuyệt phẩm cà phê CHẾ PHIN sở hữu hương thơm và vị đặc trưng, làm rung động các giác quan của những người sành cà phê và đặc biệt tạo gu riêng biệt cho mỗi quán cà phê tùy theo mỗi sản phẩm mà họ lựa chọn.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Kết hợp từ những hạt Culi của 4 loại cà phê Arabica, Robusta, Catimor và Excelsa.",
        "characteristic": "Nước pha màu nâu cánh gián đậm - Mùi thơm bền - Vị rất đặc biệt, thể chất đậm - Hàm lượng Caffeine: khoảng 2.4% - Ngon hơn khi dùng chung với sữa và đá.",
        "width": "Bịch 500gr",
        src: require("@/assets/products/img4.png"),
        
      },
      {
        "id": 5,
        "name": "Cà phê Sáng Tạo 1",
        "price": 74500,
        "description": "Những hạt cà phê Culi Rubusta được chọn lọc một cách kỹ lưỡng, cùng với bí quyết Đông Phương, công thức không thể sao chép, sản xuất trên công nghệ hàng đầu thế giới, Trung Nguyên đã mang đến cho những người yêu thích cà phê dòng Cà phê sáng tạo 1 chất lượng nhất.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Hạt cà phê Culi Robusta",
        "characteristic": "Nước pha màu nâu cánh gián đậm - Mùi thơm dịu nhẹ - Vị đậm đà - Hàm lượng Caffeine: khoảng 2.5% - Rất ngon khi với đá lạnh hoặc cà phê đen.",
        "width": "Bịch 340gr",
        src: require("@/assets/products/img5.png"),
      },
      {
        "id": 6,
        "name": "Cà phê Sáng Tạo 2",
        "price": 86500,
        "description": "Cà phê Sáng Tạo 2 là nơi khởi nguồn các sáng tạo mới. Với lòng đam mê sống chết với cà phê, Tập đoàn Trung Nguyên Legend tạo ra loại cà phê đặc biệt nhất thế giới, đem đến những ý tưởng đột phá giúp bạn thành công hơn trong cuộc sống. Sự kết hợp cà phê Robusta và Arabica xanh, sạch, thuần khiết từ vùng đất bazan nên tạo hương thơm quyến rũ, vị dịu nhẹ.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Sự kết hợp giữa hạt Robusta và Arabica.",
        "characteristic": "Nước pha màu nâu cánh gián nhạt - Mùi thơm nhẹ - Vị đắng êm, đậm đà - Hàm lượng Caffeine: khoảng 2.0% - Ngon nhất khi uống nóng.",
        "width": "Bịch 340gr",
        src: require("@/assets/products/img6.png"),       
      },
      {
        "id": 7,
        "name": "Cà phê Sáng Tạo 3",
        "price": 104500,
        "description": "Cà phê Sáng Tạo 3 là sự kết hợp giữa những hạt cà phê Arabica sẻ đến từ vùng đất trồng cà phê nổi tiếng Buôn Ma Thuột, được chọn lựa kỹ lưỡng và sản xuất trên công nghệ hàng đầu và bí quyết phối trộn không thể sao chép để tạo ra một sản phẩm cà phê có màu nâu nhạt, mùi rất thơm. Lịch sử thế giới đã minh chứng, có những ý tưởng sáng tạo trước đây được coi là điên rồ, không tưởng thì nay đã thành hiện thực và làm thay đổi hoàn toàn thế giới và nó được khơi lên từ cà phê.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Hạt cà phê Arabica",
        "characteristic": "Nước pha màu nâu cánh gián nhạt -Mùi thơm nồng - Vị đắng hơi chua, thể chất nhẹ vừa phải - Hàm lượng Caffeine: khoảng 1.7% - Ngon nhất khi uống với sữa.",
        "width": "Bịch 340gr",
        src: require("@/assets/products/img7.png"),
      },
      {
        "id": 8,
        "name": "Cà phê Sáng Tạo 4",
        "price": 118500,
        "description": "Bao bì cà phê Sáng Tạo 4 là phát kiến về chiếc máy bay đầu tiên để tạo nên những máy bay sang trọng, mạnh nhất của ngày nay. Được lựa chọn từ những hạt cà phê Culi Arabica, Robusta, Excelsa, Catimor tốt nhất thế giới, sản xuất trên công nghệ hàng đầu và bí quyết phối trộn không thể sao chép, cà phê Sáng tạo 4 dành cho những người rất sành, am hiểu về cà phê, gu cà phên mạnh và thói quen uống cà phê mỗi ngày.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Kết hợp từ những hạt Culi của 4 loại cà phê Arabica, Robusta, Catimor và Excelsa.",
        "characteristic": "Nước pha màu nâu cánh gián đậm - Mùi thơm bền - Vị rất đặc biệt, thể chất đậm - Hàm lượng Caffeine: khoảng 2.4% - Ngon hơn khi dùng chung với sữa và đá.",
        "width": "Bịch 340gr",
        src: require("@/assets/products/img8.png"),
      },
      {
        "id": 9,
        "name": "Cà phê hòa tan Trung Nguyên Legend – Americano",
        "price": 44000,
        "description": "Tuyệt phẩm Trung Nguyên Legend Americano là phiên bản cà phê đen hòa tan rang xay độc đáo với hương thơm dịu nhẹ, hậu vị ngọt đầy quyến rũ đem đến cho bạn nguồn năng lượng mạnh mẽ, tinh thần phóng khoáng và đầy cảm hứng để tiếp tục chinh phục những thành công mới.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Cà phê Robusta, Arabica.",
        "characteristic": "Không quá nhiều vị đắng như cà phê thông thường, hậu vị ngọt, hương thơm dịu nhẹ.",
        "width": "02g/ gói x 15 gói/ hộp",
        src: require("@/assets/products/img9.png"),
      },
      {
        "id": 10,
        "name": "Cà phê phin giấy Trung Nguyên Legend – Fusion Blend",
        "price": 124000,
        "description": "Tuyệt phẩm Cà Phê Phin giấy Trung Nguyên Legend Fushion Blend là sự kết hợp độc đáo giữa hương vị cà phê thanh thoát nhẹ nhàng và hương thơm trái cây tinh tế mang đến trải nghiệm vị giác khác biệt không thể quên.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Cà phê Arabica",
        "characteristic": "Hương thơm nồng mùi trái cây tươi xen lẫn một ít mùi vỏ chanh, chua ngọt mạnh và thanh, hậu thanh thoát nhẹ nhàng.",
        "width": "10g/túi x 10 túi/hộp",
        src: require("@/assets/products/img10.png"),
      },
      {
        "id": 11,
        "name": "Cà phê phin giấy Trung Nguyên Legend – Americano",
        "price": 124000,
        "description": "Tuyệt phẩm Cà Phê Phin giấy Trung Nguyên Legend Americano với hương thơm dịu, vị mạnh mẽ của loại cà phê mang âm hưởng và khí chất của những chàng Cowboy vừa thanh thoát vừa lãng mạn làm say lòng biết bao người thưởng thức.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Cà phê Arabica, Robusta",
        "characteristic": "Hương thơm diu mạnh, xen lẫn một ít vị trà xanh, vị chua ngọt dịu, hậu vị thanh thoát.",
        "width": "10g/túi x 10 túi/hộp",
        src: require("@/assets/products/img11.png"),
      },
      {
        "id": 12,
        "name": "Cà phê phin giấy Trung Nguyên Legend – Vietnamese Blend",
        "price": 124000,
        "description": "Tuyệt phẩm Cà Phê Phin giấy Trung Nguyên Legend Vietnamese Blend với phong vị đậm đà, hương thơm đặc trưng của cà phê Việt Nam truyền thống sẽ mang đến bạn sự tỉnh thức mạnh mẽ cho những ý tưởng sáng tạo đột phá.",
        "stock": 100,
        "producthouse": "Trung Nguyên",
        "ingredient": "Cà phê Arabica, Robusta , hương cà phê, hương chocolate",
        "characteristic": "Hương thơm mang phong vị truyền thống của cà phê Việt Nam, chua ngọt cân bằng, hậu vị êm dịu.",
        "width": "10g/túi x 10 túi/hộp",
        src: require("@/assets/products/img11.png"),
      },
    ],
    "user": [
      {
        "id": 1,
        "phone": "0989327520",
        "email": "user@gmail.com",
        "password": "123456789"
      }
    ],
    "admin": [
      {
        "id": 1,
        "phone": "0989327520",
        "email": "admin@gmail.com",
        "password": "123456789"
      }
    ],
    isLoggedIn: false,
    cart: [],
    cartData: [],
    product: {},
    
  },
  getters: {
    cartItemCount: state => state.cart.reduce((total, item) => total + item.quantity, 0),
    getCartData: state => state.cartData,
    filteredProducts(state) {
      if (state.searchKeyword) {
        return state.products.filter(product => product.name.toLowerCase().includes(state.searchKeyword.toLowerCase()));
      } else {
        return [];
      }
    },
    
  },
  mutations: {
    //Thêm vào giỏ hàng
    ADD_TO_CART(state, { product, quantity }) {
      const existingProduct = state.cart.find(item => item.product.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({ product, quantity });
      }
    },
    removeProductFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.product.id !== productId);
    },
    SAVE_CART_DATA(state, data) {
      state.cartData = data;
    },
    //Đăng nhập
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setLoggedIn(state, value) {
      state.isLoggedIn = value;
    },
    //Tìm Kiếm
    setSearchKeyword(state, keyword) {
      state.searchKeyword = keyword;
    },
    clearSearchKeyword(state) {
      state.searchKeyword = '';
    },
  },
  actions: {
    addToCart({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
      this.$router.push('/cart');
    },
    saveCartData({ commit }, data) {
      commit('SAVE_CART_DATA', data);
    },
    login({ commit, state }, { email, password }) {
      const isValidUser = state.user.some(
        user => user.email === email && user.password === password
      );
      const isValidAdmin = state.admin.some(
        admin => admin.email === email && admin.password === password
      );
      if (isValidUser) {
        commit('setIsLoggedIn', true);
        router.push('/');
      } else if (isValidAdmin) {
        commit('setIsLoggedIn', true);
        router.push('/admin');
      }
    },
    handleLogout({ commit }) {
      commit('setLoggedIn', false);
    },
    addToCartAction({ commit }, { product, quantity }) {
      commit('ADD_TO_CART', { product, quantity });
    },
    logout({ commit }) {
      commit('SET_LOGGED_IN', false);
    }
  }
});
