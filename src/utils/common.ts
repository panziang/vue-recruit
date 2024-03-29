export const directives = (app: any) => {
  //自定义指令
  app.directive("debounce", {
    mounted(el: any, binding: any) {
      if (typeof binding.value !== "function") return;
      el.timer = null;
      el.handler = function () {
        if (el.timer) clearTimeout(el.timer);
        el.timer = setTimeout(() => {
          binding.value.apply(this, arguments);
        }, 600);
      };
      el.addEventListener("click", el.handler);
    },
    beforeUnmount(el: any, binding: any) {
      if (el.timer) {
        el.timer = null;
        clearTimeout(el.timer);
      }
      el.removeEventListener("click", el.handler);
    },
  });
};

export const common = {
  sex: function (type: Number) {
    if (type === 1) return "男";
    else if (type === 2) return "女";
    else return "";
  },
};
