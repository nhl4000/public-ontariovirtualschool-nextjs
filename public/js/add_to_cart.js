!(function (t, o) {
  "function" == typeof define && define.amd
    ? define(o)
    : "object" == typeof exports
    ? (module.exports = o())
    : (t.tingle = o());
})(this, function () {
  var t = !1;
  function o(t) {
    (this.opts = (function () {
      for (var t = 1; t < arguments.length; t++)
        for (var o in arguments[t]) arguments[t].hasOwnProperty(o) && (arguments[0][o] = arguments[t][o]);
      return arguments[0];
    })(
      {},
      {
        onClose: null,
        onOpen: null,
        beforeOpen: null,
        beforeClose: null,
        stickyFooter: !1,
        footer: !1,
        cssClass: [],
        closeLabel: "Close",
        closeMethods: ["overlay", "button", "escape"],
      },
      t
    )),
      this.init();
  }
  function e() {
    this.modalBoxFooter &&
      ((this.modalBoxFooter.style.width = this.modalBox.clientWidth + "px"),
      (this.modalBoxFooter.style.left = this.modalBox.offsetLeft + "px"));
  }
  function s(t) {
    -1 !== this.opts.closeMethods.indexOf("escape") && 27 === t.which && this.isOpen() && this.close();
  }
  function i(t) {
    -1 !== this.opts.closeMethods.indexOf("overlay") &&
      !(function (t, o) {
        for (; (t = t.parentElement) && !t.classList.contains(o); );
        return t;
      })(t.target, "tingle-modal") &&
      t.clientX < this.modal.clientWidth &&
      this.close();
  }
  return (
    (o.prototype.init = function () {
      if (!this.modal)
        return (
          function () {
            (this.modal = document.createElement("div")),
              this.modal.classList.add("tingle-modal"),
              (0 === this.opts.closeMethods.length || -1 === this.opts.closeMethods.indexOf("overlay")) &&
                this.modal.classList.add("tingle-modal--noOverlayClose");
            (this.modal.style.display = "none"),
              this.opts.cssClass.forEach(function (t) {
                "string" == typeof t && this.modal.classList.add(t);
              }, this),
              -1 !== this.opts.closeMethods.indexOf("button") &&
                ((this.modalCloseBtn = document.createElement("button")),
                (this.modalCloseBtn.type = "button"),
                this.modalCloseBtn.classList.add("tingle-modal__close"),
                (this.modalCloseBtnIcon = document.createElement("span")),
                this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),
                (this.modalCloseBtnIcon.innerHTML =
                  '<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.3 9.7c.2.2.4.3.7.3.3 0 .5-.1.7-.3L5 6.4l3.3 3.3c.2.2.5.3.7.3.2 0 .5-.1.7-.3.4-.4.4-1 0-1.4L6.4 5l3.3-3.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L5 3.6 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L3.6 5 .3 8.3c-.4.4-.4 1 0 1.4z" fill="#000" fill-rule="nonzero"/></svg>'),
                (this.modalCloseBtnLabel = document.createElement("span")),
                this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),
                (this.modalCloseBtnLabel.innerHTML = this.opts.closeLabel),
                this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),
                this.modalCloseBtn.appendChild(this.modalCloseBtnLabel));
            (this.modalBox = document.createElement("div")),
              this.modalBox.classList.add("tingle-modal-box"),
              (this.modalBoxContent = document.createElement("div")),
              this.modalBoxContent.classList.add("tingle-modal-box__content"),
              this.modalBox.appendChild(this.modalBoxContent),
              -1 !== this.opts.closeMethods.indexOf("button") && this.modal.appendChild(this.modalCloseBtn);
            this.modal.appendChild(this.modalBox);
          }.call(this),
          function () {
            (this._events = {
              clickCloseBtn: this.close.bind(this),
              clickOverlay: i.bind(this),
              resize: this.checkOverflow.bind(this),
              keyboardNav: s.bind(this),
            }),
              -1 !== this.opts.closeMethods.indexOf("button") &&
                this.modalCloseBtn.addEventListener("click", this._events.clickCloseBtn);
            this.modal.addEventListener("mousedown", this._events.clickOverlay),
              window.addEventListener("resize", this._events.resize),
              document.addEventListener("keydown", this._events.keyboardNav);
          }.call(this),
          document.body.insertBefore(this.modal, document.body.firstChild),
          this.opts.footer && this.addFooter(),
          this
        );
    }),
    (o.prototype._busy = function (o) {
      t = o;
    }),
    (o.prototype._isBusy = function () {
      return t;
    }),
    (o.prototype.destroy = function () {
      null !== this.modal &&
        (this.isOpen() && this.close(!0),
        function () {
          -1 !== this.opts.closeMethods.indexOf("button") &&
            this.modalCloseBtn.removeEventListener("click", this._events.clickCloseBtn);
          this.modal.removeEventListener("mousedown", this._events.clickOverlay),
            window.removeEventListener("resize", this._events.resize),
            document.removeEventListener("keydown", this._events.keyboardNav);
        }.call(this),
        this.modal.parentNode.removeChild(this.modal),
        (this.modal = null));
    }),
    (o.prototype.isOpen = function () {
      return !!this.modal.classList.contains("tingle-modal--visible");
    }),
    (o.prototype.open = function () {
      if (!this._isBusy()) {
        this._busy(!0);
        return (
          "function" == typeof this.opts.beforeOpen && this.opts.beforeOpen(),
          this.modal.style.removeProperty
            ? this.modal.style.removeProperty("display")
            : this.modal.style.removeAttribute("display"),
          (this._scrollPosition = window.pageYOffset),
          document.body.classList.add("tingle-enabled"),
          (document.body.style.top = -this._scrollPosition + "px"),
          this.setStickyFooter(this.opts.stickyFooter),
          this.modal.classList.add("tingle-modal--visible"),
          "function" == typeof this.opts.onOpen && this.opts.onOpen.call(this),
          this._busy(!1),
          this.checkOverflow(),
          this
        );
      }
    }),
    (o.prototype.close = function (t) {
      if (!this._isBusy()) {
        if ((this._busy(!0), (t = t || !1), "function" == typeof this.opts.beforeClose))
          if (!this.opts.beforeClose.call(this)) return void this._busy(!1);
        document.body.classList.remove("tingle-enabled"),
          window.scrollTo({ top: this._scrollPosition, behavior: "instant" }),
          (document.body.style.top = null),
          this.modal.classList.remove("tingle-modal--visible");
        (this.modal.style.display = "none"),
          "function" == typeof this.opts.onClose && this.opts.onClose.call(this),
          this._busy(!1);
      }
    }),
    (o.prototype.setContent = function (t) {
      return (
        "string" == typeof t
          ? (this.modalBoxContent.innerHTML = t)
          : ((this.modalBoxContent.innerHTML = ""), this.modalBoxContent.appendChild(t)),
        this.isOpen() && this.checkOverflow(),
        this
      );
    }),
    (o.prototype.getContent = function () {
      return this.modalBoxContent;
    }),
    (o.prototype.addFooter = function () {
      return (
        function () {
          (this.modalBoxFooter = document.createElement("div")),
            this.modalBoxFooter.classList.add("tingle-modal-box__footer"),
            this.modalBox.appendChild(this.modalBoxFooter);
        }.call(this),
        this
      );
    }),
    (o.prototype.setFooterContent = function (t) {
      return (this.modalBoxFooter.innerHTML = t), this;
    }),
    (o.prototype.getFooterContent = function () {
      return this.modalBoxFooter;
    }),
    (o.prototype.setStickyFooter = function (t) {
      return (
        this.isOverflow() || (t = !1),
        t
          ? this.modalBox.contains(this.modalBoxFooter) &&
            (this.modalBox.removeChild(this.modalBoxFooter),
            this.modal.appendChild(this.modalBoxFooter),
            this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),
            e.call(this),
            (this.modalBoxContent.style["padding-bottom"] = this.modalBoxFooter.clientHeight + 20 + "px"))
          : this.modalBoxFooter &&
            (this.modalBox.contains(this.modalBoxFooter) ||
              (this.modal.removeChild(this.modalBoxFooter),
              this.modalBox.appendChild(this.modalBoxFooter),
              (this.modalBoxFooter.style.width = "auto"),
              (this.modalBoxFooter.style.left = ""),
              (this.modalBoxContent.style["padding-bottom"] = ""),
              this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),
        this
      );
    }),
    (o.prototype.addFooterBtn = function (t, o, e) {
      var s = document.createElement("button");
      return (
        (s.innerHTML = t),
        s.addEventListener("click", e),
        "string" == typeof o &&
          o.length &&
          o.split(" ").forEach(function (t) {
            s.classList.add(t);
          }),
        this.modalBoxFooter.appendChild(s),
        s
      );
    }),
    (o.prototype.resize = function () {
      console.warn("Resize is deprecated and will be removed in version 1.0");
    }),
    (o.prototype.isOverflow = function () {
      var t = window.innerHeight;
      return this.modalBox.clientHeight >= t;
    }),
    (o.prototype.checkOverflow = function () {
      this.modal.classList.contains("tingle-modal--visible") &&
        (this.isOverflow()
          ? this.modal.classList.add("tingle-modal--overflow")
          : this.modal.classList.remove("tingle-modal--overflow"),
        !this.isOverflow() && this.opts.stickyFooter
          ? this.setStickyFooter(!1)
          : this.isOverflow() && this.opts.stickyFooter && (e.call(this), this.setStickyFooter(!0)));
    }),
    { modal: o }
  );
});

let ovs_customer_cookie = null;
let modal;
// var courses_catalog = {
//   url: "https://www.ontariovirtualschool.ca/wp-content/cache/1/courses/build_courses_catalog.json",
// };
// let course_catalog = -1;
let footer_buttons = false;

function currencyFormat(num) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function resetModal() {
  modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ["overlay", "escape"],
    cssClass: ["custom-class-1", "custom-class-2"],
    onOpen: function () {},
    onClose: function () {
      this.setContent("");
    },
    beforeClose: function () {
      return true;
    },
  });
}

function loadFooterButtons() {
  modal.addFooterBtn("Continue", "btn btn-white btn-border-red", function () {
    modal.close();
  });

  modal.addFooterBtn("Checkout", "btn btn-red tingle-btn--pull-right", function () {
    location.href = "/register-online/checkout/";
  });
}

// Ajax Course Removal from shopping cart
function removeCourse(el, checkout = false) {
  if (ovs_customer_cookie) {
    let products;
    products = ovs_customer_cookie.split(",");
    products = products.filter(function (e) {
      return e !== el.getAttribute("data-product-id");
    });
    products = products.filter((elem, pos, array) => {
      return array.indexOf(elem) == pos;
    });
    Cookies.set("ovs_customer_cookie", products.join(","));
    ovs_customer_cookie = Cookies.get("ovs_customer_cookie");
    if (!checkout) {
      [course_id] = el.getAttribute("data-product-id").split("-");
      updateShoppingCart(course_catalog[course_id].course_code + " removed from cart.");
    }
  }
}

function updateShoppingCart(prepend = "") {
  let html_cart =
    '<div class="shoppingcart"><div class="notice-warning">Your shopping cart is empty, please view our courses.</div></div>';
  let freeCourseCount = 0;
  if (ovs_customer_cookie) {
    html_cart = "";
    products = ovs_customer_cookie.split(",");
    products = products.filter(Boolean);
    if (products.length > 0) {
      html_cart += '<div class="shoppingcart">';
      html_cart += '<div class="notice-success">' + prepend + "</div>";
      html_cart += "<h4>Pending Courses</h4>";
      let sum_total = 0.0;
      for (let i = 0; i < products.length; ++i) {
        let org_product = products[i];
        let product_id = products[i];
        let options = false;
        if (isNaN(products[i])) {
          // contains -T or -U for text book or both
          [product_id, ...options] = products[i].split("-");
        }

        if (!course_catalog[product_id]) continue;
        let title = course_catalog[product_id].title;
        let url = course_catalog[product_id].url;
        let course_code = course_catalog[product_id].course_code;
        let price = parseFloat(course_catalog[product_id].price);
        if (options) {
          if (options.indexOf("T") !== -1) {
            price += 100.0;
            title += " (Textbook)";
          }
        }
        sum_total += price;
        if (price == 0) {
          freeCourseCount++;
        }
        html_cart +=
          '<div class="product-wrapper"><div class="product_name"><a href="' +
          url +
          '">' +
          course_code +
          ", " +
          title +
          "</a></div>";
        html_cart += '<div class="product_info">(<span class="pricedisplay">&#036;' + price + "</span>)";
        html_cart +=
          ' <span onclick="removeCourse(this);" style="cursor:pointer;" data-product-id="' +
          org_product +
          '"><i class="icon-trashcan"></i></span></div></div>';
      }
      html_cart +=
        '<div class="cart-widget-total"><div class="pricedisplay checkout-total">Total: <span class="pricedisplay">' +
        currencyFormat(sum_total) +
        "</span> (" +
        products.length;
      if (products.length > 1) {
        html_cart += " courses";
      } else {
        html_cart += " course";
      }
      html_cart += ")</div>";

      html_cart += "<div>";
      if (products.length - freeCourseCount == 1) {
        html_cart += "Add another course and you will be eligible for $100 off your total fee.";
      } else if (products.length - freeCourseCount > 1) {
        html_cart += "You qualify for $100 off, use coupon code OVS-100 upon checkout.";
      }
      html_cart += "</div></div>";
    }
  }
  modal.setContent(html_cart);
  modal.open();
  updateCartIcon();
}

function startModal() {
  //modal.setContent("<p>Adding to Cart, please wait...");
  if (typeof modal === "undefined") {
    resetModal();
  } else {
    modal.setContent("");
  }
  modal.open();
}

function addToCart(f, t = 0, u = 0) {
  startModal();
  //return false;
  console.log(f);
  let product_id = f.trim();
  //if (f instanceof HTMLElement) { // why do I do this? <- causes reflow problems
  //	product_id = f.getElementsByClassName("course_product_id")[0].value;
  //}

  if (course_catalog != -1) {
    if (!course_catalog[product_id]) {
      modal.setContent(
        "<div class='shoppingcart'><div class='notice-error'>Course does not exist - please add a valid course.</div></div>"
      );
    } else {
      if (ovs_customer_cookie) {
        products = ovs_customer_cookie.split(",");
      } else {
        products = [];
      }
      // OVS10 duplicate check
      if (product_id == 23058) {
        if (products.indexOf("22928") != -1) {
          product_id = 22928;
        }
      } else if (product_id == 22928) {
        if (products.indexOf("23058") != -1) {
          product_id = 23058;
        }
      }
      products = products.filter((elem, pos, array) => {
        let len = elem.indexOf("-");
        if (len == -1) {
          len = elem.length;
        }
        if (elem.substring(0, len).trim() == product_id) {
          return false;
        } else {
          return true;
        }
      });
      if (t == 1 && u == 1) {
        products.push(product_id + "-T-U");
      } else if (u == 1) {
        products.push(product_id + "-U");
      } else if (t == 1) {
        products.push(product_id + "-T");
      } else {
        products.push(product_id);
      }

      products = products.filter((elem, pos, array) => {
        //console.log(elem.substring(1, elem.indexOf("-")));
        return array.indexOf(elem) == pos;
      });
      ovs_customer_cookie = products.join(",");
      Cookies.set("ovs_customer_cookie", ovs_customer_cookie);
      updateShoppingCart(course_catalog[product_id].course_code + " added to cart.");
      if (!footer_buttons) {
        loadFooterButtons();
        footer_buttons = true;
      }
    }
  } else {
    modal.setContent("<p style='text-align: center'>Adding to Cart, please wait...</p><div id='loader'>&nbsp;</div>");
    loadCourseCatalog(product_id, t, u);
  }
  return false;
}

function loadCourseCatalog(product_id, t = "", u = "") {
  var request = new XMLHttpRequest();
  request.open("GET", courses_catalog.url, true);
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      course_catalog = JSON.parse(this.response);
      addToCart(product_id, t, u);
    } else {
      alert("Error receiving course catalog.");
    }
  };

  request.onerror = function () {
    course_catalog = -1;
  };

  request.send();
  return false;
}

function atc_button(e) {
  if (!e.hasAttribute("data-id")) {
    e = e.parentNode;
  }
  if (e.hasAttribute("data-id")) {
    addToCart(e.getAttribute("data-id"), e.getAttribute("data-textbook"), e.getAttribute("data-is-upgrade"));
  }
  return false;
}

function textbook_select(e) {
  //e.preventDefault();
  let atc_id = e.getAttribute("data-atc-id");
  let atc_button_id = "course-atc-" + atc_id;

  if (e.checked) {
    document.getElementById(atc_button_id).setAttribute("data-textbook", "1");
  } else {
    document.getElementById(atc_button_id).setAttribute("data-textbook", "0");
  }
  return false;
}
