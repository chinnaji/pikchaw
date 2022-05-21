import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { searchUnsplash, searchPexels } from "../../../helpers/searchImages";
import Container from "../../../components/Container";
import ImageCards from "../../../components/ImageCards";
import ToggleImageSource from "../../../components/ToggleImageSource";
function searchPage({ searchResults, searchQuery }) {
  const { total_pages, results } = searchResults;
  return (
    <Container>
      <h1 className="text-xl my-5 font-semibold text-center">
        Showing results for - <u>{searchQuery}</u>
      </h1>
      <h1 className="text-xl my-5 font-semibold text-center">
        total pages - <u>{total_pages}</u>
      </h1>
      <ToggleImageSource currentSource="pexels" searchQuery={searchQuery} />

      <div className="gap-4 pt-2 columns-2xs [column-fill:_balance]">
        {searchResults &&
          results.map(({ url, src, alt, width, height }) => (
            <ImageCards
              key={Math.random()}
              sourceLink={url}
              src={src.large}
              alt={alt}
              width={width}
              height={height}
              blurData={src.tiny}
            />
          ))}
      </div>
    </Container>
  );
}

export default searchPage;

export async function getServerSideProps(context) {
  const { page, q } = context.query;
  const searchResults = await searchPexels(page, q);
  console.log(page, q);
  return {
    props: {
      searchResults,
      searchQuery: q,
    },
  };
}
