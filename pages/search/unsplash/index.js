import React from "react";
import SearchHeader from "../../../components/SearchHeader";
import { searchUnsplash } from "../../../helpers/searchImages";
import Container from "../../../components/Container";
import ImageCards from "../../../components/ImageCards";
import Pagination from "../../../components/Pagination";

function index({ searchResults, searchQuery, page }) {
  // destructure total pages and resuts from searchResults param
  const { total_pages, results } = searchResults;
  return (
    <Container>
      <SearchHeader currentSource="unsplash" searchQuery={searchQuery} />

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
      <Pagination
        total_pages={total_pages}
        imageSource="unsplash"
        currentPage={page}
        searchQuery={searchQuery}
      />
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
      page,
    },
  };
}
