import React from 'react'
import { handleDocsRoute } from "../../_utils/docs/routing";
import { notFound } from 'next/navigation'
const Docs = ( { params, }: { params: {
  slug: string[]
} } ) => {
  
  const route = handleDocsRoute(params)

  switch (route) {
    case "FEATURE_CONCEPT_DOCS":
      return (
        <h1>
          Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
      );
    case "FEATURE_DOCS":
      return <h1>Viewing docs for feature {params.slug[0]}</h1>;
    case "NOT_FOUND":
      notFound()
    default:
      return <h1>Docs Home Page</h1>
  }

}

export default Docs