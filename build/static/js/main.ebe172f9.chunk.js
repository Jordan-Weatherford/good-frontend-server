(this["webpackJsonpgood-frontend"]=this["webpackJsonpgood-frontend"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(31),o=c.n(r),i=c(4),j=c(15),l=c(12),u=c(3),d=c(2),b=(c(40),c(41),c(42),"https://fathomless-temple-41367.herokuapp.com/api"),h="https://good-store-resources.s3-us-west-2.amazonaws.com/resources",m=function(e){var t=Object(s.useState)([]),c=Object(u.a)(t,2),a=c[0],r=c[1];return Object(s.useEffect)((function(){r(e.cart)}),[e.cart]),Object(n.jsxs)(i.b,{to:"/cart",className:"CartSummaryContainer",children:[Object(n.jsx)("img",{src:"".concat(h,"/assets/cart-icon.jpeg"),alt:"cart icon",height:30}),a.length>0&&Object(n.jsx)("span",{className:"CartCount",children:a.length})]})},O=function(e){return Object(n.jsx)("div",{className:"navbar",children:Object(n.jsxs)("div",{className:"navbarContainer",children:[Object(n.jsx)(i.b,{to:"/",className:"TextLogo",children:"Farwest Fungi"}),Object(n.jsxs)("div",{className:"navLinks",children:[Object(n.jsx)(i.c,{to:"/shop",children:"Shop"}),Object(n.jsx)(i.c,{to:"/learn",children:"Learn"}),Object(n.jsx)(i.c,{to:"/about",children:"About"})]}),Object(n.jsx)(m,{cart:e.cart})]})})},g=(c(48),function(){return Object(n.jsx)("footer",{children:Object(n.jsx)("h3",{children:"\xa9 Farwest Fungi"})})}),x=(c(49),function(e){console.log("jumbotron rendered");var t=Object(d.f)();return Object(s.useEffect)((function(){document.getElementById("JumbotronVideo").playbackRate=.7})),Object(n.jsxs)("div",{className:"JumbotronContainer",children:[Object(n.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"JumbotronVideo",children:Object(n.jsx)("source",{src:"https://good-store-resources.s3-us-west-2.amazonaws.com/resources/assets/dope-background.mp4",type:"video/mp4"})}),Object(n.jsxs)("div",{className:"VideoOverlayContainer",children:[Object(n.jsx)("span",{className:"JumbotronMessage",children:e.message}),Object(n.jsx)("span",{onClick:function(){return t.push("/shop")},className:"ShopButton",children:"Shop"})]})]})}),f=c(10),p=c.n(f),v=(c(68),function(){console.log("testimonials component rendered");var e=Object(s.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(0),o=Object(u.a)(r,2),i=o[0],j=o[1],l=Object(s.useState)(),d=Object(u.a)(l,2),m=d[0],O=d[1],g=function(e){"up"===e?i===c.length-1?j(0):j(i+1):j(0===i?c.length-1:i-1)};return Object(s.useEffect)((function(){p.a.get("".concat(b,"/testimonials")).then((function(e){a(e.data)})).catch((function(e){return O(e.message)}))}),[]),Object(n.jsxs)("div",{className:"TestimonialsBackgroundContainer",children:[Object(n.jsx)("h1",{className:"PageTitle",children:"Testimonials"}),m&&Object(n.jsxs)("h2",{children:["Uh oh! We seemed to have a little hiccup. ",m]}),Object(n.jsxs)("div",{className:"PageContainer",children:[Object(n.jsxs)("div",{className:"TestimonialsContainer",children:[Object(n.jsx)("img",{className:"ScrollButton",src:"".concat(h,"/assets/left-arrow.png"),alt:"scroll left",onClick:function(){return g("up")}}),c[0]?Object(n.jsx)("div",{className:"TestimonialStatementContainer",children:Object(n.jsxs)("p",{className:"TestimonialStatement",children:['"',c[i].statement,'"']})}):Object(n.jsx)("p",{children:"Network Error!"}),Object(n.jsx)("img",{className:"ScrollButton",src:"".concat(h,"/assets/right-arrow.svg"),alt:"scroll right",onClick:function(){return g("down")}})]}),c[0]&&Object(n.jsxs)("p",{className:"TestimonialAuthor",children:["- ",c[i].author]})]})]})}),N=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{message:"Harness the Fungus"}),Object(n.jsx)(v,{})]})},C=(c(69),function(e){var t=Object(s.useState)(),c=Object(u.a)(t,2),a=c[0],r=c[1],o=Object(s.useState)(""),j=Object(u.a)(o,2),l=j[0],d=j[1];return Object(s.useEffect)((function(){console.log("Using Effect - Shop.js"),e.setLoading(!0),p.a.get("".concat(b,"/products")).then((function(t){r(t.data),e.setLoading(!1)})).catch((function(t){console.log(t.message),d(t.message),e.setLoading(!1)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"PageTitle",children:"Products"}),Object(n.jsxs)("div",{className:"ProductsContainer PageContainer",children:[a&&a.map((function(e){return Object(n.jsxs)(i.b,{to:"/shop/".concat(e.slug),className:"ProductThumbnail",children:[Object(n.jsx)("img",{className:"ProductImage",src:"".concat(h,"/product_images/").concat(e.slug,"/").concat(e.images[0]),alt:"product"}),Object(n.jsx)("h1",{children:e.name}),Object(n.jsxs)("p",{children:["$",e.price]}),Object(n.jsx)("p",{className:"ProductDescription",children:e.description})]},e.slug)})),l&&Object(n.jsxs)("p",{children:["Uh oh! There seems to be something wrong with our servers... ",l]})]})]})}),S=c(21),y=c.n(S),k=c(33),P=c(34),I=(c(71),Object(P.a)("pk_test_51HEhAgAX9HHAr5HrTmBPQ9cPS7oGlGOfI2cNYOADmRtCsUmmitjAdrBrsDA2Ne7l1TYzvvfUWbMAebEQmJ1vzuhh00uzyGHwpt")),T=function(e){console.log("cart rendered");var t=Object(s.useState)(""),c=Object(u.a)(t,2),a=c[0],r=c[1],o=0;e.cart.forEach((function(e){o+=e.price*e.qty})),o=o.toFixed(2);var i=function(){var t=Object(k.a)(y.a.mark((function t(){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setLoading(!0),t.next=3,I;case 3:c=t.sent,p.a.post("".concat(b,"/create-checkout-session"),{cart:e.cart}).then((function(t){t.data.success?(localStorage.setItem("Cart",JSON.stringify(e.cart)),c.redirectToCheckout({sessionId:t.data.id}).then((function(e){console.log("response from create checkout session=",e)})).catch((function(e){console.log(e),r(e.message)}))):(r(t.data.message),console.log("error creating checkout session",t.data.message)),e.setLoading(!1)})).catch((function(t){r(t.message),e.setLoading(!1),console.log(t)}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"PageContainer",children:[Object(n.jsx)("h1",{className:"PageTitle",children:"Cart"}),Object(n.jsxs)("div",{className:"CartContainer",children:[a&&Object(n.jsx)("h1",{children:a}),0===e.cart.length&&Object(n.jsx)("p",{children:"You have no items in your cart!"}),e.cart&&e.cart.map((function(t){return Object(n.jsxs)("div",{className:"CartItem",children:[Object(n.jsx)("div",{className:"CartItemImage",children:Object(n.jsx)("img",{src:"".concat(h,"/product_images/").concat(t.slug,"/1.jpeg"),alt:"item",width:"100%"})}),Object(n.jsx)("h3",{className:"CartItemName",children:t.name}),Object(n.jsxs)("div",{className:"QtyAndPriceContainer",children:[Object(n.jsxs)("p",{className:"CartItemPrice",children:["$",t.price.toFixed(2)]}),Object(n.jsxs)("div",{className:"QtyAdjustmentContainer",children:[Object(n.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return e.adjustQty(t,"down")},children:"\u21a2"}),Object(n.jsx)("p",{className:"QtyLabel",children:t.qty}),Object(n.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return e.adjustQty(t,"up")},children:"\u21a3"})]})]})]},t.slug)})),o>0&&Object(n.jsxs)("p",{className:"CartSubTotal",children:[Object(n.jsx)("em",{children:"Sub Total: "}),Object(n.jsxs)("strong",{children:["$",o]})]})]}),e.cart.length>0&&Object(n.jsx)("span",{className:"Button CheckoutButton",onClick:function(){return i()},children:"Checkout"})]})},w=(c(72),c(73),function(e){return console.log("FullScreenImage rendered"),Object(n.jsx)("div",{className:"FullScreenImageContainer",onClick:function(){return e.setShowFullScreenImg(!1)},children:Object(n.jsx)("div",{className:"FullScreenImage",children:e.image})})}),L=function(e){var t=Object(s.useState)(1),c=Object(u.a)(t,2),a=c[0],r=c[1],o=Object(s.useState)(null),i=Object(u.a)(o,2),j=i[0],l=i[1],d=Object(s.useState)([]),m=Object(u.a)(d,2),O=m[0],g=m[1],x=Object(s.useState)([]),f=Object(u.a)(x,2),v=f[0],N=f[1],C=Object(s.useState)(!1),S=Object(u.a)(C,2),y=S[0],k=S[1];Object(s.useEffect)((function(){e.setLoading(!0),p.a.get("".concat(b,"/products/").concat(e.slug,"/")).then((function(t){var c=[];t.data.images.forEach((function(e,t){c.push(Object(n.jsx)("img",{src:"".concat(h,"/product_images/").concat(v.slug,"/").concat(e),className:"productImages",alt:"product",width:"100%"}))})),g(c),l(c[0]),N(t.data),e.setLoading(!1)})).catch((function(t){e.setLoading(!1),console.log(t)}))}),[v.slug]);var P=function(e){"up"===e?r(a+1):a>1&&r(a-1)};return Object(n.jsxs)("div",{className:"ProductContainer PageContainer",children:[Object(n.jsx)("h1",{className:"PageTitle",children:v.name}),Object(n.jsxs)("div",{children:[y&&Object(n.jsx)(w,{image:j,setShowFullScreenImg:k}),Object(n.jsxs)("div",{className:"ProductImagesContainer",children:[Object(n.jsx)("div",{className:"SelectedProductImage",onClick:function(){return k(!0)},children:j}),Object(n.jsx)("div",{className:"ThumbnailsContainer",children:O.length>1&&O.map((function(e,t){return Object(n.jsx)("div",{className:"ThumbnailImageContainer",onClick:function(){return l(e)},children:e},t)}))})]}),Object(n.jsxs)("div",{className:"ProductInfoContainer",children:[Object(n.jsx)("p",{className:"ProductDescription",children:v.description}),Object(n.jsxs)("h1",{children:["$",v.price]}),Object(n.jsxs)("div",{className:"QtyAdjustmentContainer",children:[Object(n.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return P("down")},children:"\u21a2"}),Object(n.jsxs)("p",{className:"QtyLabel",children:["qty: ",Object(n.jsx)("span",{children:a})]}),Object(n.jsx)("span",{className:"QtyAdjustmentButton",onClick:function(){return P("up")},children:"\u21a3"})]}),Object(n.jsx)("span",{className:"Button AddToCartButton",onClick:function(){return e.addItemToCart(v,a)},children:"Add to Cart"})]})]})]})},A=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Thank you for you purchase!"}),Object(n.jsx)(i.b,{to:"/shop",children:"Please buy more!"})]})},B=function(){return Object(n.jsx)("div",{children:"Canceled"})},E=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"404. Page not found."}),Object(n.jsx)(i.b,{to:"/",children:"Go Home"})]})},F=(c(74),function(){return Object(n.jsx)("div",{className:"Loader",children:Object(n.jsxs)("div",{className:"lds-ellipsis",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}),Q=(c(75),function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"PageTitle",children:"Our Mission"}),Object(n.jsx)("div",{className:"PageContainer",children:Object(n.jsx)("p",{children:"Our mission at Farwest Fungi is to provide everyone access to altnerative methods of healing."})})]})}),J=(c(76),function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"PageTitle",children:"Learn"}),Object(n.jsx)("div",{className:"PageContainer",children:Object(n.jsxs)("p",{children:["Fungi is ancient magic. You don't need to understand it to harness it's abilities. Please ",Object(n.jsx)("span",{className:"LearnTextLink",children:Object(n.jsx)(i.b,{to:"/shop",children:"try now"})}),"."]})})]})}),q=function(){var e=Object(d.f)(),t=Object(s.useState)([]),c=Object(u.a)(t,2),a=c[0],r=c[1],o=Object(s.useState)(!1),i=Object(u.a)(o,2),b=i[0],h=i[1];Object(s.useEffect)((function(){try{var e=JSON.parse(localStorage.getItem("Cart"));e&&r(Object(l.a)(e))}catch(t){console.log(t)}}),[]);var m=function(t,c){var n=a.find((function(e){return e.slug===t.slug}));if(n){var s=a;s.forEach((function(e){e.slug===n.slug&&(e.qty+=c)})),r(Object(l.a)(s)),localStorage.setItem("Cart",JSON.stringify(s))}else r([].concat(Object(l.a)(a),[Object(j.a)(Object(j.a)({},t),{},{qty:c})])),localStorage.setItem("Cart",JSON.stringify([].concat(Object(l.a)(a),[Object(j.a)(Object(j.a)({},t),{},{qty:c})])));e.push("/cart")},x=function(e,t){var c=a,n=!1;c.forEach((function(c,s){c.slug===e.slug&&("up"===t?c.qty+=1:1===c.qty?n=!0:c.qty-=1)})),n&&(c=c.filter((function(t){return t.slug!==e.slug}))),r(Object(l.a)(c)),localStorage.setItem("Cart",JSON.stringify(c))};return Object(n.jsxs)("div",{className:"appContainer",children:[Object(n.jsx)(O,{cart:a}),b&&Object(n.jsx)(F,{}),Object(n.jsx)("main",{children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:"/cart",render:function(){return Object(n.jsx)(T,{cart:a,adjustQty:x,setLoading:h})}}),Object(n.jsx)(d.a,{exact:!0,path:"/shop",render:function(){return Object(n.jsx)(C,{setLoading:h})}}),Object(n.jsx)(d.a,{exact:!0,path:"/shop/:slug",render:function(e){return Object(n.jsx)(L,{slug:e.match.params.slug,addItemToCart:m,setLoading:h})}}),Object(n.jsx)(d.a,{exact:!0,path:"/success",component:A}),Object(n.jsx)(d.a,{exact:!0,path:"/canceled",component:B}),Object(n.jsx)(d.a,{exact:!0,path:"/about",component:Q}),Object(n.jsx)(d.a,{exact:!0,path:"/learn",component:J}),Object(n.jsx)(d.a,{exact:!0,path:"/",component:N}),Object(n.jsx)(d.a,{path:"/",component:E})]})}),Object(n.jsx)(g,{})]})};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(q,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.ebe172f9.chunk.js.map