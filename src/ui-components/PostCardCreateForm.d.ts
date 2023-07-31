/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostCardCreateFormInputValues = {
    Vounter_name?: string;
    vounter_pic?: string;
    fund_needed?: number;
    Preview_img?: string;
    TotalUpvotes?: number;
    Title?: string;
    desp?: string;
    m1?: string;
    Location?: string;
    m2?: string;
    m3?: string;
    m4?: string;
    m5?: string;
    m6?: string;
    m7?: string;
    m8?: string;
    conclusion?: string;
};
export declare type PostCardCreateFormValidationValues = {
    Vounter_name?: ValidationFunction<string>;
    vounter_pic?: ValidationFunction<string>;
    fund_needed?: ValidationFunction<number>;
    Preview_img?: ValidationFunction<string>;
    TotalUpvotes?: ValidationFunction<number>;
    Title?: ValidationFunction<string>;
    desp?: ValidationFunction<string>;
    m1?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    m2?: ValidationFunction<string>;
    m3?: ValidationFunction<string>;
    m4?: ValidationFunction<string>;
    m5?: ValidationFunction<string>;
    m6?: ValidationFunction<string>;
    m7?: ValidationFunction<string>;
    m8?: ValidationFunction<string>;
    conclusion?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostCardCreateFormOverridesProps = {
    PostCardCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Vounter_name?: PrimitiveOverrideProps<TextFieldProps>;
    vounter_pic?: PrimitiveOverrideProps<TextFieldProps>;
    fund_needed?: PrimitiveOverrideProps<TextFieldProps>;
    Preview_img?: PrimitiveOverrideProps<TextFieldProps>;
    TotalUpvotes?: PrimitiveOverrideProps<TextFieldProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    desp?: PrimitiveOverrideProps<TextFieldProps>;
    m1?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<TextFieldProps>;
    m2?: PrimitiveOverrideProps<TextFieldProps>;
    m3?: PrimitiveOverrideProps<TextFieldProps>;
    m4?: PrimitiveOverrideProps<TextFieldProps>;
    m5?: PrimitiveOverrideProps<TextFieldProps>;
    m6?: PrimitiveOverrideProps<TextFieldProps>;
    m7?: PrimitiveOverrideProps<TextFieldProps>;
    m8?: PrimitiveOverrideProps<TextFieldProps>;
    conclusion?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostCardCreateFormProps = React.PropsWithChildren<{
    overrides?: PostCardCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostCardCreateFormInputValues) => PostCardCreateFormInputValues;
    onSuccess?: (fields: PostCardCreateFormInputValues) => void;
    onError?: (fields: PostCardCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostCardCreateFormInputValues) => PostCardCreateFormInputValues;
    onValidate?: PostCardCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostCardCreateForm(props: PostCardCreateFormProps): React.ReactElement;
