$(function(){
    $('.btn-login').mouseover(function(){
        $(this).find('.profile').show()
        $(this).find('img').addClass('profile-over-active')
    })
    $('.btn-login').mouseleave(function(){
        $(this).find('.profile').hide()
        $(this).find('img').removeClass('profile-over-active')

        
    })
    $('.vip').mousemove(function(){
        $(this).find('.vip-detail').show()
    })
    $('.vip').mouseleave(function(){
        $(this).find('.vip-detail').hide()
    })

    $('.collect').mousemove(function(){
        $(this).find('.hide').show()
    })
    $('.collect').mouseleave(function(e){
        $(this).find('.hide').hide()
        // console.log(e)
    })
    var heitht=$('.csdn-toolbar').outerHeight()
    $(window).bind('scroll',function(){
        var top=$(document).scrollTop()
        if(top>heitht){
            $('.csdn-toolbar').css({
                'position':'fixed'
            })
        }else{
            $('.csdn-toolbar').css({
                'position':'static'
            })
        }
        if(top>100){
            $('.main-left').css({
                'position':'fixed',
                'bottom':'0',
                'left': '14px'
   
            })
            $('.csdn-contain-right').css({
                'position':'fixed',
                'top':'48px',
                'right': '14px'
   
            })
        }else{
            $('.main-left').css({
                'position':'static'
            })
            $('.csdn-contain-right').css({
                'position':'static'
            })
            
        }
            
        
    })
})