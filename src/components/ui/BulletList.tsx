import { bulletList, typography } from "@/styles";

type TextStyle = "text" | "link";

type BulletListProps = {
  items: string[];
  textStyle?: TextStyle;
};

const styleMap = {
  text: typography.text,
  link: typography.link,
};

export function BulletList({ items, textStyle = "text" }: BulletListProps) {
  const itemClass = styleMap[textStyle];
  return (
    <ul className={bulletList.list}>
      {items.map((item, i) => (
        <li key={i} className={itemClass}>
          {item}
        </li>
      ))}
    </ul>
  );
}
