$(function () {
    var index = 0;
    var len = $('.carousel-image li').length;
    var timer;
    $('.carousel-image li:first').clone(true).appendTo($('.carousel-image'));
    run();

    function run() {
        timer = setInterval(function () {
            $('.carousel-index li:eq(' + index % len + ')').removeClass('active');
            if (index == len) {
                $('.carousel-image').css('margin-left', 0);
                index = 0;
            }
            index++;
            $('.carousel-index li:eq(' + index % len + ')').addClass('active');
            $('.carousel-image').animate({marginLeft: -680 * index}, 200);
        }, 5000);
    }

    $('.carousel').mouseenter(function () {
        clearInterval(timer);
    }).mouseleave(function () {
        run();
    })

    $('.carousel-index li').click(function () {
        $('.carousel-index li:eq(' + index + ')').removeClass('active');

        index = $(this).index();

        $('.carousel-index li:eq(' + index + ')').addClass('active');
        $('.carousel-image').stop(true).animate({marginLeft: -680 * index}, 200);
    })

    $('.carousel-left').click(function () {
        $('.carousel-index li:eq(' + index + ')').removeClass('active');
        if (index == 0) {
            $('.carousel-image').css('margin-left', -6 * 665);
            index = len;
        }

        index--;
        $('.carousel-index li:eq(' + index + ')').addClass('active');
        $('.carousel-image').stop(true).animate({marginLeft: -680 * index}, 200);
    })

    $('.carousel-right1').click(function () {
        $('.carousel-index li:eq(' + index % len + ')').removeClass('active');

        if (index == len) {
            $('.carousel-image').css('margin-left', 0);
            index = 0;
        }

        index++;

        $('.carousel-index li:eq(' + index % len + ')').addClass('active');
        $('.carousel-image').stop(true).animate({marginLeft: -680 * index}, 200);
    })
})
//newspaper内容 start
var nsp = document.querySelectorAll('.newspaper-ctn')
var nList = document.querySelectorAll('.newspaper-index li')
var left = document.querySelector('.newspaper-left')
var right = document.querySelector('.newspaper-right')
var newspaper = document.querySelector('.newspaper')
var index = 0;
var timer;

function run() {
    timer = setInterval(function () {
        nsp[index].style.display = 'none';
        nList[index].style.background = '#ddd'
        index++;
        if (index > nsp.length - 1) {
            index = 0;
        }
        nList[index].style.background = '#f04848'
        nsp[index].style.display = 'block';
    }, 2000)
}

run()
newspaper.onmouseenter = function () {
    clearInterval(timer)
}
newspaper.onmouseleave = function () {
    run()
}
$('.newspaper-ctn').removeClass('active-2');
$('.newspaper-index li').click(function () {
    nsp[index].style.display = 'none';
    nList[index].style.background = '#ddd'
    index = $(this).index();
    nList[index].style.background = '#f04848'
    nsp[index].style.display = 'block';
})
left.onclick = function () {
    nsp[index].style.display = 'none';
    nList[index].style.background = '#ddd'
    index--;
    if (index < 0) {
        index = nsp.length - 1;
    }
    nList[index].style.background = '#f04848'
    nsp[index].style.display = 'block';
}
right.onclick = function () {
    nsp[index].style.display = 'none';
    nList[index].style.background = '#ddd'
    index++;
    if (index > nsp.length - 1) {
        index = 0
    }
    nList[index].style.background = '#f04848'
    nsp[index].style.display = 'block';
}
//newspaper内容 end
//增加active:border color
$(function () {
    var index = 0;
    $('.middle-top-mid-p').click(function () {
        $('.middle-top-mid-p:eq(' + index + ')').removeClass('active-1');
        index = $(this).index();
        $('.middle-top-mid-p:eq(' + index + ')').addClass('active-1');
    })
})
//选项卡轮播 内容
$(function () {
    var index = 0;
    var len = $('.mid-carousel').length - 12;
    $('.middle-ctn-big ul:first').clone(true).appendTo('.middle-ctn-big')
    $('.mid-left-btn').click(function () {

        if (index == 0) {
            $('.middle-ctn-big').css('marginLeft', -4 * 845)
            index = len
        }
        index--;
        $('.middle-ctn-big').stop(true).animate({marginLeft: -845 * index}, 200);
    })
    $('.mid-right-btn').click(function () {
        if (index == len) {
            $('.middle-ctn-big').css('marginLeft', 0)
            index = 0;
        }
        index++;
        $('.middle-ctn-big').stop(true).animate({marginLeft: -845 * index}, 200);
    })
})
//中间轮播图点击切换
$(function () {
    var index = 0;
    $('.middle-top-mid-p').click(function () {
        $('.middle-ctn:eq(' + index + ')').removeClass('active-2');
        index = $(this).index();
        $('.middle-ctn:eq(' + index + ')').addClass('active-2');
    })
})
//右侧挂件第一个轮播图
$(function () {
    var index = 0;
    var len = $('.feed-one li').length;
    $('.feed-one li:first').clone(true).appendTo('.feed-one')
    console.log(len);
    $('.right-one-left').click(function () {
        if (index == 0) {
            $('.feed-one').css('marginLeft', -8 * 328)
            index = len;
        }
        index--;
        $('.feed-one').stop(true).animate({marginLeft: -328 * index}, 300);
    })
    $('.right-one-right').click(function () {
        console.log(index);
        if (index == len) {
            $('.feed-one').css('marginLeft', 0)
            index = 0;
        }
        index++;
        $('.feed-one').stop(true).animate({marginLeft: -328 * index}, 300);
    })
})
$(function () {
    var index = 0;
    var len = $('.feed-num-list li').length;
    $('.right-one-left').click(function () {
        $('.feed-num-list li:eq(' + index + ')').removeClass('active-3');
        index--;
        if (index < 0) {
            index = len - 1;
        }
        $('.feed-num-list li:eq(' + index + ')').addClass('active-3');
    })
    $('.right-one-right').click(function () {
        $('.feed-num-list li:eq(' + index + ')').removeClass('active-3');
        index++;
        if (index >= len) {
            index = 0;
        }
        $('.feed-num-list li:eq(' + index + ')').addClass('active-3');
    })
})
//固定定位导航栏
$(function () {
    $(window).scroll(function () {
        var mbTop = $(window).scrollTop();
        if (mbTop >= 106) {
            $('.fixedBig').addClass('fiexd-1')
        } else {
            $('.fixedBig').removeClass('fiexd-1')
        }
    })

//右侧固定导航栏锚点
    $(function () {
        $(window).scroll(function () {
            var mdTop = $(window).scrollTop();
            if (mdTop >= 106) {
                $('.maodian-hid').fadeIn()
            } else {
                $('.maodian-hid').fadeOut()
            }
        })

        $(window).scroll(function () {
            var top1 = $(window).scrollTop();
            //var mbTop =$('.middle-menu').offset().top-34;
            if (top1 >= 1005) {
                $('.middle-menu').css({'position': 'fixed', 'top': 20, 'left': 160})
            } else {
                $('.middle-menu').css({'position': 'relative', 'top': 0, 'left': 0})
            }
        })
        $(window).scroll(function () {
            var top2 = $(window).scrollTop();
            if (top2 >= 4300) {
                $('.feed-last').css({'position': 'fixed', 'top': 34, 'left': 1032})
            } else {
                $('.feed-last').css({'position': 'relative', 'top': 0, 'left': 0})
            }
        })
    })
//jd 轮播图
    $(function () {
        var index = 0;
        var len = $('.jd-carousel1 li').length;
        $('.jd-bum1').click(function () {
            $('.jd-carousel1 li:eq(' + index + ')').removeClass('active-5');
            index--;
            if (index < 0) {
                index = len - 1;
            }
            $('.jd-carousel1 li:eq(' + index + ')').addClass('active-5');
        })
        $('.jd-bum2').click(function () {
            $('.jd-carousel1 li:eq(' + index + ')').removeClass('active-5');
            index++;
            if (index >= len) {
                index = 0;
            }
            $('.jd-carousel1 li:eq(' + index + ')').addClass('active-5');
        })
    });
    $(function () {
        var index = 0;
        var len = $('.jd-right-shadow li').length;
        $('.jd-bum1').click(function () {
            $('.jd-right-shadow li:eq(' + index + ')').removeClass('active-6');
            index--;
            if (index < 0) {
                index = len - 1;
            }
            $('.jd-right-shadow li:eq(' + index + ')').addClass('active-6');
        })
        $('.jd-bum2').click(function () {
            $('.jd-right-shadow li:eq(' + index + ')').removeClass('active-6');
            index++;
            if (index >= len) {
                index = 0;
            }
            $('.jd-right-shadow li:eq(' + index + ')').addClass('active-6');
        })
    });
    $(function () {
        var index = 0;
        $('.jd-right-shadow li').click(function () {
            $('.jd-carousel1 li:eq(' + index + ')').removeClass('active-5');
            $('.right-carousel li:eq(' + index + ')').removeClass('active-6');
            index = $(this).index();
            $('.jd-carousel1 li:eq(' + index + ')').addClass('active-5');
            $('.right-carousel li:eq(' + index + ')').addClass('active-6');
        })
    })
    //下面JD右侧轮播索引有问题
    $(function () {
        var index = 0;
        var len = $('.jd-right-shadow li').length;
        $('.jd-bum1').click(function () {
            index--;
            if (index < 0) {
                index = len - 1;
            }
            $('.jd-right-shadow').stop(true).animate({marginTop: -39 * index}, 300);
        })
        $('.jd-bum2').click(function () {
            if (index < 3) {
                return
            }
            index++;
            if (index >= len - 3) {
                index = 0;
            }
            $('.jd-right-shadow').stop(true).animate({marginTop: 39 * index}, 300);
        })
    })
    //上面JD右侧轮播索引有问题
//第七个挂件轮播图

    $(function () {
        var index1 = 0;
        var len1 = $('.seven li').length;
        $('.seven li:first').clone(true).appendTo('.seven')
        console.log(len1)
        $('.seven-left').click(function () {
            if (index1 == 0) {
                $('.seven').css('marginLeft', -5 * 328)
                index1 = len1
            }
            index1--;
            $('.seven').stop(true).animate({marginLeft: -328 * index1}, 300);
        })
        $('.seven-right').click(function () {
            if (index1 == len1) {
                $('.seven').css('marginLeft', 0)
                index1 = 0;
            }
            index1++;
            $('.seven').stop(true).animate({marginLeft: -328 * index1}, 300);
        })
    })
    $(function () {
        var index1 = 0;
        var len1 = $('.movie-num-hid li').length;
        $('.seven-left').click(function () {
            $('.movie-num-hid li:eq(' + index1 + ')').removeClass('active-7');

            if (index1 < 0) {
                index1 = len1 - 1;
            }
            index1--;

            $('.movie-num-hid li:eq(' + index1 + ')').addClass('active-7');
        })
        $('.seven-right').click(function () {
            $('.movie-num-hid li:eq(' + index1 + ')').removeClass('active-7');

            if (index1 > len1 - 1) {
                index1 = 0;
            }
            index1++;

            $('.movie-num-hid li:eq(' + index1 + ')').addClass('active-7');
        })
    })
//第二个京东轮播图
    $(function () {
        var index = 0;
        var len = $('.jd-carousel2 li').length;
        $('.jd-bum3').click(function () {
            $('.jd-carousel2 li:eq(' + index + ')').removeClass('active-5');
            index--;
            if (index < 0) {
                index = len - 1;
            }
            $('.jd-carousel2 li:eq(' + index + ')').addClass('active-5');
        })
        $('.jd-bum4').click(function () {
            $('.jd-carousel2 li:eq(' + index + ')').removeClass('active-5');
            index++;
            if (index >= len) {
                index = 0;
            }
            $('.jd-carousel2 li:eq(' + index + ')').addClass('active-5');
        })
    });
    $(function () {
        var index = 0;
        var len = $('.jd-right-shadow2 li').length;
        $('.jd-bum3').click(function () {
            $('.jd-right-shadow2 li:eq(' + index + ')').removeClass('active-6');
            index--;
            if (index < 0) {
                index = len - 1;
            }
            $('.jd-right-shadow2 li:eq(' + index + ')').addClass('active-6');
        })
        $('.jd-bum4').click(function () {
            $('.jd-right-shadow2 li:eq(' + index + ')').removeClass('active-6');
            index++;
            if (index >= len) {
                index = 0;
            }
            $('.jd-right-shadow2 li:eq(' + index + ')').addClass('active-6');
        })
    });
    $(function () {
        var index = 0;
        $('.jd-right-shadow2 li').click(function () {
            $('.jd-carousel2 li:eq(' + index + ')').removeClass('active-5');
            $('.jd-right-shadow2 li:eq(' + index + ')').removeClass('active-6');
            index = $(this).index();
            $('.jd-carousel2 li:eq(' + index + ')').addClass('active-5');
            $('.jd-right-shadow2 li:eq(' + index + ')').addClass('active-6');
        })
    })
//下面JD右侧轮播索引有问题
    $(function () {
        var index = 0;
        var len = $('.jd-right-shadow2 li').length;
        $('.jd-bum3').click(function () {
            index--;
            if (index < 0) {
                index = len - 1;
            }
            $('.jd-right-shadow2').stop(true).animate({marginTop: -39 * index}, 300);
        })
        $('.jd-bum4').click(function () {
            if (index < 3) {
                return
            }
            index++;
            if (index >= len - 3) {
                index = 0;
            }
            $('.jd-right-shadow2').stop(true).animate({marginTop: 39 * index}, 300);
        })
    })
//众测轮播
    $(function () {
        var index = 0;
        var len = $('.zc-crs li').length;
        var timer;
        $('.zc-crs li:first').clone(true).appendTo('.zc-crs')
        $('.zhongce-left').click(function () {
            if (index == 0) {
                $('.zc-crs').css('marginLeft', -6 * 314)
                index = len;
            }
            index--;
            $('.zc-crs').stop(true).animate({marginLeft: -314 * index}, 300);
        })
        $('.zhongce-right').click(function () {
            if (index == len) {
                $('.zc-crs').css('marginLeft', 0)
                index = 0;
            }
            index++;
            $('.zc-crs').stop(true).animate({marginLeft: -314 * index}, 300);
        })
        run();

        function run() {
            timer = setInterval(function () {
                index++;
                if (index >= len) {
                    index = 0;
                }
                $('.zc-crs').animate({marginLeft: -314 * index}, 200);
            }, 3000);
        }

        $('.zc-crs').mouseenter(function () {
            clearInterval(timer);
        }).mouseleave(function () {
            run();
        })
    })
//右侧底部选项卡
    $(function () {
        var index = 0;
        $('.feed-last-change').click(function () {
            $('.feed-last-change:eq(' + index + ')').removeClass('active-9');
            index = $(this).index() - 1;
            $('.feed-last-change:eq(' + index + ')').addClass('active-9');
        })
    })
    $(function () {
        var index = 0;
        $('.feed-last-change').click(function () {
            $('.chaozhi:eq(' + index + ')').removeClass('active-8');
            index = $(this).index() - 1;
            $('.chaozhi:eq(' + index + ')').addClass('active-8');
        })
    })
//中部大内容选项卡
    $(function () {
        $('.middle-menu1').click(function () {
            $('.middle2').removeClass('active-11')
            $('.middle').addClass('active-11')
        })
        $('.middle-menu2').click(function () {
            $('.middle').removeClass('active-11')
            $('.middle2').addClass('active-11')
        })
    })
    $(function () {
        $('.middle-menu1').click(function () {
            $('.middle-menu2').removeClass('active-12')
            $('.middle-menu1').addClass('active-12')
        })
        $('.middle-menu2').click(function () {
            $('.middle-menu1').removeClass('active-12')
            $('.middle-menu2').addClass('active-12')
        })
    })
    $('.middle-menu li').click(function () {
        $(document.documentElement).animate({scrollTop: 1005}, 1000)
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
    var ul = document.querySelector('.middle')
    var bool = true;
    var pagenation = 1;
    window.onscroll = function () {
        var page = document.documentElement.scrollHeight;
        var scroll = document.documentElement.scrollTop;
        var client = document.documentElement.clientHeight;
        if (page - scroll - client <= 1500) {
            if (bool) {
                bool = false;
                if (pagenation < 5) {
                    var tmp = '';
                    pagenation++;
                    get('assets/php/1.php?pagenation=' + pagenation, function (data) {
                        data.forEach(function (value, key) {
                            tmp+='<li>'
                           tmp+='<h5><a href="">'+value.title+'<span>'+value.baoyou+'</span></a></h5>';
                            tmp+='<div class="mld-li-ctn"><img src="'+value.img+'" alt=""><div class="mld-li-ctn-right"><div class="feed-block-info"><span>'+value.author+'</span><span>标签：</span><a href="">'+value.renwu+'</a><a href="">'+value.liwu+'</a><div class="feed-block-info-mid"><strong>'+value.jingzhi+'</strong>'+value.pinpai+'<a href="">阅读全文</a></div><div class="feed-block-info-btm"><div class="feed-block-info-btm-big"><a class="feed-block-info-btm1" href="">值 0</a><a class="feed-block-info-btm2" href="">值 0</a></div><i class="iconfont icon-xingxing"></i><span>2</span><i class="iconfont icon-xiaoxi"></i><span>1</span></div><div class="feed-block-info-mid-right"><span>19:25</span><a href="">什么值得买</a><div class="feed-block-info-mid-right-last"><em>去购买></em></div></div></div></div></div>'
                            tmp+='</li>'
                        })
                        ul.innerHTML += tmp;
                        bool = true;
                    })
                }
            }
        }
    }
})


