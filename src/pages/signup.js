import React from 'react';
// import { Link } from 'gatsby'

import Layout from '../components/layout';
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
    <div className="columns">
      <form
        class="column is-one-third is-three-quarters-mobile"
        method="post"
        onSubmit={e => {
          e.preventDefault();

          fetch('https://vkz9p19s67.execute-api.eu-west-1.amazonaws.com/prod', {
            method: 'POST',

            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: document.getElementById('firstName').value,
              email: document.getElementById('email').value,
              listId: 'c5227eae-e23a-11e8-a3c9-06b79b628af2',
            }),
          });
        }}
      >
        <div class="field email-octopus-form-row">
          <label for="label field_0">Email address</label>
          <input
            id="email"
            class="input"
            name="field_0"
            type="email"
            placeholder=""
          />
        </div>

        <div class="field email-octopus-form-row">
          <label for="label field_1">First name</label>
          <input
            id="firstName"
            name="field_1"
            type="text"
            class="input"
            placeholder=""
          />
        </div>
        <div class="field is-grouped">
          <div class="control">
            <input class="button is-link" type="submit" value="submit" />
          </div>
          <div class="control">
            <input class="button is-text" value="Cancel" />
          </div>
        </div>
      </form>
    </div>
  </Layout>
);

export default IndexPage;
