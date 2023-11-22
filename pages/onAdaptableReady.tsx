import { AdaptableReadyInfo } from "@adaptabletools/adaptable/types";

export const onAdaptableReady = ({ adaptableApi }: AdaptableReadyInfo) => {
  const optionsApi = adaptableApi.optionsApi;
  console.log(
    optionsApi.getAdaptableId(),
    " with user ",
    optionsApi.getUserName(),
    " is ready!",
  );
};
