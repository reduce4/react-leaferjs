import ReactReconciler from "react-reconciler";
import hostConfig from "./reconciler/hostConfig";
const reconciler = ReactReconciler(hostConfig);

export const render = (reactElement, domElement, callback) => {
  // 如果根容器不存在那就创建
  if (!domElement._rootContainer) {
    domElement._rootContainer = reconciler.createContainer(domElement, false);
  }
  //更新根容器
  return reconciler.updateContainer(
    reactElement,
    domElement._rootContainer,
    null,
    callback
  );
};
