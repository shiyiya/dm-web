import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type _BaseEntity = {
  __typename?: '_BaseEntity';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['Int'];
};


export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['Int'];
  title: Scalars['String'];
  playUrl: Scalars['String'];
  episode: Scalars['Int'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  bindPost: Post;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['Int'];
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  creator: User;
  videos?: Maybe<Array<Video>>;
  appraisals?: Maybe<Array<Appraisal>>;
  categories?: Maybe<Array<Category>>;
  tags?: Maybe<Array<Tag>>;
};

export type Appraisal = {
  __typename?: 'Appraisal';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['Int'];
  content: Scalars['String'];
  rate: Scalars['Int'];
  bindPost: Post;
  creator: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: Scalars['Int'];
  roleLevel: Scalars['Int'];
  resetPWDToken?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  appraisals?: Maybe<Array<Appraisal>>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type RegisterResonse = {
  __typename?: 'RegisterResonse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CreateCategoryArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type EditCategoryArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type DelCategoryArgs = {
  categoryId: Scalars['String'];
  postId: Scalars['String'];
};

export type OptionalVideoField = {
  title: Scalars['String'];
  playUrl: Scalars['String'];
  episode: Scalars['Float'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
};

export type CreateVideoArgsWithPost = {
  title: Scalars['String'];
  playUrl: Scalars['String'];
  episode: Scalars['Float'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  bindPostId?: Maybe<Scalars['String']>;
};

export type CreateVideoArgs = {
  title: Scalars['String'];
  playUrl: Scalars['String'];
  episode: Scalars['Float'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  bindPostId?: Maybe<Scalars['String']>;
};

export type EditVideoArgs = {
  title: Scalars['String'];
  playUrl: Scalars['String'];
  episode: Scalars['Float'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type OptionalPostField = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  categoriesId?: Maybe<Array<Scalars['String']>>;
  tagsId?: Maybe<Array<Scalars['String']>>;
  content?: Maybe<Scalars['String']>;
};

export type CreatePostArgs = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  categoriesId?: Maybe<Array<Scalars['String']>>;
  tagsId?: Maybe<Array<Scalars['String']>>;
  content?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<CreateVideoArgsWithPost>>;
};

export type UpdatePostArgs = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
};

export type QueryPostsArgs = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  creatorId?: Maybe<Scalars['String']>;
  categoriesId?: Maybe<Array<Scalars['String']>>;
  tagsId?: Maybe<Array<Scalars['String']>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type CreateTagArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type EditTagArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type DelTagArgs = {
  tagId: Scalars['String'];
  postId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  queryCategorys: Array<Category>;
  queryLastedPosts?: Maybe<Array<Post>>;
  queryRecommendPost?: Maybe<Array<Post>>;
  queryPostById?: Maybe<Post>;
  queryPostsByTitle?: Maybe<Array<Post>>;
  queryPostsByCa?: Maybe<Category>;
  queryPostsByTag?: Maybe<Tag>;
  queryTags: Array<Tag>;
  createTag: Tag;
  queryUsers: Array<User>;
  queryUser?: Maybe<User>;
  queryUsersByIds?: Maybe<Array<User>>;
  me?: Maybe<User>;
  queryVideos: Array<Video>;
};


export type QueryQueryCategorysArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryQueryPostByIdArgs = {
  id: Scalars['String'];
};


export type QueryQueryPostsByTitleArgs = {
  title: Scalars['String'];
};


export type QueryQueryPostsByCaArgs = {
  caId: Scalars['String'];
};


export type QueryQueryPostsByTagArgs = {
  tagId: Scalars['String'];
};


export type QueryQueryTagsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryCreateTagArgs = {
  options: CreateTagArgs;
};


export type QueryQueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryQueryUserArgs = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type QueryQueryUsersByIdsArgs = {
  ids?: Maybe<Array<Scalars['String']>>;
};


export type QueryQueryVideosArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  editCategory: Scalars['Boolean'];
  addPostCategory: Scalars['Boolean'];
  delPostCategory: Scalars['Boolean'];
  queryPosts: Array<Post>;
  createPost: Post;
  updatePost: Post;
  delPostById: Scalars['Boolean'];
  editTag: Scalars['Boolean'];
  addPostTag: Scalars['Boolean'];
  delPostTag: Scalars['Boolean'];
  register: RegisterResonse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createVideo: Video;
  editVideo: Scalars['Boolean'];
  delVideo: Scalars['Boolean'];
  addPostVideo: Scalars['Boolean'];
};


export type MutationCreateCategoryArgs = {
  options: CreateCategoryArgs;
};


export type MutationEditCategoryArgs = {
  options: EditCategoryArgs;
};


export type MutationAddPostCategoryArgs = {
  options: DelCategoryArgs;
};


export type MutationQueryPostsArgs = {
  options: QueryPostsArgs;
};


export type MutationCreatePostArgs = {
  options: CreatePostArgs;
};


export type MutationUpdatePostArgs = {
  options: UpdatePostArgs;
};


export type MutationDelPostByIdArgs = {
  id: Scalars['ID'];
};


export type MutationEditTagArgs = {
  options: EditTagArgs;
};


export type MutationAddPostTagArgs = {
  options: DelTagArgs;
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateVideoArgs = {
  options: CreateVideoArgs;
};


export type MutationEditVideoArgs = {
  options: EditVideoArgs;
};


export type MutationAddPostVideoArgs = {
  options: CreateVideoArgs;
};

export type RegularPostFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'title' | 'id' | 'type' | 'cover' | 'createdAt' | 'content'>
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'name' | 'id'>
  )>>, tags?: Maybe<Array<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name'>
  )>>, videos?: Maybe<Array<(
    { __typename?: 'Video' }
    & Pick<Video, 'episode' | 'id' | 'title' | 'playUrl' | 'cover'>
  )>> }
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & Pick<UserResponse, 'error'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  ) }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'RegisterResonse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type QueryPostByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryPostByIdQuery = (
  { __typename?: 'Query' }
  & { queryPostById?: Maybe<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )> }
);

export type QueryLastedPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryLastedPostsQuery = (
  { __typename?: 'Query' }
  & { queryLastedPosts?: Maybe<Array<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )>> }
);

export type QueryPostsByTagQueryVariables = Exact<{
  tagId: Scalars['String'];
}>;


export type QueryPostsByTagQuery = (
  { __typename?: 'Query' }
  & { queryPostsByTag?: Maybe<(
    { __typename?: 'Tag' }
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & RegularPostFragment
    )>> }
  )> }
);

export type QueryPostsByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type QueryPostsByTitleQuery = (
  { __typename?: 'Query' }
  & { queryPostsByTitle?: Maybe<Array<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )>> }
);

export const RegularPostFragmentDoc = gql`
    fragment RegularPost on Post {
  title
  id
  type
  cover
  createdAt
  content
  categories {
    name
    id
  }
  tags {
    id
    name
  }
  videos {
    episode
    id
    title
    playUrl
    cover
  }
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
    }
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    errors {
      field
      message
    }
    user {
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const QueryPostByIdDocument = gql`
    query queryPostById($id: String!) {
  queryPostById(id: $id) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __useQueryPostByIdQuery__
 *
 * To run a query within a React component, call `useQueryPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useQueryPostByIdQuery(baseOptions: Apollo.QueryHookOptions<QueryPostByIdQuery, QueryPostByIdQueryVariables>) {
        return Apollo.useQuery<QueryPostByIdQuery, QueryPostByIdQueryVariables>(QueryPostByIdDocument, baseOptions);
      }
export function useQueryPostByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryPostByIdQuery, QueryPostByIdQueryVariables>) {
          return Apollo.useLazyQuery<QueryPostByIdQuery, QueryPostByIdQueryVariables>(QueryPostByIdDocument, baseOptions);
        }
export type QueryPostByIdQueryHookResult = ReturnType<typeof useQueryPostByIdQuery>;
export type QueryPostByIdLazyQueryHookResult = ReturnType<typeof useQueryPostByIdLazyQuery>;
export type QueryPostByIdQueryResult = Apollo.QueryResult<QueryPostByIdQuery, QueryPostByIdQueryVariables>;
export const QueryLastedPostsDocument = gql`
    query queryLastedPosts {
  queryLastedPosts {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __useQueryLastedPostsQuery__
 *
 * To run a query within a React component, call `useQueryLastedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryLastedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryLastedPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryLastedPostsQuery(baseOptions?: Apollo.QueryHookOptions<QueryLastedPostsQuery, QueryLastedPostsQueryVariables>) {
        return Apollo.useQuery<QueryLastedPostsQuery, QueryLastedPostsQueryVariables>(QueryLastedPostsDocument, baseOptions);
      }
export function useQueryLastedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryLastedPostsQuery, QueryLastedPostsQueryVariables>) {
          return Apollo.useLazyQuery<QueryLastedPostsQuery, QueryLastedPostsQueryVariables>(QueryLastedPostsDocument, baseOptions);
        }
export type QueryLastedPostsQueryHookResult = ReturnType<typeof useQueryLastedPostsQuery>;
export type QueryLastedPostsLazyQueryHookResult = ReturnType<typeof useQueryLastedPostsLazyQuery>;
export type QueryLastedPostsQueryResult = Apollo.QueryResult<QueryLastedPostsQuery, QueryLastedPostsQueryVariables>;
export const QueryPostsByTagDocument = gql`
    query queryPostsByTag($tagId: String!) {
  queryPostsByTag(tagId: $tagId) {
    posts {
      ...RegularPost
    }
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __useQueryPostsByTagQuery__
 *
 * To run a query within a React component, call `useQueryPostsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryPostsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryPostsByTagQuery({
 *   variables: {
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function useQueryPostsByTagQuery(baseOptions: Apollo.QueryHookOptions<QueryPostsByTagQuery, QueryPostsByTagQueryVariables>) {
        return Apollo.useQuery<QueryPostsByTagQuery, QueryPostsByTagQueryVariables>(QueryPostsByTagDocument, baseOptions);
      }
export function useQueryPostsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryPostsByTagQuery, QueryPostsByTagQueryVariables>) {
          return Apollo.useLazyQuery<QueryPostsByTagQuery, QueryPostsByTagQueryVariables>(QueryPostsByTagDocument, baseOptions);
        }
export type QueryPostsByTagQueryHookResult = ReturnType<typeof useQueryPostsByTagQuery>;
export type QueryPostsByTagLazyQueryHookResult = ReturnType<typeof useQueryPostsByTagLazyQuery>;
export type QueryPostsByTagQueryResult = Apollo.QueryResult<QueryPostsByTagQuery, QueryPostsByTagQueryVariables>;
export const QueryPostsByTitleDocument = gql`
    query queryPostsByTitle($title: String!) {
  queryPostsByTitle(title: $title) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __useQueryPostsByTitleQuery__
 *
 * To run a query within a React component, call `useQueryPostsByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryPostsByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryPostsByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useQueryPostsByTitleQuery(baseOptions: Apollo.QueryHookOptions<QueryPostsByTitleQuery, QueryPostsByTitleQueryVariables>) {
        return Apollo.useQuery<QueryPostsByTitleQuery, QueryPostsByTitleQueryVariables>(QueryPostsByTitleDocument, baseOptions);
      }
export function useQueryPostsByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryPostsByTitleQuery, QueryPostsByTitleQueryVariables>) {
          return Apollo.useLazyQuery<QueryPostsByTitleQuery, QueryPostsByTitleQueryVariables>(QueryPostsByTitleDocument, baseOptions);
        }
export type QueryPostsByTitleQueryHookResult = ReturnType<typeof useQueryPostsByTitleQuery>;
export type QueryPostsByTitleLazyQueryHookResult = ReturnType<typeof useQueryPostsByTitleLazyQuery>;
export type QueryPostsByTitleQueryResult = Apollo.QueryResult<QueryPostsByTitleQuery, QueryPostsByTitleQueryVariables>;