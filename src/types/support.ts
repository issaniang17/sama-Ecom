import type { IconType } from "react-icons";
import type { JSX } from "react/jsx-runtime";

export type SupportProps = {
    titre:string;
    iconTitre: JSX.Element;
    iconArrow: IconType;
    iconX: JSX.Element;
    description:JSX.Element;
}