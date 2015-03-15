/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
Todo: needs to be adjustable for css width and height 

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('kenny.angular-7seg', []).directive('ut7seg', [ function () {
  var fonts = [
/*           [a, b, c, d, e, f, g] */

/*  45: - */ [0, 0, 0, 0, 0, 0, 1],
/*  46: . */ [0, 0, 0, 0, 0, 0, 0],
/*  47: / */ [0, 1, 0, 0, 1, 0, 1],
/*  48: 0 */ [1, 1, 1, 1, 1, 1, 0],
/*  49: 1 */ [0, 1, 1, 0, 0, 0, 0],
/*  50: 2 */ [1, 1, 0, 1, 1, 0, 1],
/*  51: 3 */ [1, 1, 1, 1, 0, 0, 1],
/*  52: 4 */ [0, 1, 1, 0, 0, 1, 1],
/*  53: 5 */ [1, 0, 1, 1, 0, 1, 1],
/*  54: 6 */ [1, 0, 1, 1, 1, 1, 1],
/*  55: 7 */ [1, 1, 1, 0, 0, 0, 0],
/*  56: 8 */ [1, 1, 1, 1, 1, 1, 1],
/*  57: 9 */ [1, 1, 1, 1, 0, 1, 1],
/*  58: : */ [0, 0, 0, 0, 0, 0, 0],
/*  59: ; */ [0, 0, 0, 0, 0, 0, 0],
/*  60: < */ [0, 0, 0, 0, 0, 0, 0],
/*  61: = */ [0, 0, 0, 1, 0, 0, 1],
/*  62: > */ [0, 0, 0, 0, 0, 0, 0],
/*  63: ? */ [0, 0, 0, 0, 0, 0, 0],
/*  64: @ */ [0, 0, 0, 0, 0, 0, 0],

/*  65: A */ [1, 1, 1, 0, 1, 1, 1],
/*  98: b */ [0, 0, 1, 1, 1, 1, 1],
/*  67: C */ [1, 0, 0, 1, 1, 1, 0],
/* 100: d */ [0, 1, 1, 1, 1, 0, 1],
/*  69: E */ [1, 0, 0, 1, 1, 1, 1],
/*  70: F */ [1, 0, 0, 0, 1, 1, 1],
/*  71: G */ [1, 0, 1, 1, 1, 1, 0],
/*  72: H */ [0, 1, 1, 0, 1, 1, 1],
/* 105: i */ [0, 0, 0, 0, 1, 0, 0],
/*  74: J */ [0, 1, 1, 1, 1, 0, 0],
/* 107: k */ [0, 1, 0, 1, 1, 1, 1],
/*  76: L */ [0, 0, 0, 1, 1, 1, 0],
/* 109: m */ [1, 0, 1, 0, 1, 0, 1],
/*  78: N */ [1, 1, 1, 0, 1, 1, 0],
/*  48: 0 */ [1, 1, 1, 1, 1, 1, 0],
/*  80: P */ [1, 1, 0, 0, 1, 1, 1],
/* 113: q */ [1, 1, 1, 0, 0, 1, 1],
/* 114: r */ [0, 0, 0, 0, 1, 0, 1],
/*  53: 5 */ [1, 0, 1, 1, 0, 1, 1],
/* 116: t */ [0, 0, 0, 1, 1, 1, 1],
/*  85: U */ [0, 1, 1, 1, 1, 1, 0],
/*  85: U */ [0, 1, 1, 1, 1, 1, 0],
/* 108: W */ [1, 0, 1, 1, 1, 0, 0],
/*  72: H */ [0, 1, 1, 0, 1, 1, 1],
/*  89: Y */ [0, 1, 1, 1, 0, 1, 1],
/*  50: 2 */ [1, 1, 0, 1, 1, 0, 1],

/*  67: C */ [1, 0, 0, 1, 1, 1, 0],
/*  92: \ */ [0, 0, 1, 0, 0, 1, 1],
/*  93: ] */ [1, 1, 1, 1, 0, 0, 0],
/*  94: ^ */ [0, 0, 0, 0, 0, 0, 0],
/*  95: _ */ [0, 0, 0, 1, 0, 0, 0],
/*  96: ` */ [0, 0, 0, 0, 0, 0, 0],

/*  97: a */ [1, 1, 1, 1, 1, 0, 1],
/*  98: b */ [0, 0, 1, 1, 1, 1, 1],
/*  99: c */ [0, 0, 0, 1, 1, 0, 1],
/* 100: d */ [0, 1, 1, 1, 1, 0, 1],
/* 101: e */ [1, 1, 0, 1, 1, 1, 1],
/*  70: F */ [1, 0, 0, 0, 1, 1, 1],
/*  57: 9 */ [1, 1, 1, 1, 0, 1, 1],
/* 104: h */ [0, 0, 1, 0, 1, 1, 1],
/* 105: i */ [0, 0, 0, 0, 1, 0, 0],
/* 106: j */ [0, 1, 1, 1, 0, 0, 0],
/* 107: k */ [0, 1, 0, 1, 1, 1, 1],
/*  76: L */ [0, 0, 0, 1, 1, 1, 0],
/* 109: m */ [1, 0, 1, 0, 1, 0, 1],
/* 110: n */ [0, 0, 1, 0, 1, 0, 1],
/* 111: o */ [0, 0, 1, 1, 1, 0, 1],
/*  80: P */ [1, 1, 0, 0, 1, 1, 1],
/* 113: q */ [1, 1, 1, 0, 0, 1, 1],
/* 114: r */ [0, 0, 0, 0, 1, 0, 1],
/*  53: 5 */ [1, 0, 1, 1, 0, 1, 1],
/* 116: t */ [0, 0, 0, 1, 1, 1, 1],
/* 117: u */ [0, 0, 1, 1, 1, 0, 0],
/*  85: U */ [0, 1, 1, 1, 1, 1, 0],
/* 108: W */ [1, 0, 1, 1, 1, 0, 0],
/*  72: H */ [0, 1, 1, 0, 1, 1, 1],
/*  89: Y */ [0, 1, 1, 1, 0, 1, 1],
/*  50: 2 */ [1, 1, 0, 1, 1, 0, 1]
  ];

  return {
    restrict: 'A',
    template: '<span class="seg-a" ng-show="font[0]"></span>'+
      '<span class="seg-b" ng-show="font[1]"></span>'+
      '<span class="seg-c" ng-show="font[2]"></span>'+
      '<span class="seg-d" ng-show="font[3]"></span>'+
      '<span class="seg-e" ng-show="font[4]"></span>'+
      '<span class="seg-f" ng-show="font[5]"></span>'+
      '<span class="seg-g" ng-show="font[6]"></span>'+
      '<span class="seg-dp" ng-show="font[7]"></span>'+
      '<span class="colon" ng-show="colon"></span>',
    scope:{
    },
    //
    link: function (scope, element, attrs) {
      scope.update=function(digit){
        if(!digit) digit=' ';
        var d = digit[0];
        var period = false;
        if(digit[1]=='.') period = true;
        var cls = {};
        angular.forEach(element.attr('class').split(' '), function(record, i){
          this[record]=true;
        }, cls);
        cls.sevenseg=true;
        scope.colon = false;
        if(d==':'){
          scope.colon = true;
          cls.colon=true;
        } else if(d=='.'){
          d=' ';
          period=true;
        }

        if(!scope.colon){
          var code = d.charCodeAt(0);
          var font = fonts[code - 45];
          if(!font) font=[0,0,0,0,0,0,0];
          scope.font = font.slice(0);
          if(period)
            scope.font.push(1);
        }

        element.attr('class', Object.keys(cls).join(' '));
      };
      attrs.$observe("ut7seg",function(d) {
        scope.update(d);
      }, true);
      scope.update(attrs.ut7seg);
    },
    //
		controller: function($scope, $element, $attrs) {
		},
  };

}]);
