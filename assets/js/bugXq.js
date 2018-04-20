$(function () {
    //跳跳值
    $('.zhi').on('mouseenter mouseleave', function () {
        $(this).toggleClass('active');
    })
    $('.zhi1').hover(function () {
        if ($('.zhi1').html() == '值') {
            ($('.zhi1').html('已打分').css('fontSize', 12))
        }
    }, function () {
        if ($('.zhi1').html() == '已打分') {
            ($('.zhi1').html('值').css('fontSize', 32) )
        }
    })
    $('.zhi2').hover(function () {
        if ($('.zhi2').html() == '值') {
            ($('.zhi2').html('已打分').css('fontSize', 12))
        }
    }, function () {
        if ($('.zhi2').html() == '已打分') {
            ($('.zhi2').html('值').css('fontSize', 32) )
        }
    })
    //中部轮播图
    var index1 = 0;
    var len1 = $('.carousel-run1 ul').length;
    var timer2;
    $('.carousel-run1 ul:first').clone(true).appendTo($('.carousel-run1'));
    function run2() {
        timer2 = setInterval(function () {
            $('.carousel-index1 li:eq(' + index1 % len + ')').removeClass('active1');
            if (index1 == len1) {
                $('.carousel-run1').css('margin-left', 0);
                index1 = 0;
            }
            index1++;
            $('.carousel-index1 li:eq(' + index1 % len + ')').addClass('active1');
            $('.carousel-run1').animate({marginLeft: -720 * index1}, 300);
        }, 2000);
    }

    $('.carousel1').mouseenter(function () {
        clearInterval(timer2);
    }).mouseleave(function () {
        run2();
    })
    $('.carousel-left1').click(function () {
        $('.carousel-index1 li:eq(' + index1 + ')').removeClass('active1');
        if (index1 == 0) {
            $('.carousel-run1').css('margin-left', -4 * 720);
            index1= len1;
        }

        index1--;
        $('.carousel-index1 li:eq(' + index1 + ')').addClass('active1');
        $('.carousel-run1').stop(true).animate({marginLeft: -720 * index1}, 200);
    })

    $('.carousel-right2').click(function () {
        $('.carousel-index1 li:eq(' + index1 % len + ')').removeClass('active1');

        if (index1 == len1) {
            $('.carousel-run1').css('margin-left', 0);
            index1 = 0;
        }
        index1++;
        $('.carousel-index1 li:eq(' + index1 % len + ')').addClass('active1');
        $('.carousel-run1').stop(true).animate({marginLeft: -720 * index1}, 200);
    })
    run2()
        /*
        $('.original li').hover(function () {
            $(this).children($('.info-hid1')).show();
        },function () {
           $('.info-hid1').hide();
        })
        */
    $('.original1 li').mouseenter(function () {
        $(this).children('.info-hid-big1').show().end().siblings().children('.info-hid-big1').hide();
    })
    //选项卡移入移出
    $(function () {
        $('.new-hot').mouseenter(function(){
            $('.find-hot').removeClass('active-9')
            $('.chaozhi2').removeClass('active-8')
            $('.new-hot').addClass('active-9')
            $('.chaozhi1').addClass('active-8')
        })
        $('.find-hot').mouseenter(function(){
            $('.new-hot').removeClass('active-9')
            $('.chaozhi1').removeClass('active-8')
            $('.find-hot').addClass('active-9')
            $('.chaozhi2').addClass('active-8')
        })
    })
    $('.original2 li').mouseenter(function () {
        $(this).children('.info-hid-big2').show().end().siblings().children('.info-hid-big2').hide();
    })
    //众测轮播图
    var index = 0;
    var len = $('.zc-crs li').length;

    var timer;
    $('.zc-crs li:first').clone(true).appendTo('.zc-crs')
    $('.zhongce-left').click(function () {
        if (index == 0) {
            $('.zc-crs').css('margin-left', -6*314)
            index = len;
        }
        index--;
        console.log(index)
        $('.zc-crs').stop(true).animate({marginLeft: -314 * index}, 300);
    })
    $('.zhongce-right').click(function () {
        if (index == len) {
            $('.zc-crs').css('margin-left', 0)
            index = 0;
        }
        index++;
        $('.zc-crs').stop(true).animate({marginLeft: -314 * index}, 300);
    })
    run1();
    function run1() {
        timer = setInterval(function () {
            if (index == len) {
                $('.zc-crs').css('margin-left', 0)
                index = 0;
            }
            index++;
            $('.zc-crs').animate({marginLeft:-314*index}, 200);
        }, 3000);
    }
    $('.zhongce-big').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        run1();
    })
    //右侧最后一个选项卡
    var index = 0;
    $('.right-last-top li').mouseenter(function(){
        $('.right-last-top li:eq(' + index + ')').removeClass('active-10');
        $('.right-last-1:eq(' + index + ')').removeClass('active-11');
        index = $(this).index();
        $('.right-last-top li:eq(' + index + ')').addClass('active-10');
        $('.right-last-1:eq(' + index + ')').addClass('active-11');
    })
    $('.right-last-top li').mouseleave(function(){
        index = $(this).index();
        $('.right-last-top li:eq(' + index + ')').addClass('active-10');
        $('.right-last-1:eq(' + index + ')').addClass('active-11');
    })
    //锚点
    $(window).scroll(function () {
        var mdTop = $(window).scrollTop();
        if (mdTop >= 80) {
            $('.maodian').fadeIn()
        }   else {
            $('.maodian').fadeOut()
        }
    })
    //评论区选项卡
    $('.send-index1').click(function () {
        $('.send-index2').removeClass('active-15')
        $('.coment-list2').removeClass('active-14')
        $('.send-index1').addClass('active-15')
        $('.coment-list1').addClass('active-14')
    })
    $('.send-index2').click(function () {
        $('.send-index1').removeClass('active-15')
        $('.coment-list1').removeClass('active-14')
        $('.send-index2').addClass('active-15')
        $('.coment-list2').addClass('active-14')
    })
    //右侧滚动固定选项卡
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if (top > 2430) {
            $('.right-last').css({'position':'fixed','top': 34, 'left': 985})
        }   else {
            $('.right-last').css({'position':'relative','top': 0, 'left': 0})
        }
    })
    //登陆注册
    $(function () {
        $('.login').click(function () {
            $('.reg').removeClass('active-12')
            $('.zhuce').removeClass('active-13')
            $('.login').addClass('active-12')
            $('.denglu23').addClass('active-13')
        })
        $('.reg').click(function () {
            $('.login').removeClass('active-12')
            $('.denglu23').removeClass('active-13')
            $('.reg').addClass('active-12')
            $('.zhuce').addClass('active-13')
            $('.phone').removeClass('active-13')
        })
        $('.kuaijie1').click(function () {
            $('.denglu23').removeClass('active-13')
            $('.phone').addClass('active-13')
        })
        $('.kuaijie2').click(function () {
            $('.phone').removeClass('active-13')
            $('.denglu23').addClass('active-13')
        })
        $('.login').click(function () {
            $('.phone').removeClass('active-13')
        })
    })
    $('.show-login').click(function () {
        $('.login-bg').addClass('active-14')
        $('body').css('overflowY', 'hidden')
        $('.denglu23').addClass('active-13')
        $('.zhuce').removeClass('active-13')
        $('.reg').removeClass('active-12')
        $('.login').addClass('active-12')
    })
    $('.x').click(function () {
        $('.login-bg').removeClass('active-14')
        $('body').css('overflowY', 'scroll')
    })
    $('.show-reg').click(function () {
        $('.login-bg').addClass('active-14')
        $('.denglu23').removeClass('active-13')
        $('.zhuce').addClass('active-13')
        $('body').css('overflowY', 'hidden')
        $('.reg').addClass('active-12')
        $('.login').removeClass('active-12')
    })
    $('.x').click(function () {
        $('.login-bg').removeClass('active-14')
    })
    $('.denglu1').click(function () {
        $(this).children('.denglu2').css({color: '#2e76a8'}).animate({top: -6}, 50)
        $(this).children('input').focus().css({borderColor: '#2e76a8'})
    })
    $('.denglu3').blur(function () {
        if ($(this).val() == "") {
            $(this).siblings('.denglu2').css('color', '#999').animate({top: 13}, 50);
            $(this).css({borderColor: '#999'})
        }
    })
    //正则
    $('.denglu23').submit(function (e) {
        if ($('.denglu6').val() == '') {
            $(this).children('.tishi').text('手机号/邮箱不能为空');
            e.preventDefault()
            console.log('.denglu6')
            return;
        } else if ($('.denglu9').val() == '') {
            $(this).children('.tishi').text('密码不能为空');
            e.preventDefault()
            return;
        } else {
            $(this).children('.tishi').text('您输入的账号/密码无效，请重新输入');
            e.preventDefault()
        }
    })
    $('.phone').submit(function (e) {
        var reg = /^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        var value = $('.denglu11').val().trim()
        var reg1 = /^[0-9]{6}$/
        var value1 = $('.denglu14').val().trim()
        if ($('.denglu11').val() == '') {
            $(this).children('.tishi2').text('手机号不能为空');
            e.preventDefault()
            return;
        } else if (!reg.test(value)) {
            $(this).children('.tishi2').text('请输入有效的手机号码');
            e.preventDefault()
            return;
        } else if ($('.denglu14').val() == '') {
            $(this).children('.tishi2').text('验证码不能为空');
            e.preventDefault()
            return;
        } else if (!reg1.test(value1)) {
            $(this).children('.tishi2').text('验证码已失效，请重新获取');
            e.preventDefault()
            return;
        }
    })
    $('.zhuce').submit(function (e) {
        var reg3 = /^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        var value3 = $('.zhuce1').val().trim()
        var reg4 = /^[0-9]{6}$/
        var value4 = $('.zhuce2').val().trim()
        var reg5 = /^[\w+]{6,20}$/
        var value5 = $('.zhuce3').val().trim()
        if ($('.zhuce1').val() == '') {
            $(this).children('.tishi1').text('手机号不能为空');
            e.preventDefault()
            return;
        } else if (!reg3.test(value3)) {
            $(this).children('.tishi1').text('请输入有效的手机号码');
            e.preventDefault()
            return;
        } else if ($('.zhuce2').val() == '') {
            $(this).children('.tishi1').text('验证码不能为空');
            e.preventDefault()
            return;
        } else if (!reg4.test(value4)) {
            $(this).children('.tishi1').text('验证码已失效，请重新获取');
            e.preventDefault()
            return;
        } else if ($('.zhuce3').val() == '') {
            $(this).children('.tishi1').text('密码不能为空');
            e.preventDefault()
            return;
        } else if (!reg5.test(value5)) {
            $(this).children('.tishi1').text('请将长度控制在6-20以内');
            e.preventDefault()
            return;
        } else {
            $(this).css('background', '#999').html('注册成功，登陆中...')
        }
    })
})
