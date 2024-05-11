export const handleDocsRoute = (params: { slug: string[] }) => {
  if (!params.slug || params.slug.length === 0) {
    return "DOCS_HOME_PAGE"; // Handle the case where /docs is accessed without additional segments
  } else if (
    params.slug.length === 2 &&
    params.slug[0] === "feat" &&
    params.slug[1] === "sample"
  ) {
    return "FEATURE_CONCEPT_DOCS";
  } else if (params.slug.length === 1 && params.slug[0] === "feat") {
    return "FEATURE_DOCS";
  } else {
    return "NOT_FOUND";
  }
};
