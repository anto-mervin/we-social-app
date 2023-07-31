/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { PostCard } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AmpligramOverridesProps = {
    Ampligram?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    "Frame 439"?: PrimitiveOverrideProps<ViewProps>;
    image29766764?: PrimitiveOverrideProps<ImageProps>;
    "Rene Brandel"?: PrimitiveOverrideProps<TextProps>;
    image29766769?: PrimitiveOverrideProps<ImageProps>;
    Options?: PrimitiveOverrideProps<FlexProps>;
    Share?: PrimitiveOverrideProps<FlexProps>;
    Donate?: PrimitiveOverrideProps<ButtonProps>;
    Upvote?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    Badge38484288?: PrimitiveOverrideProps<BadgeProps>;
    Badge38484293?: PrimitiveOverrideProps<BadgeProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Area?: PrimitiveOverrideProps<FlexProps>;
    "Firstname Lastname"?: PrimitiveOverrideProps<TextProps>;
    "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"?: PrimitiveOverrideProps<TextProps>;
    Milestone1?: PrimitiveOverrideProps<TextProps>;
    Milestone2?: PrimitiveOverrideProps<TextProps>;
    Milestone3?: PrimitiveOverrideProps<TextProps>;
    Milestone4?: PrimitiveOverrideProps<TextProps>;
    Milestone5?: PrimitiveOverrideProps<TextProps>;
    Milestone6?: PrimitiveOverrideProps<TextProps>;
    Milestone7?: PrimitiveOverrideProps<TextProps>;
    Milestone8?: PrimitiveOverrideProps<TextProps>;
    Conclusion?: PrimitiveOverrideProps<TextProps>;
    Timestamp?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AmpligramProps = React.PropsWithChildren<Partial<FlexProps> & {
    PostCard?: String;
    Card?: PostCard;
    display?: (event: SyntheticEvent) => void;
    block?: String;
    none?: String;
    form?: (event: SyntheticEvent) => void;
    ampligram?: React.ReactNode;
    area?: React.ReactNode;
} & {
    overrides?: AmpligramOverridesProps | undefined | null;
}>;
export default function Ampligram(props: AmpligramProps): React.ReactElement;
