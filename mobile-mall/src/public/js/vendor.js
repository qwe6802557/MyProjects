// import 'babel-polyfill';
// import 'raf/polyfill';
// import 'react';
// import 'react-dom';
// import 'react-router-dom';
// import 'redux';
// import 'react-redux';
// import 'prop-types';

// import 'fetch-default';


(function(win) {

    let oldFetch = fetch;

    class ModificationFetch {

        constructor(...opt) {

            this.opt = opt;

            this.init();

        }

        init() {

            this.oldFetchPromise = oldFetch(...this.opt);
            this.oldFetchPromise.abort = this.abort.bind(this.oldFetchPromise);
            this.oldThen = this.oldFetchPromise.then;
            this.oldFetchPromise.then = this.then.bind(this.oldFetchPromise, this.oldFetchPromise, this.oldFetchPromise, this.then, this.abort, this.oldThen);

        }

        then(oldFetchPromise, curFetchPromise, then, abort, oldThen, resFn = () => {}, rejFn = () => {}) {

            let afterPromise = oldThen.call(curFetchPromise, (...arg) => {
                oldFetchPromise.abort = abort.bind(afterPromise); //把第一个promise的abort上下文指向下一个promise
                if (this.__abort) afterPromise.__abort = this.__abort; // 传递 abort
                if (!this.__abort) return resFn(...arg); //没阻断
            }, (...arg) => {
                oldFetchPromise.abort = abort.bind(afterPromise); //把第一个promise的abort上下文指向下一个promise
                if (this.__abort) afterPromise.__abort = this.__abort; // 传递 abort
                if (!this.__abort) return rejFn(...arg);
            });

            afterPromise.abort = abort.bind(afterPromise);
            afterPromise.then = then.bind(afterPromise, oldFetchPromise, afterPromise, then, abort, oldThen);

            return afterPromise;

        }

        abort() {
            this.__abort = true;
        }

        getFetch() {
            return this.oldFetchPromise;
        }

    }

    let cacheFetch = [];

    win.fetch = (...opt) => {

        let modificationFetch = new ModificationFetch(...opt);

        let curFetchPromise = modificationFetch.getFetch();

        cacheFetch.push(curFetchPromise);

        return curFetchPromise;

    };

    win.fetch.abort = (abortNum = 10) => {

        cacheFetch
            .splice(-abortNum)
            .forEach((item) => {
                item.abort();
            });

        cacheFetch = [];

    };

    for (let s in oldFetch) {
        fetch[s] = oldFetch[s];
    }

})(window);

(function(win) {

    let oldFetch = fetch;

    win.fetch = (uri, ...rest) => {
        //整合所有opts
        let allOpts = Object.assign({}, opt, ...rest, {
            uri: uriPrefix ? (uriPrefix + uri) : uri
        });

        //请求前callback
        if (beforeSend) {
            beforeSend.call(allOpts, Object.assign({}, opt, ...rest));
        }

        let oldFetchPromise = oldFetch(allOpts.uri, allOpts);

        if (fail) oldFetchPromise = oldFetchPromise.then((response) => response, (reject) => fail.call(oldFetchPromise, reject));
        if (dataFilter) oldFetchPromise = oldFetchPromise.then((response) => dataFilter.call(oldFetchPromise, response));

        return oldFetchPromise;

    };

    let uriPrefix = '';
    let opt = {};
    let dataFilter;
    let fail;
    let beforeSend;

    fetch.default = (option = {}) => {

        assert(option);

        opt = option;
        uriPrefix = option.uriPrefix || '';
        dataFilter = option.dataFilter;
        fail = option.fail;
        beforeSend = option.beforeSend;

    };

    for (let s in oldFetch) {
        fetch[s] = oldFetch[s];
    }

    function assert(option) {
        if (Object.prototype.toString.call(option) !== '[object Object]') throw new Error('option is object!');
        if (option.uriPrefix && Object.prototype.toString.call(option.uriPrefix) !== '[object String]') throw new Error('uriPrefix is string!');
        if (option.dataFilter && typeof option.dataFilter !== 'function') throw new Error('dataFilter is function!');
        if (option.fail && typeof option.fail !== 'function') throw new Error('fail is function!');
        if (option.beforeSend && typeof option.beforeSend !== 'function') throw new Error('beforeSend is function!');
    }

})(window);




