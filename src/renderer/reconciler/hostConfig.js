import { ComponentTypes } from '../../components'
import { App, Leafer, Ellipse, Rect, Polygon, Star, Line, Image, Canvas, Text, Path, Pen, UI, Frame, Box, Group } from 'leafer-ui'
export let currentContainer = null;
export default {
    supportsMutation: true,
    /** 
     * @param rootContainer  createContainer 的时候传入的第一个参数
     * @returns 
    */
    getRootHostContext(rootContainer) {
        // 使用一个变量保存一下 container，会用到
        currentContainer = rootContainer;
        return null;
    },
    /**
    * @param containerInfo createContainer 的时候传入的第一个参数
    */
    prepareForCommit(containerInfo) {
        return null;
    },

    /**
     * 
     * @param containerInfo createContainer 的时候传入的第一个参数
     */
    resetAfterCommit(containerInfo) {
        return null;
    },

    /**
     * 
     * @param type 组件
     * @param newProps props
     * @param containerInfo 容器 createContainer 的时候传入的第一个参数
    */
    createInstance(type, newProps, containerInfo) {
        let instance;
        switch (type) {
            case ComponentTypes.App:
                instance = new App(newProps);
                break;
            case ComponentTypes.Rect:
                instance = new Rect(newProps);
                break;
            case ComponentTypes.Ellipse:
                instance = new Ellipse(newProps)
                break;
            case ComponentTypes.Polygon:
                instance = new Polygon(newProps)
                break;
            case ComponentTypes.Star:
                instance = new Star(newProps)
                break;
            case ComponentTypes.Line:
                instance = new Line(newProps)
                break;
            case ComponentTypes.Image:
                instance = new Image(newProps)
                break;
            case ComponentTypes.Canvas:
                instance = new Canvas(newProps)
                break;
            case ComponentTypes.Path:
                instance = new Path(newProps)
                break;
            case ComponentTypes.Pen:
                instance = new Pen(newProps)
                break;
            case ComponentTypes.UI:
                instance = new UI(newProps)
                break;
            case ComponentTypes.Leafer:
                instance = new Leafer(newProps)
                break;
            case ComponentTypes.Frame:
                instance = new Frame(newProps)
                break;
            case ComponentTypes.Box:
                instance = new Box(newProps)
                break;
            case ComponentTypes.Group:
                instance = new Group(newProps)
                break;
            default:
                instance = null;
        }
        return instance
    },

    getChildHostContext(parentHostContext) {
        return parentHostContext;
    },

    shouldSetTextContent() {
        return false;
    },

    clearContainer() {
        return null;
    },

    finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
        return false
    },

    /**
    * 从 Container 中删除一个节点 该方法执行在 commit 阶段
    * 当组件被卸载的时候 需要调用此方法删除 container 中的对应 leafer 实例
    */
    removeChildFromContainer(container, child) {
        // removeAllChildText(container, child)
        // container.remove(child)
    },

    /**
    * 添加一个节点到 Container 中，该方法执行在 commit 阶段
    * 组件初次渲染的时候，需要调用此方法将 fabric 实例添加到 container 中
    */
    appendChildToContainer(container, child) {
        console.log('object');
        container.add(child);
        // appendAllChildText(container, child);
    },

    appendInitialChild(parentInstance, child) {
        // 这里暂时用不上，因为目前我们所有节点的父节点都是 Container
        // 所以目前只用实现 appendChildToContainer 就可以了
    },

    prepareUpdate(instance, type, oldProps, newProps) {
        return newProps
    },

    /**
    * 更新节点时需要用到 在 commit 阶段执行
    * 当前组件需要更新的时候，需要调用此方法更新 container 中的 leafer 实例
    */
    commitUpdate(instance, updatePayload, type, prevProps, nextProps, internalHandle) {
        // 更新节点
        // updateCircular(instance, nextProps)
        // 更新文本节点
        instance.set(updatePayload)
    },

    createTextInstance(text, rootContainer, hostContext, internalHandle) {
        const instance = new Text({
            text
        })
        rootContainer.add(instance)
        // console.log(rootContainer, hostContext, internalHandle);
        return;
    },
    removeAllChildText() {
        return null;
    },
    detachDeletedInstance() {
        return null;
    }
}