/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PostCard } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PostCardUpdateForm(props) {
  const {
    id: idProp,
    postCard: postCardModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Vounter_name: "",
    vounter_pic: "",
    fund_needed: "",
    Preview_img: "",
    TotalUpvotes: "",
    Title: "",
    desp: "",
    m1: "",
    Location: "",
    m2: "",
    m3: "",
    m4: "",
    m5: "",
    m6: "",
    m7: "",
    m8: "",
    conclusion: "",
  };
  const [Vounter_name, setVounter_name] = React.useState(
    initialValues.Vounter_name
  );
  const [vounter_pic, setVounter_pic] = React.useState(
    initialValues.vounter_pic
  );
  const [fund_needed, setFund_needed] = React.useState(
    initialValues.fund_needed
  );
  const [Preview_img, setPreview_img] = React.useState(
    initialValues.Preview_img
  );
  const [TotalUpvotes, setTotalUpvotes] = React.useState(
    initialValues.TotalUpvotes
  );
  const [Title, setTitle] = React.useState(initialValues.Title);
  const [desp, setDesp] = React.useState(initialValues.desp);
  const [m1, setM1] = React.useState(initialValues.m1);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [m2, setM2] = React.useState(initialValues.m2);
  const [m3, setM3] = React.useState(initialValues.m3);
  const [m4, setM4] = React.useState(initialValues.m4);
  const [m5, setM5] = React.useState(initialValues.m5);
  const [m6, setM6] = React.useState(initialValues.m6);
  const [m7, setM7] = React.useState(initialValues.m7);
  const [m8, setM8] = React.useState(initialValues.m8);
  const [conclusion, setConclusion] = React.useState(initialValues.conclusion);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = postCardRecord
      ? { ...initialValues, ...postCardRecord }
      : initialValues;
    setVounter_name(cleanValues.Vounter_name);
    setVounter_pic(cleanValues.vounter_pic);
    setFund_needed(cleanValues.fund_needed);
    setPreview_img(cleanValues.Preview_img);
    setTotalUpvotes(cleanValues.TotalUpvotes);
    setTitle(cleanValues.Title);
    setDesp(cleanValues.desp);
    setM1(cleanValues.m1);
    setLocation(cleanValues.Location);
    setM2(cleanValues.m2);
    setM3(cleanValues.m3);
    setM4(cleanValues.m4);
    setM5(cleanValues.m5);
    setM6(cleanValues.m6);
    setM7(cleanValues.m7);
    setM8(cleanValues.m8);
    setConclusion(cleanValues.conclusion);
    setErrors({});
  };
  const [postCardRecord, setPostCardRecord] = React.useState(postCardModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PostCard, idProp)
        : postCardModelProp;
      setPostCardRecord(record);
    };
    queryData();
  }, [idProp, postCardModelProp]);
  React.useEffect(resetStateValues, [postCardRecord]);
  const validations = {
    Vounter_name: [],
    vounter_pic: [{ type: "URL" }],
    fund_needed: [],
    Preview_img: [{ type: "URL" }],
    TotalUpvotes: [],
    Title: [],
    desp: [],
    m1: [],
    Location: [],
    m2: [],
    m3: [],
    m4: [],
    m5: [],
    m6: [],
    m7: [],
    m8: [],
    conclusion: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Vounter_name,
          vounter_pic,
          fund_needed,
          Preview_img,
          TotalUpvotes,
          Title,
          desp,
          m1,
          Location,
          m2,
          m3,
          m4,
          m5,
          m6,
          m7,
          m8,
          conclusion,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            PostCard.copyOf(postCardRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PostCardUpdateForm")}
      {...rest}
    >
      <TextField
        label="Vounter name"
        isRequired={false}
        isReadOnly={false}
        value={Vounter_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name: value,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.Vounter_name ?? value;
          }
          if (errors.Vounter_name?.hasError) {
            runValidationTasks("Vounter_name", value);
          }
          setVounter_name(value);
        }}
        onBlur={() => runValidationTasks("Vounter_name", Vounter_name)}
        errorMessage={errors.Vounter_name?.errorMessage}
        hasError={errors.Vounter_name?.hasError}
        {...getOverrideProps(overrides, "Vounter_name")}
      ></TextField>
      <TextField
        label="Vounter pic"
        isRequired={false}
        isReadOnly={false}
        value={vounter_pic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic: value,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.vounter_pic ?? value;
          }
          if (errors.vounter_pic?.hasError) {
            runValidationTasks("vounter_pic", value);
          }
          setVounter_pic(value);
        }}
        onBlur={() => runValidationTasks("vounter_pic", vounter_pic)}
        errorMessage={errors.vounter_pic?.errorMessage}
        hasError={errors.vounter_pic?.hasError}
        {...getOverrideProps(overrides, "vounter_pic")}
      ></TextField>
      <TextField
        label="Fund needed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={fund_needed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed: value,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.fund_needed ?? value;
          }
          if (errors.fund_needed?.hasError) {
            runValidationTasks("fund_needed", value);
          }
          setFund_needed(value);
        }}
        onBlur={() => runValidationTasks("fund_needed", fund_needed)}
        errorMessage={errors.fund_needed?.errorMessage}
        hasError={errors.fund_needed?.hasError}
        {...getOverrideProps(overrides, "fund_needed")}
      ></TextField>
      <TextField
        label="Preview img"
        isRequired={false}
        isReadOnly={false}
        value={Preview_img}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img: value,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.Preview_img ?? value;
          }
          if (errors.Preview_img?.hasError) {
            runValidationTasks("Preview_img", value);
          }
          setPreview_img(value);
        }}
        onBlur={() => runValidationTasks("Preview_img", Preview_img)}
        errorMessage={errors.Preview_img?.errorMessage}
        hasError={errors.Preview_img?.hasError}
        {...getOverrideProps(overrides, "Preview_img")}
      ></TextField>
      <TextField
        label="Total upvotes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalUpvotes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes: value,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.TotalUpvotes ?? value;
          }
          if (errors.TotalUpvotes?.hasError) {
            runValidationTasks("TotalUpvotes", value);
          }
          setTotalUpvotes(value);
        }}
        onBlur={() => runValidationTasks("TotalUpvotes", TotalUpvotes)}
        errorMessage={errors.TotalUpvotes?.errorMessage}
        hasError={errors.TotalUpvotes?.hasError}
        {...getOverrideProps(overrides, "TotalUpvotes")}
      ></TextField>
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={Title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title: value,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.Title ?? value;
          }
          if (errors.Title?.hasError) {
            runValidationTasks("Title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("Title", Title)}
        errorMessage={errors.Title?.errorMessage}
        hasError={errors.Title?.hasError}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <TextField
        label="Desp"
        isRequired={false}
        isReadOnly={false}
        value={desp}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp: value,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.desp ?? value;
          }
          if (errors.desp?.hasError) {
            runValidationTasks("desp", value);
          }
          setDesp(value);
        }}
        onBlur={() => runValidationTasks("desp", desp)}
        errorMessage={errors.desp?.errorMessage}
        hasError={errors.desp?.hasError}
        {...getOverrideProps(overrides, "desp")}
      ></TextField>
      <TextField
        label="M1"
        isRequired={false}
        isReadOnly={false}
        value={m1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1: value,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m1 ?? value;
          }
          if (errors.m1?.hasError) {
            runValidationTasks("m1", value);
          }
          setM1(value);
        }}
        onBlur={() => runValidationTasks("m1", m1)}
        errorMessage={errors.m1?.errorMessage}
        hasError={errors.m1?.hasError}
        {...getOverrideProps(overrides, "m1")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location: value,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      ></TextField>
      <TextField
        label="M2"
        isRequired={false}
        isReadOnly={false}
        value={m2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2: value,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m2 ?? value;
          }
          if (errors.m2?.hasError) {
            runValidationTasks("m2", value);
          }
          setM2(value);
        }}
        onBlur={() => runValidationTasks("m2", m2)}
        errorMessage={errors.m2?.errorMessage}
        hasError={errors.m2?.hasError}
        {...getOverrideProps(overrides, "m2")}
      ></TextField>
      <TextField
        label="M3"
        isRequired={false}
        isReadOnly={false}
        value={m3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3: value,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m3 ?? value;
          }
          if (errors.m3?.hasError) {
            runValidationTasks("m3", value);
          }
          setM3(value);
        }}
        onBlur={() => runValidationTasks("m3", m3)}
        errorMessage={errors.m3?.errorMessage}
        hasError={errors.m3?.hasError}
        {...getOverrideProps(overrides, "m3")}
      ></TextField>
      <TextField
        label="M4"
        isRequired={false}
        isReadOnly={false}
        value={m4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4: value,
              m5,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m4 ?? value;
          }
          if (errors.m4?.hasError) {
            runValidationTasks("m4", value);
          }
          setM4(value);
        }}
        onBlur={() => runValidationTasks("m4", m4)}
        errorMessage={errors.m4?.errorMessage}
        hasError={errors.m4?.hasError}
        {...getOverrideProps(overrides, "m4")}
      ></TextField>
      <TextField
        label="M5"
        isRequired={false}
        isReadOnly={false}
        value={m5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5: value,
              m6,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m5 ?? value;
          }
          if (errors.m5?.hasError) {
            runValidationTasks("m5", value);
          }
          setM5(value);
        }}
        onBlur={() => runValidationTasks("m5", m5)}
        errorMessage={errors.m5?.errorMessage}
        hasError={errors.m5?.hasError}
        {...getOverrideProps(overrides, "m5")}
      ></TextField>
      <TextField
        label="M6"
        isRequired={false}
        isReadOnly={false}
        value={m6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6: value,
              m7,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m6 ?? value;
          }
          if (errors.m6?.hasError) {
            runValidationTasks("m6", value);
          }
          setM6(value);
        }}
        onBlur={() => runValidationTasks("m6", m6)}
        errorMessage={errors.m6?.errorMessage}
        hasError={errors.m6?.hasError}
        {...getOverrideProps(overrides, "m6")}
      ></TextField>
      <TextField
        label="M7"
        isRequired={false}
        isReadOnly={false}
        value={m7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7: value,
              m8,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m7 ?? value;
          }
          if (errors.m7?.hasError) {
            runValidationTasks("m7", value);
          }
          setM7(value);
        }}
        onBlur={() => runValidationTasks("m7", m7)}
        errorMessage={errors.m7?.errorMessage}
        hasError={errors.m7?.hasError}
        {...getOverrideProps(overrides, "m7")}
      ></TextField>
      <TextField
        label="M8"
        isRequired={false}
        isReadOnly={false}
        value={m8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8: value,
              conclusion,
            };
            const result = onChange(modelFields);
            value = result?.m8 ?? value;
          }
          if (errors.m8?.hasError) {
            runValidationTasks("m8", value);
          }
          setM8(value);
        }}
        onBlur={() => runValidationTasks("m8", m8)}
        errorMessage={errors.m8?.errorMessage}
        hasError={errors.m8?.hasError}
        {...getOverrideProps(overrides, "m8")}
      ></TextField>
      <TextField
        label="Conclusion"
        isRequired={false}
        isReadOnly={false}
        value={conclusion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Vounter_name,
              vounter_pic,
              fund_needed,
              Preview_img,
              TotalUpvotes,
              Title,
              desp,
              m1,
              Location,
              m2,
              m3,
              m4,
              m5,
              m6,
              m7,
              m8,
              conclusion: value,
            };
            const result = onChange(modelFields);
            value = result?.conclusion ?? value;
          }
          if (errors.conclusion?.hasError) {
            runValidationTasks("conclusion", value);
          }
          setConclusion(value);
        }}
        onBlur={() => runValidationTasks("conclusion", conclusion)}
        errorMessage={errors.conclusion?.errorMessage}
        hasError={errors.conclusion?.hasError}
        {...getOverrideProps(overrides, "conclusion")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || postCardModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || postCardModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
