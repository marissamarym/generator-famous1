/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name MyView
     * @constructor
     * @description
     */

    function MyView() {
        View.apply(this, arguments);
    }

    MyView.prototype = Object.create(View.prototype);
    MyView.prototype.constructor = MyView;

    MyView.DEFAULT_OPTIONS = {
    };

    module.exports = MyView;
});
