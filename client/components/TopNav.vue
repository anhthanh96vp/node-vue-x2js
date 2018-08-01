<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark default-color">
    <a class="navbar-brand" href="/">
        <strong>Navbar</strong>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <nuxt-link class="nav-link" to="/" >Home
                    <span class="sr-only">(current)</span>
                </nuxt-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Opinions</a>
            </li>
        </ul>
        <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
                <a class="nav-link">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav">
            <li class="nav-item avatar dropdown">
                <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="avatar-img rounded-circle z-depth-0">
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-purple" aria-labelledby="navbarDropdownMenuLink-5">
                    <nuxt-link class="dropdown-item waves-effect waves-light" to="/login">Đăng nhập</nuxt-link>
                    <nuxt-link class="dropdown-item waves-effect waves-light" to="/register">Đăng ký</nuxt-link>
                    <a class="dropdown-item waves-effect waves-light">Đăng xuất</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.avatar-img {
	max-width: 40%;
}
</style>
