import ReactFiberReconciler from "react-reconciler";
import HostConfig from "./ReactKonvaHostConfig";

//--组件维护区
//---文本
export const Text = "Text";
//--图像
export const Image = "Image";
export const Canvas = "Canvas";
//--路径
export const Path = "Path";
export const Pen = "Pen";
//--图形
export const Rect = "Rect";
export const Ellipse = "Ellipse";
export const Polygon = "Polygon";
export const Star = "Star";
export const Line = "Line";
//--容器
export const Frame = "Frame";
export const Box = "Box";
export const Group = "Group";

export const LeaferRenderer = ReactFiberReconciler(HostConfig);
