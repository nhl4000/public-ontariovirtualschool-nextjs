!(function (e) {
  var n;
  if (
    ("function" == typeof define && define.amd && (define(e), (n = !0)),
    "object" == typeof exports && ((module.exports = e()), (n = !0)),
    !n)
  ) {
    var t = window.Cookies,
      o = (window.Cookies = e());
    o.noConflict = function () {
      return (window.Cookies = t), o;
    };
  }
})(function () {
  function e() {
    for (var e = 0, n = {}; e < arguments.length; e++) {
      var t = arguments[e];
      for (var o in t) n[o] = t[o];
    }
    return n;
  }
  function n(e) {
    return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  return (function t(o) {
    function r() {}
    function i(n, t, i) {
      if ("undefined" != typeof document) {
        "number" == typeof (i = e({ path: "/" }, r.defaults, i)).expires &&
          (i.expires = new Date(1 * new Date() + 864e5 * i.expires)),
          (i.expires = i.expires ? i.expires.toUTCString() : "");
        try {
          var c = JSON.stringify(t);
          /^[\{\[]/.test(c) && (t = c);
        } catch (e) {}
        (t = o.write
          ? o.write(t, n)
          : encodeURIComponent(String(t)).replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
          (n = encodeURIComponent(String(n))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var f = "";
        for (var u in i) i[u] && ((f += "; " + u), !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
        return (document.cookie = n + "=" + t + f);
      }
    }
    function c(e, t) {
      if ("undefined" != typeof document) {
        for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
          var f = i[c].split("="),
            u = f.slice(1).join("=");
          t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
          try {
            var a = n(f[0]);
            if (((u = (o.read || o)(u, a) || n(u)), t))
              try {
                u = JSON.parse(u);
              } catch (e) {}
            if (((r[a] = u), e === a)) break;
          } catch (e) {}
        }
        return e ? r[e] : r;
      }
    }
    return (
      (r.set = i),
      (r.get = function (e) {
        return c(e, !1);
      }),
      (r.getJSON = function (e) {
        return c(e, !0);
      }),
      (r.remove = function (n, t) {
        i(n, "", e(t, { expires: -1 }));
      }),
      (r.defaults = {}),
      (r.withConverter = t),
      r
    );
  })(function () {});
});

function updateCartIcon() {
  let cart_counts = document.getElementsByClassName("badge-count");
  if (location.href.indexOf("transaction-results") > 0) {
    Cookies.set("ovs_customer_cookie", "");
    Cookies.set("ovs_customer_coupon_cookie", "");
    return;
  }
  ovs_customer_cookie = Cookies.get("ovs_customer_cookie");
  if (ovs_customer_cookie) {
    for (let i = 0; i < cart_counts.length; ++i) {
      cart_counts[i].setAttribute("data-count", ovs_customer_cookie.split(",").filter(Boolean).length);
    }
  }
}

window.addEventListener("load", function () {
  updateCartIcon();

  let desktop_menu = document.getElementById("menu");
  if (desktop_menu) {
    let desktop_menu_items = desktop_menu.querySelectorAll("ul.nav-main-menu li.mega-menu > a");
    let desktop_menu_wrapper = document.getElementById("menu-wrapper");
    window.addEventListener("click", function (e) {
      //alert('asd');

      if (!desktop_menu.contains(e.target)) {
        let elems = document.querySelectorAll(".active-menu");
        [].forEach.call(elems, function (el) {
          el.classList.remove("active-menu");
        });
        desktop_menu_wrapper.classList.remove("active-menu");
      }
    });

    if (desktop_menu_items) {
      for (let i = 0; i < desktop_menu_items.length; i++) {
        desktop_menu_items[i].addEventListener("click", function (event) {
          event.preventDefault();

          let submenu = this.nextElementSibling;
          let submenu_ul = submenu.firstChild;

          if (this.classList.contains("active-menu")) {
            this.classList.remove("switching-between-tabs", "active-menu");
            submenu.classList.remove("switching-between-tabs", "active-menu");
            submenu_ul.classList.remove("switching-between-tabs", "active-menu");

            let elems = document.querySelectorAll(".switching-between-tabs");
            [].forEach.call(elems, function (el) {
              el.classList.remove("switching-between-tabs", "active-menu");
            });

            desktop_menu_wrapper.classList.add("menu-closed");
            desktop_menu_wrapper.classList.remove("menu-open");
          } else {
            if (desktop_menu_wrapper.classList.contains("menu-open")) {
              let elems = document.querySelectorAll(".active-menu");
              [].forEach.call(elems, function (el) {
                el.classList.add("switching-between-tabs");
                el.classList.remove("active-menu");
              });
              submenu.classList.add("switching-between-tabs");
              submenu_ul.classList.add("switching-between-tabs");
            }
            this.classList.add("active-menu");
            submenu.classList.add("active-menu");
            submenu_ul.classList.add("active-menu");
            desktop_menu_wrapper.classList.remove("menu-closed");
            desktop_menu_wrapper.classList.add("menu-open");
          }
        });
      }
    }
  }

  function remove_class(class_name) {
    console.log("remove class" + class_name);
    let elems_switching = document.querySelectorAll("." + class_name);
    [].forEach.call(elems_switching, function (el) {
      el.classList.remove(class_name);
    });
  }

  // let overlay = document.getElementById("mobile-menu-wrapper");
  let overlay = document.getElementById("menu");
  let menu = document.getElementById("ham-icon");

  //mobile menu show hide logic

  let mobile_menu_button = document.getElementById("mobile-menu-button");
  if (mobile_menu_button) {
    mobile_menu_button.addEventListener("click", openNav);
  }

  function openNav() {
    //overlay.classList.toggle('open');
    if (desktop_menu.classList.contains("open")) {
      desktop_menu.classList.remove("open");
      menu.classList.remove("open");
      document.body.classList.remove("lock-scroll");
    } else {
      desktop_menu.classList.add("open");
      menu.classList.add("open");
      document.body.classList.add("lock-scroll");
    }

    /* let elems = document.querySelectorAll(".active");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active-menu");
        });*/

    return false;
  }

  /* if (overlay) {
        let menu_items = overlay.querySelectorAll("ul.nav-main-menu li.menu-item-has-children a");
        if (menu_items) {
            for (let i = 0; i < menu_items.length; i++) {
                menu_items[i].addEventListener("click", function (event) {
                    this.classList.toggle('open');
                    let submenu = this.nextElementSibling;
                    submenu.classList.toggle('open');
                    event.preventDefault();
                });
            }
        }
    }*/

  //on screen size changes hide mobile menu if open
  window.addEventListener("resize", menu_resize);
  function menu_resize() {
    if (overlay?.classList.contains("open")) {
      /*  overlay.classList.remove('open');
            menu.classList.remove('open');
            document.body.classList.remove('lock-scroll');*/
    }
  }

  // Back to top
  if ("IntersectionObserver" in window) {
    let back_to_top = document.getElementById("top-button");
    let callback_back_to_top = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          back_to_top.classList.remove("active");
        } else {
          back_to_top.classList.add("active");
        }
      });
    };
    let back_to_top_observer = new IntersectionObserver(callback_back_to_top, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });
    let back_to_top_div_check = document.getElementById("header");
    if (back_to_top_div_check) {
      back_to_top_observer.observe(back_to_top_div_check);
    }
  } else {
    // back to top show hide logic
    let back_to_top_scrolling = false;
    window.addEventListener("scroll", function () {
      back_to_top_scrolling = true;
      //console.log(back_to_top_scrolling);
      let e = document.documentElement.scrollTop;
      let back_to_top = document.getElementById("top-button");
      if (e < 1000) {
        back_to_top.classList.remove("active");
      } else {
        back_to_top.classList.add("active");
      }

      setInterval(function () {
        if (back_to_top_scrolling) {
          // console.log('hit');
          back_to_top_scrolling = false;
        }
      }, 2150);
    });
  }
  document.body.classList.remove("preload");
});

/* TODO: move to only FAQ and Course page */
/*accordion function for FAQ and Courses page*/
function ovs_accordion(element_class) {
  const accordion_items = document.querySelectorAll("." + element_class);
  for (let i = 0; i < accordion_items.length; i++) {
    accordion_items[i].addEventListener("click", function (event) {
      this.classList.toggle("open");
      let x = this.getAttribute("aria-expanded");
      if (x === "true") {
        x = "false";
      } else {
        x = "true";
      }
      this.setAttribute("aria-expanded", x);

      let accordion_body = this.nextElementSibling;
      accordion_body.classList.toggle("open");
      event.preventDefault();
    });
  }
}
