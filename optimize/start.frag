(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else {
        root.SimileAjax = factory();
    }
}(this, function() {
