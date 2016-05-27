$(document).ready(function(){
	
	//placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
            }
        })
    });
		
	//
	var ww = document.body.clientWidth;
	var wc = $('#container').width();
	var wh = $(window).height();
	
	
	$(document).ready(function() {
		adjustMenu();    
	});	
	$(window).load(function() {
		foot = $('.foot-in').outerHeight()
		$('#footer').height(foot);
        $('.view-more a').click(function() {            
            setTimeout(function(){  
                wc = $('#container').width();
                wh = $(window).height();
                adjustMenu();
            }, 500);    
        });
	});	
	$(window).bind('resize orientationchange', function() {
		ww = document.body.clientWidth;
		wc = $('#container').width();
		wh = $(window).height();
		foot = $('.foot-in').outerHeight()
		$('#footer').height(foot);
		
		adjustMenu();
		
		$('.nav.open').css({minHeight:wh+6});
		$(".box").removeClass("hover");
	});
	
	var adjustMenu = function() {				
		if (wc >= 640) {
			$('.nav').removeClass('open').removeAttr('style');
            $('.mobile-button').removeClass('open');
			$('.nav li').removeClass('open');
		}
		if (wc < 640) {
			
		}       
		else if (wc >= 480) {
			$('.list-col ul').removeAttr('style');
		}
		

		if (ww >= 768){
		  $(".center").css("width",$(".cont-in").width()-240).removeClass('mob');
		  
		} 
		else if (ww < 768){
		  $(".center").removeAttr('style').addClass('mob');
		  
		}
		
		
		if (wc < 1024) {
			$(".box").unbind('mouseenter mouseleave');
			$(".box").unbind('click').bind('click', function(e) {
				// must be attached to anchor element to prevent bubbling
				e.preventDefault();
				$(".box").not(this).removeClass("hover");
				$(this).toggleClass("hover");
			});
		}
		else if (wc >= 1024) {
			$(".box").removeClass("hover");
			$(".box").unbind('click');
			$(".box").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
				$(".box").not(this).removeClass("hover");
				$(this).toggleClass('hover');
			});
		}
		
	}
	
	$('.mobile-button').click(function() {			
		$(this).toggleClass('open');
		$('.nav').toggleClass('open');
		$('.nav.open').css({minHeight:wh+6});
	});
	
	$('.search .icon-search').click(function() {			
		$('.search-drop').toggleClass('active');
		$('.s-text').focus();
	});
	
     $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    });
    $('.nav a.parent').click(function() {          
        $(this).parent().siblings('li').not($(this).parent()).removeClass('open');
        $(this).parent().toggleClass('open');       
        return false;
    });
	
	//form styler
    $('select, .check input').styler();
	$('.add-file input').styler();

	
	//top sliders	
	$('.top-slider').slick({ 
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  arrows: false,
		fade: true,
		 asNavFor: '.top-thumbs'
	});

	$('.top-thumbs').slick({ 
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: false,
	  arrows: false,
		fade: false,
		vertical: true,
		asNavFor: '.top-slider',
		focusOnSelect: true
	});

    //
    $('.post-slider').slick({ 
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
        fade: true
    });
	
	//side slider
	$('.side-slider').slick({
	  slidesToShow: 1,
	  arrows: true,
	  dots: true,
	  speed: 200,
	  fade: true
	});

    $('.side-slider2').slick({
      slidesToShow: 1,
      arrows: true,
      dots: true,
      speed: 200,
      fade: true
    });
	
	//partners slider
	$('.slider-partn').slick({
	  slidesToShow: 7,
	  arrows: true,
	  slidesToScroll: 2,
	  //draggable: true,
	  //swipeToSlide: true,
	  infinite: true,
	  speed: 200,
	  responsive: [
		{
		  breakpoint: 1160,
		  settings: {
			slidesToShow: 6,
			arrows: true
		  }
		},
		{
		  breakpoint: 960,
		  settings: {
			slidesToShow: 5,
			arrows: true,
		  }
		},{
		  breakpoint: 800,
		  settings: {
			slidesToShow: 4,
			arrows: true
		  }
		},
		{
		  breakpoint: 640,
		  settings: {
			slidesToShow: 2,
			arrows: true
		  }
		}
	  ]
	});
	
	//news slider
	$('.news').slick({
	  slidesToShow: 8,
	  arrows: true,
	  slidesToScroll: 2,
	//draggable: true,
	  speed: 200,
	  responsive: [
		{
		  breakpoint: 1140,
		  settings: {
			slidesToShow: 7
		  }
		},
		{
		  breakpoint: 1000,
		  settings: {
			slidesToShow: 6
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 5
		  }
		},{
		  breakpoint: 700,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 640,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});

    //
    $('.user-menu-slider').slick({
      arrows: false,
      dots: false,
      speed: 200,
      infinite:false,
      variableWidth:true,
      slidesToShow: 3,
	   slidesToScroll: 2,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true
          }
        }
       ] 
    });

	//curstom scroll
	$(".scroll").mCustomScrollbar({
		axis:"y",
		scrollButtons:{enable:false},
		// advanced:{autoExpandHorizontalScroll:true},
		scrollInertia: 200,
        autoHideScrollbar: false,
        autoDraggerLength: false,
        contentTouchScroll: 150,

        // onTotalScrollOffset:0, 
        // alwaysTriggerOffsets:false,

        callbacks:{
            whileScrolling:function(){
                $(this).find('.mCSB_dragger').css('opacity', '1');
                if($("#current_user_list").is(":mcsInView")){
                    console.log("if mcsInView");
                    $('#current_user_list').addClass("highlight-class");
                }
                 else {
                    console.log("else mcsInView");
                    $('#current_user_list').removeClass("highlight-class");
                }
            },
            onScroll:function(){
                var scrollBar = $(this).find('.mCSB_dragger');
                setTimeout(function () {
                    scrollBar.css('opacity', '0');
                },1500);
            },
            onTotalScrollBack:function(){ 
                console.log("scrolled to top");
            }, 
            onTotalScroll:function(){ 
                console.log("scrolled to bottom");
            }, 
            onTotalScrollOffset: 150,
            onTotalScrollBackOffset: 150, 
            alwaysTriggerOffsets:false

        },
    });

    //curstom horizontal scroll
    $(".horizontal_scroll").mCustomScrollbar({
        axis:"x",
        // scrollButtons:{enable:false},
        advanced:{autoExpandHorizontalScroll:true},
        scrollInertia: 600,
        autoHideScrollbar: true,
        mouseWheel:{ enable: false },
        callbacks:{
            onScrollStart:function(){
                $(this).addClass('hide_arrow');
            }
        }
    });

    $(".scroll,.horizontal_scroll").mouseenter(function() {
        var scrollBar = $(this).find('.mCSB_dragger');

        scrollBar.css('opacity', '1');
        setTimeout(function () {
            scrollBar.css('opacity', '0');
        },1000);
    });

	//news tabs
	$('ul.tabs li:first-child').addClass('active');
	$('ul.tabs li').each(function(i) {
		$(this).click(function(){
			$(this).toggleClass('active').siblings().removeClass('active')
					.parents().find('.new-panes .news').eq($(this).index()).toggleClass('hid').siblings('.new-panes .news').addClass('hid');
		});
    });
	
	//footer menu toggle
	$('.list-col h5').click(function() {			
		$(this).toggleClass('active');
		$(this).next('ul').toggleClass('act');
	});
	
	$('.bask-link').click(function() {			
		$(this).next('.user-nav').toggle();
	});
	$(document).click(function(event) { 
		if($(event.target).parents().index($('.head-bask')) == -1) {
			$('.user-nav').hide();
		}        
	});

	// Countdown
	var endDate = "April 7, 2016 15:03:25";

    $('.countdown').countdown({
          date: endDate,
          onEnd: function() {
              $(this.el).closest('.slide_cont').find('.btn').attr('disabled', true);
          },
          render: function(data) {
            $(this.el).html("<div><span><b>" + this.leadingZeros(data.days, 2) + "</b>дней</span> <i>&nbsp;</i> <span><b>" + this.leadingZeros(data.hours, 2) + "</b>часов</span> <i>:</i> <span><b>" + this.leadingZeros(data.min, 2) + "</b>мин</span> <i>:</i> <span><b>" + this.leadingZeros(data.sec, 2) + "</b>сек</span></div>");
          },
    });
    $('.countdown2').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div><span class='zero'><b>" + this.leadingZeros(data.days, 2) + "</b>дней</span> <i>&nbsp;</i> <span><b>" + this.leadingZeros(data.hours, 2) + "</b>часов</span> <i>:</i> <span><b>" + this.leadingZeros(data.min, 2) + "</b>мин</span> <i>:</i> <span><b>" + this.leadingZeros(data.sec, 2) + "</b>сек</span></div>");
          }
    });

    //
    $('.fancy').fancybox();

    //concours slider   
    $('.conc-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        fade: false,
        pauseOnHover: true,
        autoplay: false,
        autoplaySpeed: 4000,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            console.log(slider);
            return  (i + 1) + ' из ' + slider.slideCount;
        }
    });

    //
    $('.boxes-slider').slick({      
      arrows: false,
      dots: false,
      slidesToScroll: 1,
      slidesToShow: 3,     
      speed: 200,
      variableWidth: true,
      infinite: false,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            dots: true
          }
        }
      ]
    });

    //
    $('.conc-list-slider').slick({      
      arrows: true,
      dots: false,
      slidesToScroll: 1,
      slidesToShow: 2,     
      speed: 200,
      responsive: [
        
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
             arrows: false,
            dots: true
          }
        }
      ]
    });

    //validate
    $("#form1").validate({
        messages: {
            email: {
                required: 'Вы не ввели e-mail'
            },
            password: {
                required: 'Вы не ввели пароль'
            }
        }
    });
    $("#form2").validate({
        messages: {
            email: {
                required: 'Вы не ввели e-mail'
            },
            username: {
                required: 'Вы не ввели имя пользователя'
            },
            password: {
                required: 'Вы не ввели пароль'
            }
        }
    });
    $("#form3").validate({
        messages: {
            email: {
                required: 'Вы не ввели e-mail'
            }
        }
    });

    //comm-add
    $('.comm-add textarea').click(function() {          
        $("html, body").animate({scrollTop: $(this).offset().top-15}, 1000);
    });
	
    // Button's more
    var vieContain = $('body').find('.limited__container').outerHeight();

    if (vieContain <= 1800 ) {
        $('.loadMore').hide();
    } else {
        $('.loadMore').show();
    };

    $('.loadMore').on('click', function(event) {
        event.preventDefault();
        $('.limited__container').css('maxHeight', 'none');
        $(this).css('position', 'static');
        $(this).parent().css('position', 'static');
    });


    // Change rate ajax
    var ajax_rating ={ 

        updInterval: 5000, // 5 сек. - интервал времени между запросами
        url: 'ajax.php', // скрипт который должен отвечать на Ajax запросы
        init: function(){
            var self = ajax_rating;
            setInterval($.proxy(ajax_rating.requestData, self), self.updInterval);
        },
          
        requestData: function(){
            var self = ajax_rating;
              
            $.ajax({
                url: self.url,
                type: 'GET',
                dataType: 'json',
                success: function(data){ 
                    console.log('Success');
                    $('.user_rate_inline').css('width', data.rateLineWidth).html(data.rateLinePoint + ' баллов');
                    $('.user_rate_level').html(data.rateLineLevel);
                }
            });
        },
    };

    ajax_rating.init();



    // .scrollTop()

});



//
/*
 * -- grayscale.js --
 * Copyright (C) James Padolsey (http://james.padolsey.com)
 *
 */

var grayscale = (function(){
    
    var config = {
            colorProps: ['color','backgroundColor','borderBottomColor','borderTopColor','borderLeftColor','borderRightColor','backgroundImage'],
            externalImageHandler : {
                /* Grayscaling externally hosted images does not work
                   - Use these functions to handle those images as you so desire */
                /* Out of convenience these functions are also used for browsers
                   like Chrome that do not support CanvasContext.getImageData */
                init : function(el, src) {
                    if (el.nodeName.toLowerCase() === 'img') {
                        // Is IMG element...
                    } else {
                        // Is background-image element:
                        // Default - remove background images
                        data(el).backgroundImageSRC = src;
                        el.style.backgroundImage = '';
                    }
                },
                reset : function(el) {
                    if (el.nodeName.toLowerCase() === 'img') {
                        // Is IMG element...
                    } else {
                        // Is background-image element:
                        el.style.backgroundImage = 'url(' + (data(el).backgroundImageSRC || '') + ')';
                    }
                }
            }
        },
        log = function(){
            try { window.console.log.apply(console, arguments); }
            catch(e) {};
        },
        isExternal = function(url) {
            // Checks whether URL is external: 'CanvasContext.getImageData'
            // only works if the image is on the current domain.
            return (new RegExp('https?://(?!' + window.location.hostname + ')')).test(url);
        },
        data = (function(){
            
            var cache = [0],
            expando = 'data' + (+new Date());
            
            return function(elem) {
                var cacheIndex = elem[expando],
                    nextCacheIndex = cache.length;
                if(!cacheIndex) {
                    cacheIndex = elem[expando] = nextCacheIndex;
                    cache[cacheIndex] = {};
                }
                return cache[cacheIndex];
            };
            
        })(),
        desatIMG = function(img, prepare, realEl) {
            
            // realEl is only set when img is temp (for BG images)
            
            var canvas = document.createElement('canvas'),
                context = canvas.getContext('2d'),
                height = img.naturalHeight || img.offsetHeight || img.height,
                width = img.naturalWidth || img.offsetWidth || img.width,
                imgData;
                
            canvas.height = height;
            canvas.width = width;
            context.drawImage(img, 0, 0);
            try {
                imgData = context.getImageData(0, 0, width, height);
            } catch(e) {}
            
            if (prepare) {
                desatIMG.preparing = true;
                // Slowly recurse through pixels for prep,
                // :: only occurs on grayscale.prepare()
                var y = 0;
                (function(){
                    
                    if (!desatIMG.preparing) { return; }
                    
                    if (y === height) {
                        // Finished!
                        context.putImageData(imgData, 0, 0, 0, 0, width, height);
                        realEl ? (data(realEl).BGdataURL = canvas.toDataURL())
                               : (data(img).dataURL = canvas.toDataURL())
                    }
                    
                    for (var x = 0; x < width; x++) {
                        var i = (y * width + x) * 4;
                        // Apply Monoschrome level across all channels:
                        imgData.data[i] = imgData.data[i+1] = imgData.data[i+2] =
                        RGBtoGRAYSCALE(imgData.data[i], imgData.data[i+1], imgData.data[i+2]);
                    }
                    
                    y++;
                    setTimeout(arguments.callee, 0);
                    
                })();
                return;
            } else {
                // If desatIMG was called without 'prepare' flag
                // then cancel recursion and proceed with force! (below)
                desatIMG.preparing = false;
            }
            
            for (var y = 0; y < height; y++) {
                for (var x = 0; x < width; x++) {
                    var i = (y * width + x) * 4;
                    // Apply Monoschrome level across all channels:
                    imgData.data[i] = imgData.data[i+1] = imgData.data[i+2] =
                    RGBtoGRAYSCALE(imgData.data[i], imgData.data[i+1], imgData.data[i+2]);
                }
            }
            
            context.putImageData(imgData, 0, 0, 0, 0, width, height);
            return canvas;
        
        },
        getStyle = function(el, prop) {
            var style = document.defaultView && document.defaultView.getComputedStyle ? 
                        document.defaultView.getComputedStyle(el, null)[prop]
                        : el.currentStyle[prop];
            // If format is #FFFFFF: (convert to RGB)
            if (style && /^#[A-F0-9]/i.test(style)) {
                    var hex = style.match(/[A-F0-9]{2}/ig);
                    style = 'rgb(' + parseInt(hex[0], 16) + ','
                                   + parseInt(hex[1], 16) + ','
                                   + parseInt(hex[2], 16) + ')';
            }
            return style;
        },
        RGBtoGRAYSCALE = function(r,g,b) {
            // Returns single monochrome figure:
            return parseInt( (0.2125 * r) + (0.7154 * g) + (0.0721 * b), 10 );
        },
        getAllNodes = function(context) {
            var all = Array.prototype.slice.call(context.getElementsByTagName('*'));
            all.unshift(context);
            return all;
        };
        
    var init = function(context) {
        
        // Handle if a DOM collection is passed instead of a single el:
        if (context && context[0] && context.length && context[0].nodeName) {
            // Is a DOM collection:
            var allContexts = Array.prototype.slice.call(context),
                cIndex = -1, cLen = allContexts.length;
            while (++cIndex<cLen) { init.call(this, allContexts[cIndex]); }
            return;
        }
        
        context = context || document.documentElement;
        
        if (!document.createElement('canvas').getContext) {
            context.style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)';
            context.style.zoom = 1;
            return;
        }
        
        var all = getAllNodes(context),
            i = -1, len = all.length;
            
        while (++i<len) {
            var cur = all[i];
            
            if (cur.nodeName.toLowerCase() === 'img') {
                var src = cur.getAttribute('src');
                if(!src) { continue; }
                if (isExternal(src)) {
                    config.externalImageHandler.init(cur, src);
                } else {
                    data(cur).realSRC = src;
                    try {
                        // Within try statement just encase there's no support....
                        cur.src = data(cur).dataURL || desatIMG(cur).toDataURL();
                    } catch(e) { config.externalImageHandler.init(cur, src); }
                }
                
            } else {
                for (var pIndex = 0, pLen = config.colorProps.length; pIndex < pLen; pIndex++) {
                    var prop = config.colorProps[pIndex],
                    style = getStyle(cur, prop);
                    if (!style) {continue;}
                    if (cur.style[prop]) {
                        data(cur)[prop] = style;
                    }
                    // RGB color:
                    if (style.substring(0,4) === 'rgb(') {
                        var monoRGB = RGBtoGRAYSCALE.apply(null, style.match(/\d+/g));
                        cur.style[prop] = style = 'rgb(' + monoRGB + ',' + monoRGB + ',' + monoRGB + ')';
                        continue;
                    }
                    // Background Image:
                    if (style.indexOf('url(') > -1) {
                        var urlPatt = /\(['"]?(.+?)['"]?\)/,
                            url = style.match(urlPatt)[1];
                        if (isExternal(url)) {
                            config.externalImageHandler.init(cur, url);
                            data(cur).externalBG = true;
                            continue;
                        }
                        // data(cur).BGdataURL refers to caches URL (from preparation)
                        try {
                            var imgSRC = data(cur).BGdataURL || (function(){
                                    var temp = document.createElement('img');
                                    temp.src = url;
                                    return desatIMG(temp).toDataURL();
                                })();
                            
                            cur.style[prop] = style.replace(urlPatt, function(_, url){
                                return '(' + imgSRC + ')';
                            });
                        } catch(e) { config.externalImageHandler.init(cur, url); }
                    }
                }
            }
        }
        
    };
    
    init.reset = function(context) {
        // Handle if a DOM collection is passed instead of a single el:
        if (context && context[0] && context.length && context[0].nodeName) {
            // Is a DOM collection:
            var allContexts = Array.prototype.slice.call(context),
                cIndex = -1, cLen = allContexts.length;
            while (++cIndex<cLen) { init.reset.call(this, allContexts[cIndex]); }
            return;
        }
        context = context || document.documentElement;
        if (!document.createElement('canvas').getContext) {
            context.style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=0)';
            return;
        }
        var all = getAllNodes(context),
            i = -1, len = all.length;
        while (++i<len) {
            var cur = all[i];
            if (cur.nodeName.toLowerCase() === 'img') {
                var src = cur.getAttribute('src');
                if (isExternal(src)) {
                    config.externalImageHandler.reset(cur, src);
                }
                cur.src = data(cur).realSRC || src;
            } else {
                for (var pIndex = 0, pLen = config.colorProps.length; pIndex < pLen; pIndex++) {
                    if (data(cur).externalBG) {
                        config.externalImageHandler.reset(cur);
                    }
                    var prop = config.colorProps[pIndex];
                    cur.style[prop] = data(cur)[prop] || '';
                }
            }
        }
    };
    
    init.prepare = function(context) {
        
        // Handle if a DOM collection is passed instead of a single el:
        if (context && context[0] && context.length && context[0].nodeName) {
            // Is a DOM collection:
            var allContexts = Array.prototype.slice.call(context),
                cIndex = -1, cLen = allContexts.length;
            while (++cIndex<cLen) { init.prepare.call(null, allContexts[cIndex]); }
            return;
        }
        
        // Slowly recurses through all elements
        // so as not to lock up on the user.
        
        context = context || document.documentElement;
        
        if (!document.createElement('canvas').getContext) { return; }
        
        var all = getAllNodes(context),
            i = -1, len = all.length;
        
        while (++i<len) {
            var cur = all[i];
            if (data(cur).skip) { return; }
            if (cur.nodeName.toLowerCase() === 'img') {
                if (cur.getAttribute('src') && !isExternal(cur.src)) {
                    desatIMG(cur, true);
                }
                
            } else {
                var style = getStyle(cur, 'backgroundImage');
                if (style.indexOf('url(') > -1) {
                    var urlPatt = /\(['"]?(.+?)['"]?\)/,
                        url = style.match(urlPatt)[1];
                    if (!isExternal(url)) {
                        var temp = document.createElement('img');
                        temp.src = url;
                        desatIMG(temp, true, cur);
                    }
                }
            }
        }
    };
    
    return init;


})();



$(window).load(function(){
	
    grayscale( $('.slider-partn img') );

    // baron({
    //     root: '.horizontall__clipper',
    //     scroller: '.horizontall__scroller',
    //     bar: '.horizontall__bar',
    //     scrollingCls: '_scrolling',
    //     draggingCls: '_dragging',
    //     direction: 'h',
    //     impact: 'scroller',
    // });

    $(".horizontall__scroller").scroll(function(){
        $(this).addClass('hide_arrow');
    });

    baron({
        impact:'scroller',
        // resizeDebounce: 2,
        root: '.baron',
        scroller: '.baron__scroller',
        bar: '.baron__bar',
        scrollingCls: '_scrolling',
        draggingCls: '_dragging'
    }).fix({
        elements: '.current_user',
        outside: 'current_user_state_fixed',
        before: 'current_user_position_top',
        after: 'current_user_position_bottom',
        clickable: true
    }).controls({
        // Element to be used as interactive track. Note: it could be different from 'track' param of baron.
        // track: '.baron__track',
        // forward: '.baron__down',
        // backward: '.baron__up'
    });

    $(".baron").mouseenter(function() {
        var scrollBar = $(this);

        scrollBar.addClass('_scrolling');
        setTimeout(function () {
            scrollBar.removeClass('_scrolling');
        },1000);
    });

    $('.table-nagrs').scroll(function() {
        getCurrentClass();
        // alert('scroll me');

    });
        getCurrentClass();
    $('.table-nagrs').load(function() {
        // alert('scroll me');

    });


    function getCurrentClass() {
        var listedEl = $('#current_user').hasClass('current_user_state_fixed');
        var listedEltop = $('#current_user').hasClass('current_user_position_top');
        var listedElbottom = $('#current_user').hasClass('current_user_position_bottom');

        // var topEl = $('#current_user__top');
        var bottomEl = $('#current_user__bottom');

        if (listedElbottom == true) {
            $(bottomEl).show();
        } else if (listedEl == false) {
            $(bottomEl).hide();
        }
    }

});

window.scrollBy(0, 1);
