const baseURL = process.env.NODE_ENV === 'production' ?
  'https://examples.vcplayground.org/credentials/' :
  'http://localhost:8788/credentials/';
const ldpBasicContainer = {
  '@context': [{
    '@version': 1.1,
    Container: 'http://www.w3.org/ns/ldp#Container',
    BasicContainer: 'http://www.w3.org/ns/ldp#BasicContainer',

    title: 'http://purl.org/dc/terms/title',
    contains: {
      '@id': 'http://www.w3.org/ns/ldp#contains',
      '@type': '@id',
      '@container': '@set'
    },
    files: {
      '@id': 'http://www.w3.org/ns/ldp#contains',
      '@type': '@id',
      '@container': '@index'
    }
  },
  {
    '@base': baseURL
  }],
  '@id': '',
  '@type': [ 'Container', 'BasicContainer' ],
  title: 'VC Examples',
  contains: []
};

class Index {
  data() {
    return {
      layout: false,
      permalink: 'credentials/index.json'
    };
  }

  render({examples}) {
    const dirs = Object.keys(examples).map(example => {
      return {
        '@id': `${baseURL}${example}/`,
        '@type': 'BasicContainer',
        title: example,
        files: {
          credential: `${baseURL}${example}/credential.json`,
          queries: `${baseURL}${example}/queries.json`,
          image: `${baseURL}${example}/image.png`
        }
      };
    });
    ldpBasicContainer.contains = dirs;
    return JSON.stringify(ldpBasicContainer, null, 2);
  }
}

export default Index;
