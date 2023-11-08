function initialize() {
    var e, t = {
        zoom: 13,
        scrollwheel: !1,
        center: new google.maps.LatLng(40.674389, -73.9455),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "custom_style"]
        },
        mapTypeId: "custom_style"
    };
    e = new google.maps.Map(document.getElementById("map-canvas"), t);
    var o = new google.maps.StyledMapType([{
        stylers: [{
            hue: "#f9f9f9"
        }, {
            visibility: "simplified"
        }, {
            gamma: .7
        }, {
            saturation: -200
        }, {
            lightness: 15
        }, {
            weight: .6
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            lightness: 30
        }, {
            visibility: "simplified"
        }]
    }, {
        elementType: "labels",
        stylers: [{
            visibility: "on"
        }]
    }, {
        featureType: "water",
        stylers: [{
            color: "#ffffff"
        }]
    }], {
        name: "Custom Style"
    });
    e.mapTypes.set("custom_style", o)
}
$('form[sbform="true"]').submit(function (e) {
    e.preventDefault();
    var t = $(this).attr("url"),
        o = $(this).attr("saveid"),
        l = $(this).find("button[type=submit]"),
        i = l.text();
    l.attr("disabled", "disabled"), l.text("Working..");
    var s = $(this);
    let a = {
        url: t
    };
    $(this).find("input").each(function () {
        a[$(this).attr("name")] = $(this).val()
    }), $(this).find("select").each(function () {
        a[$(this).attr("name")] = $(this).val()
    }), $(this).find("textarea").each(function () {
        a[$(this).attr("name")] = $(this).val()
    });
    var r = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(a)
    };
    $(o).html(""), $(o).show(), fetch("https://xsiqejr9uj.execute-api.ap-south-1.amazonaws.com/v1/zohoforms", r).then(e => {
        if (200 === e.status) return e.json();
        throw `error with status ${e.status}`
    }).then(e => {
        if (200 === e.statusCode) $(o).html('<div class="alert alert-success"> <strong>Success!</strong> Success</div>'), s[0].reset(), setTimeout(function () {
            $(o).hide(location.href = "https://unizest.co.uk/vlvstudyabroadconsultingservices/")
        }, 1000);
        else {
            var t = (new DOMParser).parseFromString(e.data, "text/html");
            let l = '<ul class="error_styles">';
            if (t.querySelector(".errMsg")) {
                console.log("follow this");
                var a = t.querySelectorAll(".errMsg p");
                for (var r of a) "" != r.textContent.trim() && (l += `<li>${r.innerHTML}</li>`)
            } else {
                a = t.querySelectorAll('div[style="margin:0 auto;" ] p');
                for (var r of a) "" != r.textContent.trim() && (l += `<li>${r.innerHTML}</li>`)
            }
            l += "</ul>", $(o).html('<div class="alert alert-danger">' + l + "</div>"), setTimeout(function () {
                $(o).hide()
            }, 500000)
        }
        l.removeAttr("disabled"), l.text(i)
    }).catch(e => {
        l.removeAttr("disabled"), l.text(i), $(o).html('<div class="alert alert-danger"> <strong>Error!</strong>Some error occured.</div>'), setTimeout(function () {
            $(o).hide()
        }, 1e4)
    })
}), jQuery(document).ready(function (e) {
    "use strict";
    e(".owl-slider-carousel").length && e(".owl-slider-carousel").owlCarousel({
        items: 3,
        itemsDesktop: [1e3, 3],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), e("#owl-demo-main").length && e("#owl-demo-main").owlCarousel({
        items: 1,
        itemsDesktop: [1e3, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: !1,
        autoPlay: 5e3
    }), e("#owl-demo-blog").length && (e("#owl-demo-blog").owlCarousel({
        items: 1,
        itemsDesktop: [1e3, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), e(".next").on("click", function () {
        owl.trigger("owl.next")
    }), e(".prev").on("click", function () {
        owl.trigger("owl.prev")
    })), e("#owl-demo-8").length && e("#owl-demo-8").owlCarousel({
        items: 4,
        itemsDesktop: [1e3, 3],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 1],
        itemsMobile: !1,
        navigation: !0,
        autoPlay: !0,
        autoPlay: 6e3,
        autoplayTimeout: 1e3
    }), e("#owl-demo-88").length && e("#owl-demo-88").owlCarousel({
        items: 4,
        itemsDesktop: [1e3, 3],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 1],
        itemsMobile: !1,
        navigation: !0,
        autoPlay: !0,
        autoPlay: 4e3,
        autoplayTimeout: 1e3
    }), e("#owl-demo-888").length && e("#owl-demo-888").owlCarousel({
        items: 3,
        itemsDesktop: [1e3, 3],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 1],
        itemsMobile: !1,
        navigation: !0,
        autoPlay: !0,
        autoPlay: 4e3,
        autoplayTimeout: 1e3
    }), e("#owl-demo-1").length && (e("#owl-demo-1").owlCarousel({
        items: 3,
        itemsDesktop: [1e3, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1]
    }), e(".next").on("click", function () {
        owl.trigger("owl.next")
    }), e(".prev").on("click", function () {
        owl.trigger("owl.prev")
    }), e(".play").on("click", function () {
        owl.trigger("owl.play", 1e3)
    }), e(".stop").on("click", function () {
        owl.trigger("owl.stop")
    })), e("#owl-demo-9").length && (e("#owl-demo-9").owlCarousel({
        items: 2,
        itemsDesktop: [1e3, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: [400, 1]
    }), e(".next").on("click", function () {
        owl.trigger("owl.next")
    }), e(".prev").on("click", function () {
        owl.trigger("owl.prev")
    }), e(".play").on("click", function () {
        owl.trigger("owl.play", 1e3)
    }), e(".stop").on("click", function () {
        owl.trigger("owl.stop")
    })), e("#owl-demo-23").length && e("#owl-demo-23").owlCarousel({
        autoPlay: 3e3,
        items: 1,
        itemsDesktop: [1e3, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: !1
    }), e("#select-menu").length && e("#select-menu").selectbox(), e("select").length && e("select").selectric(), e("#news").length && e("#news").vTicker(), e("#simple-menu").length && e("#simple-menu").sidr(), e("#responsive-menu-button").length && e("#responsive-menu-button").sidr({
        name: "sidr-main",
        source: "#navigation"
    }), e(".countdown").length && e(".countdown").downCount({
        date: "08/08/2019 12:00:00",
        offset: 1
    }), e(".counter").length && e(".counter").counterUp({
        delay: 10,
        time: 1e3
    }), e(".bxslider").length && e(".bxslider").bxSlider({
        pagerCustom: "#bx-pager"
    }), e(".progressbar").length && e(".progressbar").each(function () {
        var t = e(this),
            o = t.attr("data-perc"),
            l = parseInt(Math.round(5.56 * o), 10);

        function i() {
            var e = t.find(".bar").css("width"),
                o = Math.round(parseInt(e) / 5.56, 10),
                l = (parseInt(e), 10);
            t.find(".label").css("left", l), t.find(".perc").text(o + "%")
        }
        t.find(".bar").animate({
            width: l
        }, 25 * o), t.find(".label").append('<div class="perc"></div>'), i(), setInterval(i, 0)
    }), e("#filterable-item-holder-1").length && jQuery(window).load(function () {
        var t = jQuery("#filterable-item-holder-1");
        t.children().css("position", "relative"), t.masonry({
            singleMode: !0,
            itemSelector: ".filterable-item:not(.hide)",
            animate: !0,
            animationOptions: {
                duration: 800,
                queue: !1
            }
        }), jQuery(window).resize(function () {
            var e = t.children().filter(":first")();
            t.masonry({
                columnWidth: e,
                singleMode: !0,
                itemSelector: ".filterable-item:not(.hide)",
                animate: !0,
                animationOptions: {
                    duration: 800,
                    queue: !1
                }
            })
        }), jQuery("ul#filterable-item-filter-1 a").on("click", function (o) {
            jQuery(this).addClass("active"), jQuery(this).parents("li").siblings().children("a").removeClass("active"), o.preventDefault();
            var l = jQuery(this).attr("data-value");
            "All" == l || 0 == e(this).parent().index() ? t.children().each(function () {
                e(this).hasClass("hide") && (e(this).removeClass("hide"), e(this).fadeIn())
            }) : (t.children().not("." + l).each(function () {
                e(this).hasClass("hide") || (e(this).addClass("hide"), e(this).fadeOut())
            }), t.children("." + l).each(function () {
                e(this).hasClass("hide") && (e(this).removeClass("hide"), e(this).fadeIn())
            })), t.masonry()
        })
    }), e("area[data-rel^='prettyPhoto']").length && e("area[data-rel^='prettyPhoto']").prettyPhoto(), e(".edu_masonery_thumb a[data-rel^='prettyPhoto']").length && (e(".edu_masonery_thumb:first a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed: "normal",
        theme: "light_square",
        slideshow: 3e3,
        autoplay_slideshow: !0
    }), e(".edu_masonery_thumb:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({})), e(".gallery a[rel^='prettyPhoto']").length && (e(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: "normal",
        theme: "light_square",
        slideshow: 3e3,
        autoplay_slideshow: !0
    }), e(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({})), e(".show").on("click", function () {
        e(".searchform").slideToggle("slow", function () { })
    }), e("#map-canvas").length && google.maps.event.addDomListener(window, "load", initialize)
});