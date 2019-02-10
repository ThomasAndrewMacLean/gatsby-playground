import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/Layout';
import Helmet from 'react-helmet';

if (typeof window !== 'undefined') {
  window.initMap = function() {
    new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 40, lng: 10 },
      zoom: 5,
    });
  };
}

const IndexPage = () => (
  <Layout>
    <Helmet>
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBgvHuij3rX9Ulc5ho0bN3fNLczsX_QbqY&callback=initMap"
        async
        defer
      />
    </Helmet>
    <div style={{ marginBottom: `1.45rem` }}>
      <div id="map" style={{ height: `400px` }} />
    </div>
  </Layout>
);

export default IndexPage;
