import ShadTooltip from "@/components/common/shadTooltipComponent";
import { useDarkStore } from "@/stores/darkStore";
import { FaGithub } from "react-icons/fa";

export const GithubStarComponent = () => {
  const stars: number | undefined = useDarkStore((state) => state.stars);

  return '';
};

export default GithubStarComponent;
