(function() {
  var app = angular.module('gemStore', []);


app.directive('productGallery', function() {
  return {
    restrict: 'E',
    templateUrl: 'product-gallery.html',
    controller: function() {
      this.current = 0;
      this.setCurrent = function(imageNumber) {
        this.current = imageNumber || 0;
      };
    },
    controllerAs: 'gallery'
  };
});
  

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  app.directive("productDescriptions", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "product-specs.html"
    };
  });

  app.directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  var gems = [
    {
      name: 'KD 8 id',
      description: "Dunk like a cool kids.",
      shine: 8,
      price: 320.00,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/shoes-01.png",
        "images/shoes-02.png",
        "images/shoes-03.png"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org"
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org"
      }]
    }, {
      name: 'Lunar Control iD',
      description: "Real shoes for you",
      shine: 9,
      price: 300.00,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/shoes-04.png",
        "images/shoes-05.png",
        "images/shoes-06.png"
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org"
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org"
      }]
      }, {
        name: 'Hyperdunk 2015 iD',
        description: "Fly like Michael Jordan",
        shine: 70,
        price: 260.00,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
          "images/shoes-07.png",
          "images/shoes-09.png",
          "images/shoes-01.png"
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org"
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org"
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org"
        }]
    }
  ];
})();