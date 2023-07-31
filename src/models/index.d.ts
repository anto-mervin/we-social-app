import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPostCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vounter_name?: string | null;
  readonly vounter_pic?: string | null;
  readonly fund_needed?: number | null;
  readonly Preview_img?: string | null;
  readonly TotalUpvotes?: number | null;
  readonly Title?: string | null;
  readonly desp?: string | null;
  readonly m1?: string | null;
  readonly Location?: string | null;
  readonly m2?: string | null;
  readonly m3?: string | null;
  readonly m4?: string | null;
  readonly m5?: string | null;
  readonly m6?: string | null;
  readonly m7?: string | null;
  readonly m8?: string | null;
  readonly conclusion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Vounter_name?: string | null;
  readonly vounter_pic?: string | null;
  readonly fund_needed?: number | null;
  readonly Preview_img?: string | null;
  readonly TotalUpvotes?: number | null;
  readonly Title?: string | null;
  readonly desp?: string | null;
  readonly m1?: string | null;
  readonly Location?: string | null;
  readonly m2?: string | null;
  readonly m3?: string | null;
  readonly m4?: string | null;
  readonly m5?: string | null;
  readonly m6?: string | null;
  readonly m7?: string | null;
  readonly m8?: string | null;
  readonly conclusion?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostCard = LazyLoading extends LazyLoadingDisabled ? EagerPostCard : LazyPostCard

export declare const PostCard: (new (init: ModelInit<PostCard>) => PostCard) & {
  copyOf(source: PostCard, mutator: (draft: MutableModel<PostCard>) => MutableModel<PostCard> | void): PostCard;
}