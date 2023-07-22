const hostConfig = {
  now: Date.now,
  getRootHostContext: () => {
    return rootHostContext;
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  getChildHostContext: () => {
    return childHostContext;
  },
  shouldSetTextContent: (type, props) => {
    // return (
    //   typeof props.children === "string" || typeof props.children === "number"
    // );
    return false;
  },
  /**
     This is where react-reconciler wants to create an instance of UI element in terms of the target. Since our target here is the DOM, we will create document.createElement and type is the argument that contains the type string like div or img or h1 etc. The initial values of domElement attributes can be set in this function from the newProps argument
     */
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    console.log("type", type);
    const domElement = document.createElement(type);
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === "string" || typeof propValue === "number") {
          domElement.textContent = propValue;
        }
      } else if (propName === "onClick") {
        domElement.addEventListener("click", propValue);
      } else if (propName === "className") {
        domElement.setAttribute("class", propValue);
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
    return domElement;
  },
  createTextInstance: (text) => {
    const content = new Text({
      fill: "rgb(50,205,121)",
      text,
    });
    // return document.createTextNode(text);
    return content;
  },
  appendInitialChild: (parent, child) => {
    console.log("append init child");
    // parent.appendChild(child);
  },
  appendChild(parent, child) {
    console.log("append child");
    // parent.appendChild(child);
  },
  finalizeInitialChildren: (domElement, type, props) => {},
  supportsMutation: true,
  //把元素渲染到画布
  appendChildToContainer: (parent, child) => {
    // parent.add(child);
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === "string" || typeof propValue === "number") {
          domElement.textContent = propValue;
        }
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.text = newText;
  },
  removeChild(parentInstance, child) {
    // parentInstance.removeChild(child);
    console.log("remove");
  },
  clearContainer: (container) => {
    //   container.canvas.clearRect(
    //     0,
    //     0,
    //     container.canvas.width,
    //     container.canvas.height
    //   );
  },
  detachDeletedInstance: () => {},
  removeChildFromContainer: (container, child) => {
    child.remove();
  },
};
export default hostConfig;
