import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { searchUnsplash } from "../../../helpers/searchImages";
import Container from "../../../components/Container";
import ImageCards from "../../../components/ImageCards";
import ToggleImageSource from "../../../components/ToggleImageSource";

function index({ searchResults, searchQuery }) {
  // destructure total pages and resuts from searchResults param
  const { total_pages, results } = searchResults;
  return (
    <Container>
      <h1 className="text-xl my-5 font-semibold text-center">
        Showing results for - <u>{searchQuery}</u>
      </h1>
      <h1 className="text-xl my-5 font-semibold text-center">
        total pages - <u>{total_pages}</u>
      </h1>

      {/* component for toogling image source */}
      <ToggleImageSource currentSource="unsplash" searchQuery={searchQuery} />

      <div className="gap-4 pt-2 columns-2xs [column-fill:_balance]">
        {searchResults &&
          results.map(
            ({ urls, alt_description, width, height, links, user }) => (
              <ImageCards
                key={Math.random()}
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
  const { page, q } = context.query;
  const searchResults = await searchUnsplash(page, q);
  console.log(page, q);
  return {
    props: {
      searchResults,
      searchQuery: q,
    },
  };
}
