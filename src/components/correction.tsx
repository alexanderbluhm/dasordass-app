import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const getComponents = (result) => {
  const components: React.ReactElement[] = [];
  let sentence = result.sentence as string;
  let start = 0;
  for (let i = 0; i < result.positions.length; i++) {
    const pos: [number, number] = result.positions[i];
    const length = pos[1] - pos[0];
    // 0 -> das, 1 -> dass
    const lengths = [2, 3];
    const isCorrect = lengths[Math.round(result.results[i])] == length;
    components.push(<>{sentence.slice(start, pos[0])}</>);
    components.push(<span className={clsx("px-1 py-0.5 rounded-sm font-medium text-white", { "bg-green-600": isCorrect, "bg-red-600": !isCorrect })}>{sentence.slice(pos[0], pos[1] + 1)}</span>);
    start = pos[1] + 1;
  }
  if (result.positions.length > 0) components.push(<>{sentence.slice(result.positions[result.positions.length - 1][1] + 1)}</>);
  else components.push(<>{sentence}</>);
  return components;
};

export const Correction = ({ result }: any) => {
  return (
    <li>
      <motion.span initial={{ height: 0 }} animate={{ height: "auto" }}>
        {getComponents(result)}
      </motion.span>
    </li>
  );
};
