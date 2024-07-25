import { AppView } from "../types";
import EditView from "./EditView";
import HomeView from "./HomeView";
import ViewView from "./ViewView";

const views = {
  [AppView.HOME]: HomeView,
  [AppView.EDIT]: EditView,
  [AppView.VIEW]: ViewView,
};

export default views;