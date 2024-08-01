// import { ChangeEventHandler, FC } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "../UI/selector";
// import { ITextSize } from "../editor/editor-toolbar";

// interface Props {
//   onChange: (value: string) => void;
//   list: ITextSize[];
//   defaultValue: string; // Add defaultValue prop
// }

// export const DropDown: FC<Props> = ({
//   onChange,
//   list,
//   defaultValue, // Destructure defaultValue
// }): JSX.Element => {
//   return (
//     <Select defaultValue={defaultValue} onValueChange={onChange}>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue />
//       </SelectTrigger>
//       <SelectContent>
//           {list.map((li) => (
//             <SelectItem key={li.label} value={li.value}>{li.label}</SelectItem>
//           ))}
//       </SelectContent>
//     </Select>
//   );
// };
