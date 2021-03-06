export default function animate(frames, resolve) {
  if (frames.length === 0) {
    resolve();
    return;
  }
  for (const nodeChange of frames[0]) {
    const node = document.getElementById(
      `row-${nodeChange.node[0]}-col-${nodeChange.node[1]}`
    );
    const newClass = node.className
      .split(" ")
      .filter((c) => !c.startsWith("bg"));
    node.className = newClass.join(" ").trim();
    node.classList.add(nodeChange.colour);
  }
  requestAnimationFrame(() => animate(frames.slice(1), resolve));
}
