$(document).ready(function() {
  var radius = 80;

  var x, y;
  var prevX, prevY;

  var fade = true;

  const sketch = p => {
    p.setup = () => {
      let canvas = p.createCanvas(p.windowWidth, 500);
      canvas.parent('movida');

      p.background(255);
      p.stroke(255);

      x = p.width / 2;
      y = p.height / 2;

      prevX = x;
      prevY = y;

      p.stroke(255);
      p.strokeWeight(2);
      p.point(x, y);
    };

    p.draw = () => {
      var rnd = p.random(5, 200);
      if (!fade) {
        //noStroke();
        p.fill(0, 4);
        p.rect(0, 0, width, height);
      }

      var angle = (p.TWO_PI / 6) * p.floor(p.random(6));
      x += p.cos(angle) * rnd;
      y += p.sin(angle) * rnd;

      if (x < 0 || x > p.width) {
        x = prevX;
        y = prevY;
      }

      if (y < 0 || y > p.height) {
        x = prevX;
        y = prevY;
      }

      p.stroke(237, 34, 93, 20);
      p.strokeWeight(1);

      p.line(x, y, prevX, prevY);

      p.strokeWeight(4);
      p.point(x, y);

      prevX = x;
      prevY = y;
    };

    p.keyPressed = () => {
      if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    };
  };
  new p5(sketch);
});

$(function() {
  'use strict';

  /*===============================================
    Preloaders
  ===============================================*/
  var $body = $('body');

  $(window).on('load', function() {
    $body.addClass('loaded');
  });

  if ($body.attr('data-preloader') === '1') {
    $body.append(
      $("<div class='preloader preloader-1'><div><span></span></div></div>")
    );
  } else if ($body.attr('data-preloader') === '2') {
    $body.append(
      $(
        "<div class='preloader preloader-2'><div><svg class='loader-circular' viewBox='25 25 50 50'><circle class='loader-path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div></div>"
      )
    );
  }

  /*===============================================
    Navbar Menu
  ===============================================*/
  var nav = $('.nav');
  var navToggle = $('.nav-toggle-btn');

  //
  // Show Nav menu on Toggle //
  //
  navToggle.on('click', function(e) {
    var d = $('.nav-dropdown');
    var s = $('.sub-dropdown');
    var dMenu = $('.dropdown-menu');
    var sMenu = $('.sub-dropdown-menu');

    if (nav.hasClass('nav-show')) {
      nav.removeClass('nav-show');
      if (dMenu.hasClass('dropdown-menu-show')) {
        dMenu.removeClass('dropdown-menu-show');
        d.removeClass('dropdown-minus');
      }
      if (sMenu.hasClass('sub-dropdown-menu-show')) {
        sMenu.removeClass('sub-dropdown-menu-show');
        s.removeClass('sub-dropdown-minus');
      }
    } else {
      nav.addClass('nav-show');
    }
    e.stopPropagation();
  });

  //
  // Transform Navicon into X //
  //
  navToggle.on('click', function() {
    if (navToggle.hasClass('nav-toggle-close')) {
      navToggle.removeClass('nav-toggle-close');
    } else {
      navToggle.addClass('nav-toggle-close');
    }
  });

  //
  // Navbar Dropdown //
  //
  var dropdownBtn = $('.nav-dropdown .nav-link');
  var subDropdownBtn = $('.sub-dropdown a');

  dropdownBtn.on('click', function() {
    var d = $(this)
      .parent('.nav-dropdown')
      .children('.dropdown-menu');
    if (d.hasClass('dropdown-menu-show')) {
      d.removeClass('dropdown-menu-show');
    } else {
      d.addClass('dropdown-menu-show');
    }
  });

  subDropdownBtn.on('click', function(e) {
    var s = $(this)
      .parent('.sub-dropdown')
      .children('.sub-dropdown-menu');

    if (s.hasClass('sub-dropdown-menu-show')) {
      s.removeClass('sub-dropdown-menu-show');
    } else {
      s.addClass('sub-dropdown-menu-show');
    }
    e.stopPropagation();
  });

  //
  // Transform Plus into Minus //
  //
  dropdownBtn.on('click', function() {
    var m = $(this)
      .parent('.nav-dropdown')
      .children('.dropdown-menu');
    var d = $(this).parent('.nav-dropdown');

    if (m.hasClass('dropdown-menu-show')) {
      d.addClass('dropdown-minus');
    } else {
      d.removeClass('dropdown-minus');
    }
  });

  subDropdownBtn.on('click', function() {
    var m = $(this)
      .parent('.sub-dropdown')
      .children('.sub-dropdown-menu');
    var s = $(this).parent('.sub-dropdown');

    if (m.hasClass('sub-dropdown-menu-show')) {
      s.addClass('sub-dropdown-minus');
    } else {
      s.removeClass('sub-dropdown-minus');
    }
  });

  //
  // Close Nav Menu //
  //
  $(document).on('click', function(e) {
    if ($(e.target).closest('.nav').length === 0) {
      if (nav.hasClass('nav-show')) {
        var d = $('.dropdown-menu');
        var s = $('.sub-dropdown-menu');

        nav.removeClass('nav-show');
        if (d.hasClass('dropdown-menu-show')) {
          d.removeClass('dropdown-menu-show');
          $('.nav-dropdown').removeClass('dropdown-minus');
        }
        if (s.hasClass('sub-dropdown-menu-show')) {
          s.removeClass('sub-dropdown-menu-show');
          $('.sub-dropdown').removeClass('sub-dropdown-minus');
        }
      }
      if (navToggle.hasClass('nav-toggle-close')) {
        navToggle.removeClass('nav-toggle-close');
      }
    }
  });

  //
  // Prevent content jumping to top on click(href='#') //
  //
  $(".navbar a[href='#']").on('click', function(e) {
    e.preventDefault();
  });

  //
  // Position Toggle Button to the left if Nav is aligned left //
  //
  if (nav.hasClass('mr-auto')) {
    navToggle.addClass('left');
  }

  /*===============================================
    Fullscreen Toggle Menu
  ===============================================*/
  var toggleMenu = $('.fullscreen-menu');
  var toggleBtn = $('.fullscreen-toggle-btn');

  //
  // Show Menu on Toggle //
  //
  toggleBtn.on('click', function(e) {
    if (toggleMenu.hasClass('fullscreen-menu-show')) {
      toggleMenu.removeClass('fullscreen-menu-show');
    } else {
      toggleMenu.addClass('fullscreen-menu-show');
    }
    e.stopPropagation();
  });

  //
  // Hide Toggle button //
  //
  toggleBtn.on('click', function() {
    if (toggleBtn.hasClass('fullscreen-toggle-hide')) {
      toggleBtn.removeClass('fullscreen-toggle-hide');
    } else {
      toggleBtn.addClass('fullscreen-toggle-hide');
    }
  });

  //
  // Close Toggle menu //
  //
  $(document).on('click', function() {
    if (toggleMenu.hasClass('fullscreen-menu-show')) {
      toggleMenu.removeClass('fullscreen-menu-show');
      toggleBtn.removeClass('fullscreen-toggle-hide');
    }
  });

  /*===============================================
    Mega Menu
  ===============================================*/
  var megaMenuToggle = $('.nav-megadropdown');

  megaMenuToggle.on('click', function() {
    var m = $(this).children('.mega-menu');
    var l = $(this).children('.nav-link');
    if (m.hasClass('mega-menu-show')) {
      m.removeClass('mega-menu-show');
      l.removeClass('nav-link-minus');
    } else {
      m.addClass('mega-menu-show');
      l.addClass('nav-link-minus');
    }
  });

  //
  // Close Mega Menu //
  //
  var megaMenu = $('.mega-menu');

  navToggle.on('click', function() {
    if (megaMenu.hasClass('mega-menu-show')) {
      megaMenu.removeClass('mega-menu-show');
      $('.nav-link').removeClass('nav-link-minus');
    }
  });

  $(document).on('click', function(e) {
    if ($(e.target).closest('.nav').length === 0) {
      if (megaMenu.hasClass('mega-menu-show')) {
        megaMenu.removeClass('mega-menu-show');
        $('.nav-link').removeClass('nav-link-minus');
      }
    }
  });

  /*===============================================
    Search Form
  ===============================================*/
  var searchWrapper = $('.search-wrapper');
  var searchToggle = $('.search-toggle');

  //
  // Show Nav menu when Toggle button clicked //
  //
  searchToggle.on('click', function(e) {
    if (searchWrapper.hasClass('search-wrapper-show')) {
      searchWrapper.removeClass('search-wrapper-show');
    } else {
      searchWrapper.addClass('search-wrapper-show');
    }
    e.stopPropagation();
  });

  $(document).on('click', function(e) {
    if (
      $(e.target).closest(".search-wrapper div[class^='col-']").length === 0
    ) {
      if (searchWrapper.hasClass('search-wrapper-show')) {
        searchWrapper.removeClass('search-wrapper-show');
      }
    }
  });

  /*===============================================
    Portfolio
  ===============================================*/
  $('.portfolio-wrapper').imagesLoaded(function() {
    var $portfolioWrapper = $('.portfolio-wrapper').isotope({
      itemSelector: '.portfolio-item',
      transitionDuration: 300 // 0.3 second
    });
    var filter = $('.filter ul li');

    // Portfolio Filter //
    filter.on('click', function() {
      var filterValue = $(this).attr('data-filter');
      $portfolioWrapper.isotope({ filter: filterValue });

      filter.removeClass('active');
      $(this).addClass('active');
    });
  });

  //
  // Home Portfolio Carousel navigation //
  //
  var homePortfolioPrev = $('#homePortfolioPrev');
  var homePortfolioNext = $('#homePortfolioNext');

  homePortfolioNext.on('click', function() {
    $('#homePortfolioSlider').trigger('next.owl.carousel', [300]);
  });
  homePortfolioPrev.on('click', function() {
    $('#homePortfolioSlider').trigger('prev.owl.carousel', [300]);
  });

  /*===============================================
    Blog Masonry
  ===============================================*/
  $(window).on('load', function() {
    $('.blog-masonry').masonry({
      itemSelector: '.blog-post-box'
    });
  });

  //
  // Lightbox - Gallery //
  //
  $('.gallery-wrapper').each(function() {
    $(this).magnificPopup({
      delegate: 'a',
      removalDelay: '200',
      type: 'image',
      fixedContentPos: false,
      gallery: {
        enabled: true
      },
      image: {
        titleSrc: 'data-gallery-title'
      }
    });
  });

  //
  // Countdown - Basic style //
  //
  $('.countdown-basic').each(function() {
    var finalDate = $(this).attr('data-countdown');

    $(this).countdown(finalDate, function(event) {
      $(this).html(event.strftime('%D days %H:%M:%S'));
    });
  });

  /*===============================================
    Popover
  ===============================================*/
  $('[data-toggle="popover"]').popover();

  /*===============================================
    Tooltip
  ===============================================*/
  $('[data-toggle="tooltip"]').tooltip();
});
