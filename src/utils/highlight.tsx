export function getHighlightedText(item: string, textValue: string) {
  const highlightStyle = {
    backgroundColor: "var(--color-primary)",
    textDecoration: "underline",
  };
  const parts = item
    .split(new RegExp(`(${textValue})`, "gi"))
    .filter((text) => text !== "");
  const highlightedText = parts.shift();
  const otherParts = parts.join("");

  return (
    <>
      <span style={highlightStyle}>{highlightedText}</span>
      <span>{otherParts}</span>
    </>
  );
}
