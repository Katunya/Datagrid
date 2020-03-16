import _ from "lodash";

export default function Sort(sortField, environment) {
  const cloneData = environment.thirdData.data.concat();
  const sort = environment.secondData.data === "asc" ? "desc" : "asc";
  const arrow = environment.fifthData.data === "↓" ? "↑" : "↓";
  const data = _.orderBy(cloneData, sortField, sort);
  environment.setData(data);
  environment.changeSort(sort);
  environment.setSortTitle(sortField);
  environment.changeArrow(arrow);
}
