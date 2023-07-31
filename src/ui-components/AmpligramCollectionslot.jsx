/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { PostCard } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Ampligram from "./Ampligram";
import { Collection } from "@aws-amplify/ui-react";
export default function AmpligramCollectionslot(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: PostCard,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="center"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "AmpligramCollectionslot")}
      {...rest}
    >
      {(item, index) => (
        <Ampligram
          Card={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Ampligram>
      )}
    </Collection>
  );
}
