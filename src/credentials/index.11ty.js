class Index {
  data() {
    return {
      layout: false,
      permalink: 'credentials/index.json'
    };
  }

  render({examples}) {
    const rv = Object.keys(examples).map(example => {
      return [example, {
        credential: `${example}/credential.json`,
        queries: `${example}/queries.json`,
        image: `${example}/image.png`
      }];
    });
    return JSON.stringify(Object.fromEntries(rv), null, 2);
  }
}

export default Index;
