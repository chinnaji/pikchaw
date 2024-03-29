import React from "react";
import { searchPixaBay } from "../../../helpers/searchImages";
import Container from "../../../components/Container";
import ImageCards from "../../../components/ImageCards";
import SearchHeader from "../../../components/SearchHeader";
import Pagination from "../../../components/Pagination";

function searchPage({ searchResults, searchQuery, page }) {
  const { total_pages, results } = searchResults;
  return (
    <Container>
      <SearchHeader currentSource="pixabay" searchQuery={searchQuery} />

      <div className="gap-4 pt-2 columns-2xs [column-fill:_balance]">
        {searchResults &&
          results.map(
            ({
              webformatURL,
              previewURL,
              tags,
              webformatWidth,
              webformatHeight,
              pageURL,
            }) => (
              <ImageCards
                key={Math.random()}
                sourceLink={pageURL}
                src={webformatURL}
                alt={tags}
                width={webformatWidth}
                height={webformatHeight}
                blurData={previewURL}
              />
            )
          )}
      </div>

      <Pagination
        total_pages={total_pages}
        imageSource="pixabay"
        currentPage={page}
        searchQuery={searchQuery}
      />
    </Container>
  );
}

export default searchPage;

export async function getServerSideProps(context) {
  const { page, q } = context.query;
  const searchResults = await searchPixaBay(page, q);
  console.log(page, q);
  return {
    props: {
      searchResults,
      searchQuery: q,
      page,
    },
  };
}
