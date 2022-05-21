import React from "react";
import { searchPexels } from "../../../helpers/searchImages";
import Container from "../../../components/Container";
import ImageCards from "../../../components/ImageCards";
import SearchHeader from "../../../components/SearchHeader";
import Pagination from "../../../components/Pagination";

function searchPage({ searchResults, page, searchQuery }) {
  const { total_pages, results } = searchResults;
  return (
    <Container>
      <SearchHeader currentSource="pexels" searchQuery={searchQuery} />

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
      <Pagination
        total_pages={total_pages}
        imageSource="pexels"
        currentPage={page}
        searchQuery={searchQuery}
      />
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
      page,
    },
  };
}
