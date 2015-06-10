/**
 * Template Loader
 */
var $ = require('zepto'),
    config = require('runtime').config;

var TemplateManager = {
    caches: {},
    /**
     * 设置模板缓存
     * @param {int} id 模板id
     * @param {string} tpl 模板内容
     * @param {Array} styles 模板样式
     */
    set: function (id, tpl, styles) {
        var templateCache = {};
        templateCache.id = id;
        templateCache.styles = styles;
        this.caches[id] = templateCache;
    },
    /**
     *
     *
     */
    get: function (id, type) {
        if (!this.caches[id]) {
            return null;
        }
        var cache = this.caches[id];
        return cache;
    }
};


module.exports = {
    set: function (id, tpl, styles) {
        TemplateManager.set(id, tpl, styles);
    },
    get: function (id, callback) {
        if (callback) {
            callback(TemplateManager.get(id));
        } else {
            return TemplateManager.get(id);
        }
        
    }
};
