$(document).ready(function () {

    });

        /*로그아웃 하기*/
        function sign_out() {
            $.removeCookie('token', {path: '/'});
            alert('정상적으로 로그아웃 되었습니다!')
            window.location.href = "/login"
        }

        /*메인페이지로 돌아가는 함수.*/

        function to_main() {
            window.location.href = "/"
        }

        function remove() {
            $.ajax({
                type: "POST",
                url: "/api/user_delete",
                data: {},
                success: function(response) {
                    alert('삭제되었습니다')
                    caches.delete('token').then(function (){
                        window.location.href='/login'
                    })
                }
               });
            $.removeCookie('token', {path: '/'});
            alert('정상적으로 로그아웃 되었습니다!')
            window.location.href = "/login"
            }

        /*프로필편집 기능 함수*/

        /*function update_profile() {
            let name = $('#input-name').val()
            let form_data = new Formdata()
            form_data.append("name_give", name)
            console.log(name, form_data)

            $.ajax({
                type: "POST",
                url: "/updata_profile",
                data: form_data,
                cache: false,
                contentType: false,
                processData: false,
                success: function(response) {
                    if (response["result"] == "success") {
                        alert(response["msg"])
                        window.location.reload()
                    }
                  }
               });
            }*/
