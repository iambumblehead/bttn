// Filename: bttn.js
// Timestamp: 2013.12.15-10:30:27 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)
// Requires: eventhook.js, elemst.js, lsn.js

var bttn = (function (proto, constructor) {

  proto = {
    isAllowEvent : false,
    onClickHook : null, // eventhook
    elem : null,

    addListener : lsn,

    // should be redefined
    stopDefaultEvent : function(e) {
      if (typeof e === 'object' && e) {
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
      }
    },

    isActive : function () {
      return elemst.is(this.elem, 'bttn-active');
    },
    activate : function () {
      elemst.up(this.elem, 'bttn-active');
    },
    deactivate : function () {
      elemst.up(this.elem, 'bttn-inactive');
    },

    addClickFn : function (fn) {
      this.atClickHook.addFn(fn);
    },

    clickFire : function (event) {
      this.atClickHook.fire(event);
    },

    attach : function () {
      var that = this,
          elem = that.elem;
      
      if (!elemst.is(elem, 'bttn-active')) {
        elemst.up(elem, 'bttn-inactive');
      }

      that.addListener(elem, 'click', function (event) {
        that.clickFire(event);
        return that.isAllowEvent || that.stopDefaultEvent(event);
      });

      if (that.onFocus) {
        that.addListener(elem, 'focus', function (event) {
          that.clickFire(event);
        });
      }
    }
  };

  constructor = function (spec) {
    var that = Object.create(proto);

    if (typeof spec.elem === 'object') {
      that.elem = spec.elem;
    } else if (typeof spec.elemId === 'string') {
      that.elem = document.getElementById(spec.elemId);
    }

    if (!that.elem) {
      throw new Error('error initializing button: ' + spec.name + ' ' + spec.elemId);
    }

    that.atClickHook = eventhook.getNew();

    if (spec.onClick) that.addClickFn(spec.onClick);
    if (spec.onFocus) that.onFocus = true;
    if (spec.isAllowEvent !== false) that.isAllowEvent = spec.isAllowEvent;
    if (spec.isAttach !== false) that.attach();

    return that;
  };

  constructor.proto = proto;

  return constructor;

}());
