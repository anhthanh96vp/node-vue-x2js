<template>
     <div class="maincontent-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="latest-product">
                        <h2 class="section-title">Latest Products</h2>
                        <div class="product-carousel">
                            <div class="single-product">
                                <div class="product-f-image">
                                    <img src="~static/product-1.jpg" alt="">
                                    <div class="product-hover">
                                        <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>
                                
                                <div class="product-carousel-price">
                                    <ins>$700.00</ins> <del>$100.00</del>
                                </div> 
                            </div>
                            <div class="single-product">
                                <div class="product-f-image">
                                    <img src="~static/product-2.jpg" alt="">
                                    <div class="product-hover">
                                        <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2>Nokia Lumia 1320</h2>
                                <div class="product-carousel-price">
                                    <ins>$899.00</ins> <del>$999.00</del>
                                </div> 
                            </div>
                            <div class="single-product">
                                <div class="product-f-image">
                                    <img src="~static/product-3.jpg" alt="">
                                    <div class="product-hover">
                                        <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2>LG Leon 2015</h2>

                                <div class="product-carousel-price">
                                    <ins>$400.00</ins> <del>$425.00</del>
                                </div>                                 
                            </div>
                            <div class="single-product">
                                <div class="product-f-image">
                                    <img src="~static/product-4.jpg" alt="">
                                    <div class="product-hover">
                                        <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Sony microsoft</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$200.00</ins> <del>$225.00</del>
                                </div>                            
                            </div>
                            <div class="single-product">
                                <div class="product-f-image">
                                    <img src="~static/product-5.jpg" alt="">
                                    <div class="product-hover">
                                        <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2>iPhone 6</h2>

                                <div class="product-carousel-price">
                                    <ins>$1200.00</ins> <del>$1355.00</del>
                                </div>                                 
                            </div>
                            <div class="single-product">
                                <div class="product-f-image">
                                    <img src="~static/product-6.jpg" alt="">
                                    <div class="product-hover">
                                        <a href="#" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                
                                <h2><a href="single-product.html">Samsung gallaxy note 4</a></h2>

                                <div class="product-carousel-price">
                                    <ins>$400.00</ins>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 

</template>

<script>
export default {}
</script>


<style scoped>
.section-title {
	font-family: "Raleway", sans-serif;
	font-size: 50px;
	font-weight: 100;
	margin-bottom: 50px;
	text-align: center;
}

.product-f-image {
	position: relative;
}
.product-hover {
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
	overflow: hidden;
	border: 1px solid #ddd;
}
.product-hover:after {
	background: none repeat scroll 0 0 #000;
	content: "";
	height: 100%;
	left: -100%;
	opacity: 0.6;
	position: absolute;
	top: 0;
	width: 100%;
	transition: 0.4s;
}
.product-hover a {
	background: none repeat scroll 0 0 #5a88ca;
	border-radius: 5px;
	color: #fff;
	display: block;
	font-size: 16px;
	left: 10%;
	margin: 0;
	padding: 10px;
	position: absolute;
	text-align: center;
	text-transform: uppercase;
	border: 1px solid #5a88ca;
	width: 80%;
	z-index: 99;
	transition: 0.4s;
}
.product-hover a:hover {
	background: #000;
	text-decoration: none;
	border-color: #444;
}
.product-carousel-price ins {
	color: #5a88ca;
	font-weight: 700;
	margin-right: 5px;
	text-decoration: none;
}
.product-hover a i.fa {
	margin-right: 5px;
}
.product-hover a.add-to-cart-link {
	top: -25%;
}
.product-hover a.view-details-link {
	bottom: -25%;
}
.single-product h2 {
	font-size: 18px;
	line-height: 25px;
	margin-bottom: 10px;
	margin-top: 15px;
}

.single-product h2 a {
	color: #222;
}
.single-product p {
	color: #5a88ca;
	font-weight: 700;
}

.single-product {
	overflow: hidden;
}
.single-product:hover {
}
.single-product:hover .product-hover a.add-to-cart-link {
	top: 32%;
}
.single-product:hover .product-hover a.view-details-link {
	bottom: 32%;
}
.single-product:hover .product-hover:after {
	left: 0;
}

.product-carousel {
	padding-top: 40px;
}
.latest-product .owl-nav {
	position: absolute;
	right: 0;
	top: 0;
}

.latest-product .owl-nav div,
.related-products-wrapper .owl-nav div {
	background: #fa8072;
	color: #fff;
	display: inline-block;
	margin-left: 15px;
	padding: 1px 10px;
}

.maincontent-area {
	padding-bottom: 50px;
	padding-top: 20px;
}
</style>
