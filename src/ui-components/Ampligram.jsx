/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Badge, Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Ampligram(props) {
  const {
    PostCard,
    Card,
    display,
    block,
    none,
    form,
    ampligram,
    area,
    overrides,
    ...rest
  } = props;
  const [upvoteColor, setUpvoteColor] = useStateMutationAction(undefined);
  const upvoteOnClick = () => {
    setUpvoteColor("#808080");
  };
  return (
    <Flex
      gap="8px"
      direction="column"
      width={800}
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Ampligram")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Header")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <View
            width="608px"
            height="65px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 439")}
          >
            <Image
              width="65px"
              height="65px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="160px"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              src={Card?.vounter_pic}
              {...getOverrideProps(overrides, "image29766764")}
            ></Image>
            <Text
              fontFamily="Poppins"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="209px"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="20.5px"
              left="81px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={Card?.Vounter_name}
              {...getOverrideProps(overrides, "Rene Brandel")}
            ></Text>
          </View>
        </Flex>
      </Flex>
      <Image
        width="unset"
        height="408px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={Card?.Preview_img}
        {...getOverrideProps(overrides, "image29766769")}
      ></Image>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 16px 16px"
        {...getOverrideProps(overrides, "Options")}
      >
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Share")}
        >
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="destructive"
            children="Donate"
            {...getOverrideProps(overrides, "Donate")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="primary"
            children="Upvote"
            color={upvoteColor}
            onClick={() => {
              upvoteOnClick();
            }}
            {...getOverrideProps(overrides, "Upvote")}
          ></Button>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="417px"
          height="unset"
          justifyContent="center"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 438")}
        ></Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 10px 0px 10px"
        {...getOverrideProps(overrides, "Frame 440")}
      >
        <Badge
          width="unset"
          height="30px"
          justifyContent="flex-end"
          shrink="0"
          size="default"
          variation="info"
          children={`${"Fund Needed: $"}${Card?.fund_needed}`}
          {...getOverrideProps(overrides, "Badge38484288")}
        ></Badge>
        <Badge
          width="unset"
          height="unset"
          justifyContent="flex-end"
          shrink="0"
          size="default"
          variation="success"
          children={`${"Total Upvotes: "}${Card?.TotalUpvotes}`}
          {...getOverrideProps(overrides, "Badge38484293")}
        ></Badge>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Body")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Area")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Card?.Title}
            {...getOverrideProps(overrides, "Firstname Lastname")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Card?.desp}
            {...getOverrideProps(
              overrides,
              "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.\u201D"
            )}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m1 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="unset"
            gap="unset"
            alignItems="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 1: "}${Card?.m1}`}
            {...getOverrideProps(overrides, "Milestone1")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m2 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 2: "}${Card?.m2}`}
            {...getOverrideProps(overrides, "Milestone2")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m3 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 3:"}${Card?.m3}`}
            {...getOverrideProps(overrides, "Milestone3")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m4 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 4: "}${Card?.m4}`}
            {...getOverrideProps(overrides, "Milestone4")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m5 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 5: "}${Card?.m5}`}
            {...getOverrideProps(overrides, "Milestone5")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m6 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 6:"}${Card?.m6}`}
            {...getOverrideProps(overrides, "Milestone6")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m7 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 7: "}${Card?.m7}`}
            {...getOverrideProps(overrides, "Milestone7")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display={Card?.m8 == "null" ? "none" : "block"}
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="608px"
            height="24px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"Milestone 8: "}${Card?.m8}`}
            {...getOverrideProps(overrides, "Milestone8")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Card?.conclusion}
            {...getOverrideProps(overrides, "Conclusion")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Card?.Location}
            {...getOverrideProps(overrides, "Timestamp")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
