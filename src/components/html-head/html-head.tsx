import * as React from 'react'
import { Helmet } from 'react-helmet'

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />

const HTMLHead: React.FC = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>xlmig</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
  </Helmet>
)

export default HTMLHead
