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
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Post>>;
  appraisals?: Maybe<Array<Appraisal>>;
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
  bindPostId: Scalars['String'];
  bindPost: Post;
  creatorId: Scalars['String'];
  creator: User;
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
};

export type CreatePostArgs = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  categoriesId?: Maybe<Array<Scalars['String']>>;
  tagsId?: Maybe<Array<Scalars['String']>>;
  creatorId: Scalars['String'];
  videos?: Maybe<Array<CreateVideoArgsWithPost>>;
};

export type UpdatePostArgs = {
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
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

export type UserRegisterInput = {
  username?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  lasted?: Maybe<Array<Post>>;
  recommend?: Maybe<Array<Post>>;
  postsById?: Maybe<Post>;
  postsByTitle?: Maybe<Array<Post>>;
  postsByCa?: Maybe<Category>;
  postsByTag?: Maybe<Tag>;
  users: Array<User>;
  user?: Maybe<User>;
  me?: Maybe<User>;
};


export type QueryPostsByIdArgs = {
  id: Scalars['String'];
};


export type QueryPostsByTitleArgs = {
  title: Scalars['String'];
};


export type QueryPostsByCaArgs = {
  caId: Scalars['String'];
};


export type QueryPostsByTagArgs = {
  tagId: Scalars['String'];
};


export type QueryUserArgs = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  editCategory: Scalars['Boolean'];
  addPostCategory: Scalars['Boolean'];
  delPostCategory: Scalars['Boolean'];
  posts: Array<Post>;
  createPost: Post;
  updatePost: Scalars['Boolean'];
  delectPost: Scalars['Boolean'];
  createTag: Tag;
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


export type MutationPostsArgs = {
  options: QueryPostsArgs;
};


export type MutationCreatePostArgs = {
  options: CreatePostArgs;
};


export type MutationUpdatePostArgs = {
  options: UpdatePostArgs;
};


export type MutationDelectPostArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTagArgs = {
  options: CreateTagArgs;
};


export type MutationEditTagArgs = {
  options: EditTagArgs;
};


export type MutationAddPostTagArgs = {
  options: DelTagArgs;
};


export type MutationRegisterArgs = {
  params: UserRegisterInput;
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

export type PostsMutationVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
  creatorId?: Maybe<Scalars['String']>;
  categoriesId?: Maybe<Array<Scalars['String']>>;
  tagsId?: Maybe<Array<Scalars['String']>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type PostsMutation = (
  { __typename?: 'Mutation' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'title' | 'id' | 'type' | 'cover' | 'createdAt'>
    & { categories?: Maybe<Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'name' | 'id'>
    )>>, tags?: Maybe<Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'name'>
    )>>, videos?: Maybe<Array<(
      { __typename?: 'Video' }
      & Pick<Video, 'episode' | 'id' | 'title' | 'playUrl'>
    )>> }
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
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

export type PostbyidQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostbyidQuery = (
  { __typename?: 'Query' }
  & { postsById?: Maybe<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )> }
);

export type LastedPostQueryVariables = Exact<{ [key: string]: never; }>;


export type LastedPostQuery = (
  { __typename?: 'Query' }
  & { lasted?: Maybe<Array<(
    { __typename?: 'Post' }
    & RegularPostFragment
  )>> }
);

export type PostsByTagQueryVariables = Exact<{
  tagId: Scalars['String'];
}>;


export type PostsByTagQuery = (
  { __typename?: 'Query' }
  & { postsByTag?: Maybe<(
    { __typename?: 'Tag' }
    & { posts?: Maybe<Array<(
      { __typename?: 'Post' }
      & RegularPostFragment
    )>> }
  )> }
);

export type PostsbytitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type PostsbytitleQuery = (
  { __typename?: 'Query' }
  & { postsByTitle?: Maybe<Array<(
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
export const PostsDocument = gql`
    mutation Posts($id: String, $type: Int, $creatorId: String, $categoriesId: [String!], $tagsId: [String!], $offset: Int, $limit: Int) {
  posts(
    options: {id: $id, type: $type, creatorId: $creatorId, categoriesId: $categoriesId, tagsId: $tagsId, offset: $offset, limit: $limit}
  ) {
    title
    id
    type
    cover
    createdAt
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
    }
  }
}
    `;
export type PostsMutationFn = Apollo.MutationFunction<PostsMutation, PostsMutationVariables>;

/**
 * __usePostsMutation__
 *
 * To run a mutation, you first call `usePostsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postsMutation, { data, loading, error }] = usePostsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      creatorId: // value for 'creatorId'
 *      categoriesId: // value for 'categoriesId'
 *      tagsId: // value for 'tagsId'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePostsMutation(baseOptions?: Apollo.MutationHookOptions<PostsMutation, PostsMutationVariables>) {
        return Apollo.useMutation<PostsMutation, PostsMutationVariables>(PostsDocument, baseOptions);
      }
export type PostsMutationHookResult = ReturnType<typeof usePostsMutation>;
export type PostsMutationResult = Apollo.MutationResult<PostsMutation>;
export type PostsMutationOptions = Apollo.BaseMutationOptions<PostsMutation, PostsMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $username: String, $password: String!, $bio: String, $avatar: String) {
  register(
    params: {email: $email, username: $username, password: $password, bio: $bio, avatar: $avatar}
  ) {
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
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      bio: // value for 'bio'
 *      avatar: // value for 'avatar'
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
export const PostbyidDocument = gql`
    query postbyid($id: String!) {
  postsById(id: $id) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __usePostbyidQuery__
 *
 * To run a query within a React component, call `usePostbyidQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostbyidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostbyidQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostbyidQuery(baseOptions: Apollo.QueryHookOptions<PostbyidQuery, PostbyidQueryVariables>) {
        return Apollo.useQuery<PostbyidQuery, PostbyidQueryVariables>(PostbyidDocument, baseOptions);
      }
export function usePostbyidLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostbyidQuery, PostbyidQueryVariables>) {
          return Apollo.useLazyQuery<PostbyidQuery, PostbyidQueryVariables>(PostbyidDocument, baseOptions);
        }
export type PostbyidQueryHookResult = ReturnType<typeof usePostbyidQuery>;
export type PostbyidLazyQueryHookResult = ReturnType<typeof usePostbyidLazyQuery>;
export type PostbyidQueryResult = Apollo.QueryResult<PostbyidQuery, PostbyidQueryVariables>;
export const LastedPostDocument = gql`
    query LastedPost {
  lasted {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __useLastedPostQuery__
 *
 * To run a query within a React component, call `useLastedPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastedPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastedPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useLastedPostQuery(baseOptions?: Apollo.QueryHookOptions<LastedPostQuery, LastedPostQueryVariables>) {
        return Apollo.useQuery<LastedPostQuery, LastedPostQueryVariables>(LastedPostDocument, baseOptions);
      }
export function useLastedPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LastedPostQuery, LastedPostQueryVariables>) {
          return Apollo.useLazyQuery<LastedPostQuery, LastedPostQueryVariables>(LastedPostDocument, baseOptions);
        }
export type LastedPostQueryHookResult = ReturnType<typeof useLastedPostQuery>;
export type LastedPostLazyQueryHookResult = ReturnType<typeof useLastedPostLazyQuery>;
export type LastedPostQueryResult = Apollo.QueryResult<LastedPostQuery, LastedPostQueryVariables>;
export const PostsByTagDocument = gql`
    query postsByTag($tagId: String!) {
  postsByTag(tagId: $tagId) {
    posts {
      ...RegularPost
    }
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __usePostsByTagQuery__
 *
 * To run a query within a React component, call `usePostsByTagQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsByTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsByTagQuery({
 *   variables: {
 *      tagId: // value for 'tagId'
 *   },
 * });
 */
export function usePostsByTagQuery(baseOptions: Apollo.QueryHookOptions<PostsByTagQuery, PostsByTagQueryVariables>) {
        return Apollo.useQuery<PostsByTagQuery, PostsByTagQueryVariables>(PostsByTagDocument, baseOptions);
      }
export function usePostsByTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsByTagQuery, PostsByTagQueryVariables>) {
          return Apollo.useLazyQuery<PostsByTagQuery, PostsByTagQueryVariables>(PostsByTagDocument, baseOptions);
        }
export type PostsByTagQueryHookResult = ReturnType<typeof usePostsByTagQuery>;
export type PostsByTagLazyQueryHookResult = ReturnType<typeof usePostsByTagLazyQuery>;
export type PostsByTagQueryResult = Apollo.QueryResult<PostsByTagQuery, PostsByTagQueryVariables>;
export const PostsbytitleDocument = gql`
    query postsbytitle($title: String!) {
  postsByTitle(title: $title) {
    ...RegularPost
  }
}
    ${RegularPostFragmentDoc}`;

/**
 * __usePostsbytitleQuery__
 *
 * To run a query within a React component, call `usePostsbytitleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsbytitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsbytitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function usePostsbytitleQuery(baseOptions: Apollo.QueryHookOptions<PostsbytitleQuery, PostsbytitleQueryVariables>) {
        return Apollo.useQuery<PostsbytitleQuery, PostsbytitleQueryVariables>(PostsbytitleDocument, baseOptions);
      }
export function usePostsbytitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsbytitleQuery, PostsbytitleQueryVariables>) {
          return Apollo.useLazyQuery<PostsbytitleQuery, PostsbytitleQueryVariables>(PostsbytitleDocument, baseOptions);
        }
export type PostsbytitleQueryHookResult = ReturnType<typeof usePostsbytitleQuery>;
export type PostsbytitleLazyQueryHookResult = ReturnType<typeof usePostsbytitleLazyQuery>;
export type PostsbytitleQueryResult = Apollo.QueryResult<PostsbytitleQuery, PostsbytitleQueryVariables>;