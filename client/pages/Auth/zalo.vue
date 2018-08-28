<template >
  <no-ssr>
    <div class="form">
    <div class="form_title">
      <h2>
        Đăng nhập bằng tài khoản Zalo
      </h2>
    </div>
    <div class="form_content">
       <v-tabs class="form_content_tab" color="white" slider-color="black" centered="true" grow="true">
      <v-tab ripple>Với số điện thoại</v-tab>
      <v-tab ripple> Với mã QR</v-tab>

      <v-tab-item>
        <v-card flat>
          <form class="form_login">


            <div class="form_item">
              <div class="item_icon">
                <i class="fa fa-mobile fa-lg"></i>
              </div>
              <v-text-field
              v-validate="'required|max:15'"
              v-model="phone"
              :counter="10"
              :error-messages="errors.collect('phone')"
              label="Số điện thoại"
              data-vv-name="phone"
              required
            ></v-text-field>
            </div>

            <div class="form_item">
              <div class="item_icon">
                <i class="fa fa-lock fa-lg"></i>
              </div>
              <v-text-field
              v-validate="'required|email'"
              v-model="email"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>
            </div>
            
            <div class="buttons">
                <div class="button_submit color_blue">
              <v-btn @click="submit">Đăng nhập với mật khẩu</v-btn>
                </div>
                <div class="button_submit">
                  <v-btn @click="clear">Gửi yêu cầu đăng nhập</v-btn>
                </div>
            </div>

          </form>

           <div class="form_footer">
              <div>
                <nuxt-link to="">Quên mật khẩu?</nuxt-link>
              </div>
              <div>
                <span>
                  <nuxt-link to="">Hoặc đăng nhập bằng </nuxt-link>
                </span>
                <span>
                  <i class="fa fa-facebook fa-xs"></i>
                </span>
              </div>
            </div>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>

          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAABjY2OhoaHn5+d3d3eamprg4ODt7e2JiYnz8/ORkZGAgID5+flAQEAgICC4uLjGxsYyMjK/v7+xsbHT09OpqalZWVlubm7Nzc1NTU1zc3NWVlacnJwvLy99fX0nJydnZ2cbGxs9PT0SEhJPT0/a2trqgtLNAAAKvElEQVR4nO2d6XbiOhCEISxxbDazmC1sScj7P+Id3K05lG6hyIaEYabrn6TW8hmOZW2tRsNkMplMplhlT1X1igXkc0jshypblzbzpYRmmDOlWV4rty/zSnhqVhYWMMLEIOFebCb6bDBnQrNUb97TPQnHRmiERvinEOYSWv4o4aFofaksRLiXAroamxdE06HY9iTYo4RLScyRMPu6ecUhSFiEHr0qCREOMHZX/dkr4YuEFkjIf2BUESRsRZTQrkDo/T4VCPWf0kHCdkT7WkZohP864fuNCdffRNh/ZkpChPlx/kuvrkWSo70W0+281GsFwkLKc90OEia0ff0KhM+07ixE6Inm7Fcg5OUpYUZzPl9N2K1AOIScLxKZ3oqwa4RGaIRGeBUhH3fdk1C7PG9qixI6BceHqtGfQ9ipTcjH+EZohEZohP8nXFAIJOxRwjxEOP1zCJ9npbyRmxK2Ps8T+0+Lk9YfkngsQ4tMbDx5Hf89CbmUMIdI3uP3LhRhhEZohEb4BeFHPOHuHoRJ1iVaUsLltNRMQv1CgpsyR/ZMCbPNebHa8TckZxEzelqy5mVJBcKggj0+X7bxCCmEm4iLGQEHdXNC/GpLQhCOkG63MEIj/C0j/FqPTZgl7S81q0CoxaWUMJXEhBJioiOcfd28JAsSVlEMoSb2KKEuvXUoIV/Hr6AfIlQIb740BYgeJeQrpEZohEb40IRRS+zVCTtA6NoZJNSc3WsJvT3MVyimx59I5BhzckJUp3F/VSDcYs6/kPDv/w2N0AjvpAUQ8qkY3fQ2xJza5XldyTcT5ovOmQ7UJhEb99X/uSw1XZexvVkZyr0sYpOvz0vfDQTifSdhZZqUprMOEkK7Fjrr9yyx60YFFfgEqU2VvYmoqH1t+jkQ/KbRpTdvpPozhAOaRVVlP40RGqERhrJWOW9Rg/Cb3zTLl+xcI6appLlubCmx2n1vJ2CKs399KL17lCyrLtQ5LXNODhGE7ZdAM70O64LoQ/Z+pkXoBwlWoz8T36jRjCAMNnNen3CFNh1qFEOIX21OgxsR+mN8IzTCv4rw+JiEaVLKWzIaD861lawrtRWlvffzRCfJMZ6ArRMSdlKIVcJtWcC765P25w0ZT7EJWqc0ZLDnhDqbuAk9c+8grEq3KEwwVrPwE5Y4m+hlUcKJX/u5+F4M7XyvOGE5peUuKT7OCMcQuuGxEo7+V/2XhFV2mxihERrhHQmDp9ULWi4nbDAILzGjsVcTaqK/MqOEH8OT3hx/swy6DqHRP5frZznhUKQb+F4ka0ITd5KYanQTCJfOWNL4zj1tWAObyQmbyK/BWYMpSIgKnnviM8K/CUEXCGOEhG5sZYRGaIT3I3QDpBhC/uWNCp5W54T65T3D2ORqwt0yP2m0653kejMkTDqQeChDvbnXwLKcpRY7EBs+0nDjQ82iM1FzyXJA27WUU+QgLWBTtnp3YUwa3MmOhO1mhNQ2xmtEcATM5Y2AVTo7eeGr5daEwa+2byKcG6ER/juESTNCahvjCcs7M/Ozb5rs5aSe9rPtSalRGfnixj6LFyYxnWxoImqjtkj4hEbuaUiD9JGnI8jZEtNCIpdRhGij40O3MqM2wc+BmAWgHCvjc21qg9vc+eqajoD9lZkYQh3juzlvtfGflYieXQsShsf4Whmu1gUJ486uGaERGuE54dvPEHb76S/1edbRcPxL26fSJm2Mt6fgMJcg6gIhsUz7EynWvaKVcCrFuvkkbdBneh77u5laaQyhJ/rMvb0Ya5qzyQijTslij8/PzBRIqIqaL40h5Ce76hPWXz80QiM0wn+GMPguxc6SE3qebZDQvWgp4SfGRq1yd7Fz08Td/tRj7d3SW0r6wz5feiszjveZlxNs3sasP1R9SOIYutL+RstVI0nsH8oGjYdBQr5+qFvXuhiLP1PMjLDTmNl43zSesAA+X4pnt/48Qu+7tAYhTtkaoRE+LCGfpzpIoueSDQn5u7RJcw6ZjSOk+LcjfJXpKu+nnMnslfaoae98Om3kPERPiHItdiWTdg40B6MMCSUx1//NXG1x5q3AaqoQqrzth6goH0MqnBHeUxtvjK+K2cnuqQphcI90fcIxtTFCIzRCSnizNw2uzOypzc0Ij0HClqzc63q72yqMy+XaW+g6vqv7E2yWmLN7XmzP6/g5oewkWOqgbC7BPIZQ1vF7R07IheX6N5mJ8MzMFnPWmBH2NoxTcULVhfFhDGGX2uAY343yrp7zrk94YYxvhEZohPcn7KMcIWzm7aItEuru4pWkOsJJg+3XxQKChB9DkEdIdwNfIMRZHO/w1hoI+XypJkZNieoTG0UQess2RyCss7qm8r7acIwf5XMPFeOxnBN6XiNWRmiERvjIhMF36QEIvVVu7kc4SPgmsfounWB5V79LNxLpn5nBs55uSUbOkI5ziZyWwfcDnvlMIYsjbEsk+mtL5STo9hkOrPbxZCkSvsEp1sFHBGEfGcLSEnTrmrfbhKqKzz2uCt80dbxGGKERGuFjEAYn4ryuZAeEnntLLr4yg9J+xq3jR7FMwUeMW4KihNsu+KfhhK4g8RVToL8bqCvz9uhNwD8N10FyuqFpFCHOpvJzT94CWpBQpSNg7dT3arQHG377A7+IkyuKMObs2tWEbs4b/4j8Bg8jNMJ/npCf5X5sws25W8q1m1WTyIUuySzRAaXaqO9Lt8gPNuupOLLs1iYc7zr/124VImxLgz6juGPEb5ZT4epaDULelbRChDo+jPNmFiN+O6CKr5BWIOQeWoPngCvNecfICI3QCJmMkBHWvxsBxUfAQUJPQQ+t198sZ4RGaIRG+ACEKSbyL++3ULEpQFQhbAPhBW9mNe5dU+WD1UkHKSB5LUODSRlMpkioF6Qp/lqyuJO5q+Mp53GLhFp3gxLKHW3JWuosErixzSOscXeeyrs5QH8mPgJW1b/fInhmJsprRH1Cvp/mZwireP4wQiP8FwibQJhTQs/rPCXk8zQbSljFP02VO52RcN8SW7nZeSqhjW4bG7bOi9u4mwP0hmdKuILrn11O/bVWI6lFmzCRUKEtCBLWuJeb+y+N8TFUX4sGUyX/NKgqhBX8RNVXkPDmd6sb4XfICH+C8I5vmu8ifFsvTnpSwuJQBvG8TlMi1++0Fp4oxa7x9On8c1ZKm6ChVlnCwZ/8uxUhvyvIO9Sj+HwBDceHTlrQkWbRRF2RquNz72pCz30rvxtBhWN8DsEJr/AqaIRGaISPQTgJEXrv0u8lvHBkqD7hgdpS8RGwao+JfB0fCd31nLSyC7OJNQiDXpQqEIbPAVNC7sxNdbtvGiM0QiP8ScLsWsI3rJN3CJjovUtxxHEIEYbfpf1nJueJhhL22uembRzmdDRRsxxe5yfp4ssaE5FwPxdpLFTynB/LtFeMdU0IEgYVPNnlhITepjd0KhC1N5HaVNqr/6OENXZfUhsjBBnhmR6bMHgrmSp4wtIJCT2IGuctqE0dwkPR+lIZlpsXpTyn10rYg8R+V0ooQJ7fhamY6FDoOBUjSPytAhId96ZM8y9uu9VeDI+Q+y+tcO4p6Cj6QAu4sAv6mwi5D9oKZ9eivtpQ37yfxgiN8HEIP2oT4vBhjYlIyN80Fwizp6ryRyeoRWkzxyta0lfJGSTcQS3eFcw9SOQ7r0fzQKLJZDKZTEz/AZJAQk8SUN/UAAAAAElFTkSuQmCC" alt="">
          </div>

          <div class="qr">
           <a> Quét mã QR bằng Zalo để đăng nhập</a>
          </div>
        </v-card>
      </v-tab-item>

    </v-tabs>

      <div class="ask_register">
       <span>Bạn chưa có tài khoản? </span><nuxt-link to=""> Đăng ký ngay!</nuxt-link>
      </div>

    </div>
  </div>
  </no-ssr>
</template>
<script>
export default {
	data() {
		return {
			phone: "",
			email: "",
			dictionary: {
				attributes: {
					email: "E-mail Address"
					// custom attributes
				},
				custom: {
					phone: {
						required: () => "Name can not be empty",
						max:
							"The name field may not be greater than 10 characters"
					}
				}
			}
		}
	},
	mounted() {
		this.$validator.localize("en", this.dictionary)
	},

	methods: {
		submit() {
			this.$validator.validateAll()
		},
		clear() {
			this.name = ""
			this.email = ""
			this.$validator.reset()
		}
	}
}
</script>
<style scoped>
.form {
	padding-top: 50px;
	text-align: center;
}
.form_title {
	padding-bottom: 30px;
}
.form_content {
	padding-bottom: 30px;
	box-shadow: -1px 0px 22px -1px rgba(131, 131, 131, 0.75);
	padding-top: 30px;
	max-width: 400px;
	margin: 0 auto;
}
.form_login {
	max-width: 90%;
	text-align: center;
	margin: 0 auto;
	padding-top: 15px;
}
.form_item {
	display: flex;
}
.item_icon {
	padding-top: 6%;
	padding-right: 7px;
}
.buttons {
	padding-top: 20px;
	padding-bottom: 20px;
}
.buttons a {
	font-size: 14px;
}
.button_submit button {
	width: 100%;
}
.button_submit a {
	font-size: 13px;
}
.color_blue button {
	background: #0190f3 !important;
	color: white;
}
.form_footer {
	border-top: 1px solid #eeeeee;
	padding-top: 15px;
	padding-bottom: 15px;
	display: flex;
	justify-content: space-around;
}

.form_footer a {
	color: grey;
}

.fa-xs {
	padding: 5px;
	color: #0190f3;
}
.fa-xs:hover {
	background: #eeeeee;
	cursor: pointer;
}
.ask_register {
	border-top: 1px solid #eeeeee;
	padding-top: 10px;
}
.ask_register span {
	font-size: 14px;
}
.qr {
	padding: 15px 10px;
}
</style>
