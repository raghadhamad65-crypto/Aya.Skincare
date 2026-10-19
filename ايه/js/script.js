/* =========================================================
   1) بيانات المنتجات
   ---------------------------------------------------------
   هذا الجزء هو المكان الذي سنضع فيه منتجات Aya.Skincare.

   كل منتج يحتوي على:
   - id       = رقم المنتج
   - name     = اسم المنتج
   - desc     = وصف قصير
   - price    = السعر
   - image    = صورة المنتج
   - stock    = الكمية المتوفرة

   نوع الكود: JavaScript
   يمكن تعديل: أسماء المنتجات والأسعار والصور والوصف
   ========================================================= */

const PRODUCTS = [
    {
        id: 1,
        name: "  زبدة الجسم العلاجية",
        desc: "تقلل فقدان الرطوبة وتحافظ على ترطيب الجلد لفترة أطول",
        price: 30,
        image: "images/product-1.png",
        stock: 10
    },

    {
        id: 2,
        name: "الدلكة السودانية الأصلية",
        desc: "تقشير البشرة وإزالة خلايا الجلد الميتة",
        price: 35,
        image: "images/product-2.png",
        stock: 10
    },

    {
        id: 3,
        name: "بلسم وحمام زيت",
        desc: "يساعد على جعل الشعر أكثر نعومة ولمعانًا",
        price: 40,
        image: "images/product-3.png",
        stock: 10
    }
    ,

    {
        id: 4,
        name: "شامبو",
        desc: "غني بالفيتامينات وخالي من الأملاح",
        price: 35,
        image: "images/product-4.png",
        stock: 10
    },

    {
        id: 5,
        name: "سيروم لبان الذكر",
        desc: "ترطيب عميق وتجديد الخلايا",
        price: 40,
        image: "images/product-5.png",
        stock: 10
    }
     
     
];


/* =========================================================
   2) بيانات الباكيجات
   ---------------------------------------------------------
   هنا سنضع باكيجات Aya.Skincare.

   لاحقاً يمكن أن يكون الباكيج:
   - يحتوي أكثر من منتج
   - له سعر خاص
   - سعر قديم
   - نسبة خصم

   حالياً نضع بيانات تجريبية حتى نبني التصميم.

   نوع الكود: JavaScript
   يمكن تعديل: اسم الباكيج والسعر والصورة والوصف
   ========================================================= */

const PACKAGES = [
    {
        id: 1,
        name: "Aya Skincare Package",
        desc: "روتين متكامل للعناية بالبشرة",
        price: 100,
        oldPrice: 120,
        image: "images/package-1.png"
    },

    {
        id: 2,
        name: "Glow Package",
        desc: "مجموعة مختارة لإطلالة مشرقة",
        price: 85,
        oldPrice: 100,
        image: "images/package-2.png"
    }
];


/* =========================================================
   3) تحديد أماكن المنتجات والباكيجات في HTML
   ---------------------------------------------------------
   هنا نخبر JavaScript أين سيضع الكروت.

   productsGrid = مكان المنتجات
   packagesGrid = مكان الباكيجات

   نوع الكود: JavaScript
   لا نحتاج لتعديل هذا الجزء.
   ========================================================= */

const productsGrid = document.getElementById("productsGrid");
const packagesGrid = document.getElementById("packagesGrid");


/* =========================================================
   4) عرض المنتجات
   ---------------------------------------------------------
   هذه الدالة تأخذ المنتجات الموجودة في PRODUCTS
   وتحولها إلى كروت HTML تلقائياً.

   بدل ما نكتب كل منتج داخل HTML يدوياً،
   JavaScript ينشئهم لنا.

   نوع الكود: JavaScript
   يمكن تعديل: شكل الكرت من خلال HTML الموجود هنا
   ========================================================= */
// =========================================================
// PRODUCTS CARDS
// JS: إنشاء كرت كل منتج
// أضفنا منطقة خاصة للصورة حتى نقدر نحط خلف المنتج
// عناصر طبيعية متحركة بألوان البيج والبينك والروز سيلفر.
// =========================================================

function renderProducts() {

    productsGrid.innerHTML = "";

    PRODUCTS.forEach(product => {

        const productCard = document.createElement("article");

        productCard.className = "product-card";

        productCard.innerHTML = `

            <!-- منطقة الصورة والخلفية المتحركة -->
            <div class="product-card__visual">

                <!-- لمعة ناعمة خلف المنتج -->
                <span class="card-glow"></span>

                <!-- عناصر نباتية خلف المنتج -->
                <span class="card-leaf card-leaf--1"></span>
                <span class="card-leaf card-leaf--2"></span>

                <!-- بتلات صغيرة متحركة -->
                <span class="card-petal card-petal--1"></span>
                <span class="card-petal card-petal--2"></span>
                <span class="card-petal card-petal--3"></span>

                <!-- صورة المنتج -->
                <div class="product-card__image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                </div>

            </div>


            <!-- معلومات المنتج -->
            <div class="product-card__content">

                <h3>${product.name}</h3>

                <p>${product.desc}</p>

                <div class="product-card__bottom">

                    <span class="product-card__price">
                        ${product.price} ₪
                    </span>

                    <button
                        class="product-card__button"
                        onclick="addToCart(${product.id})"
                    >
                        أضيفي للسلة
                    </button>

                </div>

            </div>
        `;

        productsGrid.appendChild(productCard);
    });
}


/* =========================================================
   5) عرض الباكيجات
   ---------------------------------------------------------
   نفس فكرة المنتجات، لكن للباكيجات.

   نوع الكود: JavaScript
   يمكن تعديل: شكل بطاقة الباكيج من هنا
   ========================================================= */

function renderPackages() {

    packagesGrid.innerHTML = "";

    PACKAGES.forEach(pkg => {

        const packageCard = document.createElement("article");

        packageCard.className = "package-card";

        packageCard.innerHTML = `
            <div class="package-card__image">

                <img
                    src="${pkg.image}"
                    alt="${pkg.name}"
                >

                <span class="package-card__badge">
                    عرض خاص
                </span>

            </div>

            <div class="package-card__content">

                <h3>${pkg.name}</h3>

                <p>${pkg.desc}</p>

                <div class="package-card__prices">

                    <span class="package-card__price">
                        ${pkg.price} ₪
                    </span>

                    <span class="package-card__old-price">
                        ${pkg.oldPrice} ₪
                    </span>

                </div>

                <button
                    class="package-card__button"
                    onclick="addPackageToCart(${pkg.id})"
                >
                    أضيفي الباكيج للسلة
                </button>

            </div>
        `;

        packagesGrid.appendChild(packageCard);
    });
}

/* =========================================================
   🛒 قسم السلة
   هذا القسم مسؤول عن:
   - إضافة المنتجات للسلة
   - إضافة الباكيجات للسلة
   - زيادة ونقصان الكمية
   - حذف المنتجات
   - تحديث عدد المنتجات
   - حساب الإجمالي
   - فتح وإغلاق السلة
   ========================================================= */

// السلة نفسها — نخزن المنتجات التي يضيفها العميل
let cart = [];


/* =========================================================
   ➕ إضافة منتج عادي للسلة
   يتم استدعاء هذه الدالة من زر "أضيفي للسلة"
   ========================================================= */

function addToCart(productId) {

  const product = PRODUCTS.find(item => item.id === productId);

  if (!product) return;

  const existingItem = cart.find(
    item => item.id === productId && !item.isPackage
  );

  if (existingItem) {

    // إذا المنتج موجود مسبقًا، نزيد الكمية
    existingItem.quantity++;

  } else {

    // إذا المنتج غير موجود، نضيفه لأول مرة
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      isPackage: false
    });
  }

 updateCart();
showCartToast("تمت إضافة اختيارك إلى السلة ");}


/* =========================================================
   🎁 إضافة باكيج للسلة
   ========================================================= */

function addPackageToCart(packageId) {

  const pkg = PACKAGES.find(item => item.id === packageId);

  if (!pkg) return;

  const existingItem = cart.find(
    item => item.id === packageId && item.isPackage
  );

  if (existingItem) {

    existingItem.quantity++;

  } else {

    cart.push({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      image: pkg.image,
      quantity: 1,
      isPackage: true
    });
  }

  updateCart();

showCartToast("تمت إضافة الباكيج إلى السلة ");}


/* =========================================================
   🔄 تحديث السلة بالكامل
   هذه الدالة تعيد رسم محتوى السلة + العدد + السعر
   ========================================================= */

function updateCart() {

  renderCartItems();
  updateCartCount();
  updateCartTotal();
}


/* =========================================================
   🧺 عرض المنتجات الموجودة داخل السلة
   ========================================================= */

function renderCartItems() {

  const cartItems = document.getElementById("cartItems");

  if (!cartItems) return;

  // إذا السلة فارغة
  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="cart-empty">
        <p>السلة فارغة حالياً</p>
        <span>أضيفي منتجاتك المفضلة للبدء ✨</span>
      </div>
    `;

    return;
  }


  // رسم المنتجات الموجودة بالسلة
  cartItems.innerHTML = cart.map((item, index) => {

    return `
      <div class="cart-item">

        <div class="cart-item__image">
          <img src="${item.image}" alt="${item.name}">
        </div>

        <div class="cart-item__info">

          <h4>${item.name}</h4>

          <span class="cart-item__price">
            ${item.price} ₪
          </span>

          <div class="cart-item__controls">

            <button
              type="button"
              onclick="decreaseQuantity(${index})"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              type="button"
              onclick="increaseQuantity(${index})"
            >
              +
            </button>

          </div>

        </div>

        <button
          type="button"
          class="cart-item__remove"
          onclick="removeFromCart(${index})"
          aria-label="حذف المنتج"
        >
          ×
        </button>

      </div>
    `;

  }).join("");
}


/* =========================================================
   🔢 تحديث عدد المنتجات الظاهر على أيقونة السلة
   ========================================================= */

function updateCartCount() {

  const cartCount = document.querySelector(".cart-count");

  if (!cartCount) return;

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  cartCount.textContent = totalQuantity;

  // نخفي الرقم إذا السلة فارغة
  if (totalQuantity === 0) {
    cartCount.style.display = "none";
  } else {
    cartCount.style.display = "flex";
  }
}


/* =========================================================
   💰 حساب إجمالي السلة
   ========================================================= */

function updateCartTotal() {

  const cartTotal = document.getElementById("cartTotal");

  if (!cartTotal) return;

  const total = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  cartTotal.textContent = `${total} ₪`;
}


/* =========================================================
   ➕ زيادة كمية المنتج
   ========================================================= */

function increaseQuantity(index) {

  if (!cart[index]) return;

  cart[index].quantity++;

  updateCart();
}


/* =========================================================
   ➖ تقليل كمية المنتج
   إذا وصلت الكمية إلى 1 وضغطنا ناقص، نحذف المنتج
   ========================================================= */

function decreaseQuantity(index) {

  if (!cart[index]) return;

  if (cart[index].quantity > 1) {

    cart[index].quantity--;

  } else {

    cart.splice(index, 1);
  }

  updateCart();
}


/* =========================================================
   🗑️ حذف منتج من السلة
   ========================================================= */

function removeFromCart(index) {

  if (!cart[index]) return;

  cart.splice(index, 1);

  updateCart();
}


/* =========================================================
   🛒 فتح السلة الجانبية
   ========================================================= */

function openCart() {

  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");

  if (!cartDrawer || !cartOverlay) return;

  cartDrawer.classList.add("is-open");
  cartOverlay.classList.add("is-open");

  // منع الصفحة من التحرك أثناء فتح السلة
  document.body.style.overflow = "hidden";
}


/* =========================================================
   ❌ إغلاق السلة
   ========================================================= */

function closeCart() {

  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");

  if (!cartDrawer || !cartOverlay) return;

  cartDrawer.classList.remove("is-open");
  cartOverlay.classList.remove("is-open");

  document.body.style.overflow = "";
}


/* =========================================================
   🖱️ ربط زر السلة + زر الإغلاق + الخلفية
   ========================================================= */

const cartButton = document.querySelector(".cart-button");
const cartClose = document.querySelector(".cart-close");
const cartOverlay = document.getElementById("cartOverlay");

if (cartButton) {
  cartButton.addEventListener("click", openCart);
}

if (cartClose) {
  cartClose.addEventListener("click", closeCart);
}

if (cartOverlay) {
  cartOverlay.addEventListener("click", closeCart);
}


/* =========================================================
   🚀 تشغيل السلة عند فتح الموقع
   ========================================================= */
/* =========================================================
   🧾 قسم Checkout + WhatsApp
   Aya.Skincare

   هذا القسم مسؤول عن:
   - فتح نافذة إتمام الطلب
   - إغلاق نافذة إتمام الطلب
   - عرض إجمالي السلة داخل Checkout
   - قراءة بيانات العميلة
   - تجهيز تفاصيل المنتجات
   - إرسال الطلب عبر WhatsApp

   نوع الكود: JavaScript
   ========================================================= */


/* =========================================================
   📦 عناصر Checkout
   ========================================================= */

const checkoutModal = document.getElementById("checkoutModal");
const checkoutClose = document.getElementById("checkoutClose");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutTotal = document.getElementById("checkoutTotal");


/* =========================================================
   💰 حساب إجمالي الطلب
   نستخدم نفس السلة الموجودة عندنا
   ========================================================= */

function getCartTotal() {

  return cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

}


/* =========================================================
   🔄 تحديث إجمالي Checkout
   ========================================================= */

function updateCheckoutTotal() {

  if (!checkoutTotal) return;

  checkoutTotal.textContent = `${getCartTotal()} ₪`;

}


/* =========================================================
   🧾 فتح Checkout
   ========================================================= */

function openCheckout() {

  // إذا كانت السلة فارغة، لا نفتح نموذج الطلب
  if (cart.length === 0) {

    alert("السلة فارغة، أضيفي منتجًا أولًا 🤍");

    return;
  }


  // تحديث الإجمالي قبل فتح النموذج
  updateCheckoutTotal();


  // إغلاق السلة الجانبية
  closeCart();


  // فتح Checkout
  if (checkoutModal) {

    checkoutModal.classList.add("is-open");

    document.body.style.overflow = "hidden";

  }

}


/* =========================================================
   ❌ إغلاق Checkout
   ========================================================= */

function closeCheckout() {

  if (!checkoutModal) return;

  checkoutModal.classList.remove("is-open");

  document.body.style.overflow = "";

}


/* =========================================================
   🔘 زر إغلاق Checkout
   ========================================================= */

if (checkoutClose) {

  checkoutClose.addEventListener(
    "click",
    closeCheckout
  );

}


/* =========================================================
   🖱️ الضغط على الخلفية لإغلاق النافذة
   ========================================================= */

if (checkoutModal) {

  checkoutModal.addEventListener(
    "click",
    function(event) {

      // إذا ضغطت العميلة على الخلفية نفسها
      // وليس داخل صندوق Checkout
      if (event.target === checkoutModal) {

        closeCheckout();

      }

    }
  );

}


/* =========================================================
   🛒 ربط زر "إتمام الطلب" الموجود في السلة
   ========================================================= */

const checkoutButton =
  document.querySelector(".checkout-button");


if (checkoutButton) {

  checkoutButton.addEventListener(
    "click",
    openCheckout
  );

}


/* =========================================================
   📱 رقم WhatsApp الخاص بالمتجر
   مهم:
   نكتب الرقم بدون + وبدون مسافات
   ========================================================= */

const WHATSAPP_NUMBER = "970593308260";


/* =========================================================
   📝 تجهيز تفاصيل المنتجات الموجودة في السلة
   ========================================================= */

function getCartMessage() {

  if (cart.length === 0) {

    return "لا توجد منتجات في السلة.";

  }


  let message = "";


  cart.forEach((item, index) => {

    const itemTotal =
      item.price * item.quantity;


    message +=
      `${index + 1}. ${item.name}\n` +
      `الكمية: ${item.quantity}\n` +
      `السعر: ${item.price} ₪\n` +
      `الإجمالي: ${itemTotal} ₪\n\n`;

  });


  return message;

}


/* =========================================================
   📲 إرسال الطلب إلى WhatsApp
   ========================================================= */

if (checkoutForm) {

  checkoutForm.addEventListener(
    "submit",
    function(event) {

      // منع إعادة تحميل الصفحة
      event.preventDefault();


      // التأكد أن هناك منتجات
      if (cart.length === 0) {

        alert("السلة فارغة 🤍");

        closeCheckout();

        return;

      }


      /* -----------------------------------------------------
         👤 قراءة بيانات العميلة
         ----------------------------------------------------- */

      const customerName =
        document.getElementById("customerName").value.trim();


      const customerPhone =
        document.getElementById("customerPhone").value.trim();


      const customerCity =
        document.getElementById("customerCity").value.trim();


      const customerAddress =
        document.getElementById("customerAddress").value.trim();


      const customerNotes =
        document.getElementById("customerNotes").value.trim();


      /* -----------------------------------------------------
         💰 حساب الإجمالي
         ----------------------------------------------------- */

      const total = getCartTotal();


      /* -----------------------------------------------------
         🧾 إنشاء رسالة الطلب
         ----------------------------------------------------- */

      let message =
`✨ طلب جديد من Aya.Skincare ✨

👤 بيانات العميلة
الاسم: ${customerName}
رقم الهاتف: ${customerPhone}
المدينة: ${customerCity}
العنوان: ${customerAddress}

🛍️ تفاصيل الطلب

${getCartMessage()}
💰 إجمالي الطلب: ${total} ₪`;


      /* -----------------------------------------------------
         📝 إضافة الملاحظات إذا كانت موجودة
         ----------------------------------------------------- */

      if (customerNotes) {

        message +=
          `\n📝 ملاحظات:\n${customerNotes}`;

      }


      /* -----------------------------------------------------
         🔗 تحويل الرسالة إلى رابط WhatsApp
         ----------------------------------------------------- */

      const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


      /* -----------------------------------------------------
         🚀 فتح WhatsApp
         ----------------------------------------------------- */

      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );

}
/* =========================================================
   CART TOAST
   إشعار صغير يظهر بعد إضافة المنتج للسلة
   JavaScript
========================================================= */

function showCartToast(message) {

    let toast = document.getElementById("cartToast");

    /* إذا الإشعار غير موجود، ننشئه تلقائياً */
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "cartToast";
        toast.className = "cart-toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    /* إظهار الإشعار */
    toast.classList.add("is-show");

    /* إخفاؤه بعد فترة */
    clearTimeout(toast.hideTimer);

    toast.hideTimer = setTimeout(() => {
        toast.classList.remove("is-show");
    }, 2200);
}
updateCart();
renderProducts();
renderPackages();