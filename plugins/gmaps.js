import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAoV6PIxzNiqwNaMJy1RFWQMswTN3SNsn8',
    libraries: 'places'
  }
});
