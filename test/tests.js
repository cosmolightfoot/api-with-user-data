import './html-equal.js';
import './header-components.test.js';
import './build-filter-components.test.js';
import './gallery-components.test.js';
import './query-functions.test.js';
import './make-url-search.test.js';
import './object-to-array.test.js';
import './replace-colors.test.js';
import { app } from '../src/firebase/firebase.js';

QUnit.done(() => {
    app.delete;
});