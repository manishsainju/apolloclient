import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Sort {
    sortBy: String
    order: Int
  }

  extend type PaginationOptions {
    sort: Sort!
    page: Int
    limit: Int
    select: String
  }

  extend type DateFilterOptions {
    from: String!
    to: String!
  }
`;
