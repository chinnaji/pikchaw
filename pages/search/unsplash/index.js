import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { searchUnsplash } from "../../../helpers/searchImages";
import Container from "../../../components/Container";
import ImageCards from "../../../components/ImageCards";
function index({ searchResults }) {
  const router = useRouter();
  const { total_pages, results } = searchResults;
  console.log(searchResults);
  return (
    <Container>
      <h1 className="text-xl my-5 font-semibold text-center">
        Showing results for - <u>{router.query.query}</u>
      </h1>
      <h1 className="text-xl my-5 font-semibold text-center">
        total pages - <u>{total_pages}</u>
      </h1>

      <div className="gap-4 pt-2 columns-2xs [column-fill:_balance]">
        {/* <ImageCards src={urls.regular}  /> */}

        {searchResults &&
          results.map(
            ({ urls, alt_description, width, height, links, user }) => (
              <ImageCards
                sourceLink={links.html}
                src={urls.regular}
                alt={alt_description}
                width={width}
                height={height}
                blurData={urls.thumb}
              />
            )
          )}
      </div>
    </Container>
  );
}

export default index;

export async function getServerSideProps(context) {
  const { page, query } = context.query;
  const searchResults = await searchUnsplash(page, query);
  console.log(searchResults);
  return {
    props: {
      searchResults,
    },
  };
}
