import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

interface Props {
  data: any;
}

const Index = ({ data }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = cheerio.load(data);
    const body = html('svg.js-calendar-graph-svg');
    if (divRef.current) {
      divRef.current.innerHTML = body;
    }
  }, []);

  return <div ref={divRef} />;
};

Index.getInitialProps = async () => {
  const result = await axios.get('https://github.com/users/cyjo9603/contributions');
  if (result?.data) {
    return { data: result.data };
  }
};

export default Index;
