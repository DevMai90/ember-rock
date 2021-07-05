import { module, test } from 'qunit';
import { visit, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { getPageTitle } from 'ember-page-title/test-support';
import { createBand } from 'ember-rock/tests/helpers/custom-helpers';

module('Acceptance | Bands', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Create a band', async function(assert) {
    this.server.create('band', { name: 'Royal Blood' });
    this.server.logging = true; // Logs Mirage network calls

    await visit('/');
    await createBand('Caspian');
    await waitFor('[data-test-rr="no-songs-text"]');

    assert.dom('[data-test-rr="band-list-item"]').exists({ count: 2 }, 'A new band link is rendered');
    assert.dom('[data-test-rr="band-list-item"]:last-child').hasText('Caspian', 'The new band link is rendered as the last');
    assert.dom('[data-test-rr="songs-nav-item"] > .active').exists('The Songs tab is active');
  });

  test('List bands', async function(assert) {
    this.server.create('band', { name: 'Radiohead' });
    this.server.create('band', { name: 'Long Distance Calling' });

    await visit('/');
    assert.equal(getPageTitle(), 'Bands | Rock & Roll with Octane');

    assert.dom('[data-test-rr="band-link"]').exists({ count: 2}, 'All band links are rendered');
    assert.dom('[data-test-rr="band-list-item"]:first-child').hasText('Radiohead', 'The first band link contains the band name');
    assert.dom('[data-test-rr="band-list-item"]:last-child').hasText('Long Distance Calling', 'The other band link contains the band name');
  });
});
