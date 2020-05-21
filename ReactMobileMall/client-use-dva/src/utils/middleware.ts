import event from "utils/event";

const middleware = {
  //ajax错误处理
  commonErrorHandler(url) {
    return function(errorMsg) {
      console.error(`url:${url}`, errorMsg);
      // Toast.fail(errorMsg);
      throw errorMsg;
    };
  },
  //显示loading
  showLoading(txt = "加载中……") {
    event.emit("showLoading", {
      isLoadingShow: true,
      txt
    });
    setTimeout(() => {
      //默认3秒消失
      window.$hideLoading.call(null);
    }, 1000 * 3);
  },
  hideLoading() {
    event.emit("showLoading", {
      isLoadingShow: false
    });
  }
};
export default middleware;
