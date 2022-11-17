import { cardTypeForSlickSlider } from "./models/types.model";
interface IStorage<T> {
  setData(data: Array<T>): void;
  getSliderData(): Array<T>;
}
export class Storage implements IStorage<cardTypeForSlickSlider> {
  constructor() {}
  public setData<T>(data: T[]): void {
    if (!localStorage.getItem("dataForSlider")) {
      localStorage.setItem("dataForSlider", JSON.stringify(data));
    }
  }
  public getSliderData<T>(): T[] {
    if (localStorage.getItem("dataForSlider") != null) {
      return JSON.parse(localStorage.getItem("dataForSlider"));
    } else {
      return [];
    }
  }
}
