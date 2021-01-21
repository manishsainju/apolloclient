import React from "react";
import { useLazyQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_COUNTRIES = gql`
  query GetStore($hideUnavailableProducts: Boolean) {
    getStore(hideUnavailableProducts: $hideUnavailableProducts) {
      _id
      shopName
      products {
        _id
        products {
          name
          price
          image
          _id
          tags
          category
          description
          options {
            _id
            category
            maxSelect
            minSelect
          }
          available
        }
      }
    }
  }
`;
export function DelayedCountries() {
  const [getCountries, { loading, data }] = useLazyQuery(GET_COUNTRIES);
  if (loading) return <p>Loading ...</p>;

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <button onClick={() => getCountries()}>
        Click me to print all countries!
      </button>
      {data &&
        data.countries &&
        data.countries.map((c, i) => <div key={i}>{c.name}</div>)}
    </div>
  );
}
